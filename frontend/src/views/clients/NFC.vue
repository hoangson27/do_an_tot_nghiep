<template>
    <div class="card-container">
      <div class="card" :style="{ transform: `rotateY(${rotateDeg}deg)` }" @click="toggleCard">
        <div class="card-inner">
          <div class="card-front">
            <input type="file" @change="handleFileUpload">
            <img v-if="frontImageUrl" :src="frontImageUrl" alt="Card front" class="card-image">
          </div>
          <div class="card-back">
            <img src="/logo.jpg" alt="Brand logo" class="brand-logo">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rotateDeg: 0,
        frontImageUrl: null
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.frontImageUrl = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      toggleCard() {
        this.rotateDeg += 180; // Quay 180 độ mỗi lần click để xem mặt trước và mặt sau
      }
    }
  };
  </script>
  
  <style scoped>
  .card-container {
    perspective: 1500px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .card {
    width: 300px;
    height: 450px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    cursor: pointer; /* Thêm con trỏ vào để chỉ ra sự tương tác */
  }
  
  .card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform-style: preserve-3d;
  }
  
  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    background-color: white;
  }
  
  .card-front {
    transform: rotateY(0deg);
  }
  
  .card-back {
    transform: rotateY(180deg);
  }
  
  .card-image {
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px;
  }
  
  .brand-logo {
    max-width: 80px; /* adjust size as needed */
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  </style>
  