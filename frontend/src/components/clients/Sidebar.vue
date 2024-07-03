<template>
    <div class="sidebar">
      <h2>App</h2>
      <ul>
        <li @click="navigate('ShortLink')">Create Bio Link</li>
        <li @click="navigate('QRCode')">Create QR Code</li>
        <li @click="navigate('NFC')">Create NFC Tag</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    methods: {
      navigate(component) {
        this.$emit('navigate', component);
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background-color: #f8f9fa;
    padding: 20px;
    border-right: 1px solid #ddd;
  }
  
  .sidebar h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar ul li {
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .sidebar ul li:hover {
    background-color: #007bff;
    color: white;
  }
  </style>
  