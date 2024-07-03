<template>
    <div class="analytics">
      <div class="controls">
        <label for="period-select">Chọn khoảng thời gian: </label>
        <select id="period-select" v-model="period" @change="fetchVisitorData">
          <option value="daily">Hàng ngày</option>
          <option value="weekly">Hàng tuần</option>
          <option value="monthly">Hàng tháng</option>
          <option value="yearly">Hàng năm</option>
        </select>
      </div>
      <BarChart :chartData="chartData" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from 'vue';
  import { Bar } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default {
    name: 'Analytics',
    components: {
      BarChart: {
        props: ['chartData'],
        extends: Bar,
        mounted() {
          this.renderChart(this.chartData, {
            responsive: true,
            maintainAspectRatio: false,
          });
        },
        watch: {
          chartData(newData) {
            this.renderChart(newData, {
              responsive: true,
              maintainAspectRatio: false,
            });
          },
        },
      },
    },
    setup() {
      const visitorData = ref([]);
      const period = ref('daily');
      const chartData = ref({
        labels: [],
        datasets: [
          {
            label: 'Số người truy cập',
            backgroundColor: '#42A5F5',
            data: [],
          },
        ],
      });
  
      const fetchVisitorData = async () => {
        try {
          const response = await fetch(`https://api.example.com/visitors?period=${period.value}`); // Thay URL bằng API thực tế của bạn
          const data = await response.json();
          updateChartData(data);
        } catch (error) {
          console.error('Error fetching visitor data:', error);
        }
      };
  
      const updateChartData = (data) => {
        chartData.value.labels = data.labels; // Giả sử API trả về labels và count
        chartData.value.datasets[0].data = data.count;
      };
  
      onMounted(() => {
        fetchVisitorData();
      });
  
      watch(period, () => {
        fetchVisitorData();
      });
  
      return {
        period,
        chartData,
        fetchVisitorData,
      };
    },
  };
  </script>
  
  <style scoped>
  .analytics {
    text-align: center;
    margin: 20px;
  }
  
  .controls {
    margin-bottom: 20px;
  }
  
  label {
    margin-right: 10px;
  }
  
  select {
    padding: 5px;
  }
  
  .chart-container {
    position: relative;
    height: 400px;
  }
  </style>
  