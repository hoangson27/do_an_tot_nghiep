<template>
  <div class="landing-page">
    <div class="hero-section">
      <div class="hero-content">
        <h1>Chào mừng đến với ứng dụng tạo mã QR</h1>
        <p>
          Ứng dụng tạo mã QR giúp bạn dễ dàng tạo ra các mã QR code để chia sẻ thông tin, URL, liên kết và nhiều nội dung khác một cách nhanh chóng và tiện lợi.
        </p>
        <router-link to="/create-qr">
          <button>Tạo mã QR ngay</button>
        </router-link>
      </div>
      <div class="hero-image">
        <img src="./assets/qrcode.png" alt="QR Code" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
};
</script>

<style scoped>
.landing-page {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}

.hero-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero-content {
  flex: 1;
  text-align: left;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 20px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;
}

button {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.hero-image {
  flex: 1;
  margin-left: 40px;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
