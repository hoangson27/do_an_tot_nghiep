<template>
  <div class="page-container">
    <header>
      <h1>Chào mừng đến với trang web của chúng tôi</h1>
    </header>
    <main>
      <section id="introduction" class="section">
        <h2>Giới thiệu về thẻ NFC</h2>
        <p>Thẻ NFC là một công nghệ cho phép truyền dữ liệu không dây giữa các thiết bị tương thích.</p>
      </section>
      <section id="features" class="section">
        <h2>Chức năng và tính năng</h2>
        <ul>
          <li>Tạo thẻ NFC tùy chỉnh</li>
          <li>Bán thẻ NFC trực tuyến</li>
        </ul>
      </section>
    </main>
    <footer>
      <p>© 2024 Công ty của chúng tôi</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.page-container {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}

header {
  background-color: #007bff;
  color: #fff;
  padding: 20px;
}

header h1 {
  font-size: 36px;
  margin: 0;
}

main {
  margin-top: 20px;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  font-size: 28px;
  color: #333;
}

.section p {
  font-size: 18px;
  line-height: 1.6;
  color: #666;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

footer {
  background-color: #f8f9fa;
  padding: 10px;
  margin-top: 20px;
}

footer p {
  font-size: 14px;
  color: #666;
}
</style>
