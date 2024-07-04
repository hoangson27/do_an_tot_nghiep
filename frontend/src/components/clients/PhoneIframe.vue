<template>
    <div class="phone-frame">
      <iframe :src="src" frameborder="0" class="phone-iframe"></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PhoneIframe',
    props: {
      src: {
        type: String,
        required: true,
      },
    },
  }
  </script>
  
  <style scoped>
  .phone-frame {
    width: 375px; /* width of iPhone 8 */
    height: 667px; /* height of iPhone 8 */
    border: 16px solid black;
    border-top-width: 60px;
    border-bottom-width: 60px;
    border-radius: 36px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: relative;
  }
  
  .phone-frame::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    width: 60px;
    height: 5px;
    background: #333;
    border-radius: 10px;
    transform: translateX(-50%);
  }
  
  .phone-frame::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 35px;
    height: 35px;
    background: #333;
    border-radius: 50%;
    transform: translateX(-50%);
  }
  
  .phone-iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px;
  }
  </style>
  