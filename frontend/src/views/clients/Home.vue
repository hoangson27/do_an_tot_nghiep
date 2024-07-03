<template>
    <div class="home-container">
      <header>
        <h1>Chào mừng đến với trang web của chúng tôi</h1>
        <p>Nơi bạn có thể tạo liên kết Bio, mã QR và thẻ NFC.</p>
      </header>
      <main>
        <section id="bio-link" class="section">
          <h2>Tạo Bio Link</h2>
          <p>Tạo liên kết Bio dễ dàng để chia sẻ thông tin cá nhân của bạn với người khác.</p>
          <router-link to="/bio-link" class="btn">Tìm hiểu thêm</router-link>
        </section>
        <section id="qr-code" class="section">
          <h2>Tạo mã QR</h2>
          <p>Tạo mã QR để chia sẻ thông tin nhanh chóng và thuận tiện.</p>
          <router-link to="/qr-code" class="btn">Tìm hiểu thêm</router-link>
        </section>
        <section id="nfc-tag" class="section">
          <h2>Tạo thẻ NFC</h2>
          <p>Tạo thẻ NFC để truyền dữ liệu không dây giữa các thiết bị tương thích.</p>
          <router-link to="/nfc-tag" class="btn">Tìm hiểu thêm</router-link>
        </section>
      </main>
      <footer>
        <p>© 2024 Công ty của chúng tôi</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  };
  </script>
  
  <style scoped>
  :root {
    --primary-color: #007bff;
    --secondary-color: #f8f9fa;
    --text-color: #333;
    --text-muted: #666;
    --font-family: 'Arial', sans-serif;
    --font-size-large: 2.25rem; /* 36px */
    --font-size-medium: 1.75rem; /* 28px */
    --font-size-regular: 1.125rem; /* 18px */
    --font-size-small: 0.875rem; /* 14px */
  }
  
  .home-container {
    font-family: var(--font-family);
    text-align: center;
    padding: 20px;
  }
  
  header {
    background-color: var(--primary-color);
    color: #fff;
    padding: 20px;
  }
  
  header h1 {
    font-size: var(--font-size-large);
    margin: 0;
  }
  
  header p {
    font-size: var(--font-size-regular);
    margin-top: 10px;
  }
  
  main {
    margin-top: 20px;
  }
  
  .section {
    margin-bottom: 40px;
    padding: 20px;
    background-color: var(--secondary-color);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .section h2 {
    font-size: var(--font-size-medium);
    color: var(--text-color);
    margin-bottom: 20px;
  }
  
  .section p {
    font-size: var(--font-size-regular);
    color: var(--text-muted);
    line-height: 1.6;
  }
  
  .btn {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: var(--primary-color);
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: darken(var(--primary-color), 10%);
  }
  
  footer {
    background-color: var(--secondary-color);
    padding: 10px;
    margin-top: 20px;
  }
  
  footer p {
    font-size: var(--font-size-small);
    color: var(--text-muted);
  }
  </style>
  