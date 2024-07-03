<template>
  <div class="page-container">
    <header>
      <h1>Chào mừng đến với trang web của chúng tôi</h1>
    </header>
    <main>
      <section id="introduction" class="section">
        <div class="content">
          <h2>Giới thiệu về thẻ NFC</h2>
          <p>Thẻ NFC là một công nghệ cho phép truyền dữ liệu không dây giữa các thiết bị tương thích.</p>
        </div>
      </section>
      <section id="features" class="section">
        <div class="content">
          <h2>Chức năng và tính năng</h2>
          <ul>
            <li>Tạo thẻ NFC tùy chỉnh</li>
            <li>Bán thẻ NFC trực tuyến</li>
          </ul>
        </div>
      </section>
      <section id="how-it-works" class="section">
        <div class="content">
          <h2>Cách thức hoạt động</h2>
          <p>Quy trình sử dụng thẻ NFC rất đơn giản và tiện lợi:</p>
          <ol>
            <li>Chọn thẻ NFC phù hợp với nhu cầu của bạn</li>
            <li>Tùy chỉnh thiết kế và thông tin trên thẻ</li>
            <li>Thanh toán và nhận thẻ NFC của bạn</li>
            <li>Sử dụng thẻ NFC để truyền dữ liệu không dây</li>
          </ol>
        </div>
      </section>
      <section id="testimonials" class="section">
        <div class="content">
          <h2>Khách hàng nói gì về chúng tôi</h2>
          <div class="testimonial">
            <p>"Thẻ NFC của công ty đã giúp chúng tôi cải thiện quy trình kinh doanh đáng kể. Dịch vụ tuyệt vời!" - Khách hàng A</p>
          </div>
          <div class="testimonial">
            <p>"Tôi rất hài lòng với chất lượng và tính năng của thẻ NFC. Rất dễ sử dụng và hiệu quả." - Khách hàng B</p>
          </div>
        </div>
      </section>
      <section id="contact" class="section">
        <div class="content">
          <h2>Liên hệ với chúng tôi</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Tên của bạn:</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            <div class="form-group">
              <label for="message">Lời nhắn:</label>
              <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <button type="submit">Gửi</button>
          </form>
        </div>
      </section>
    </main>
    <footer>
      <p>© 2024 Công ty của chúng tôi</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic
      console.log('Form submitted:', this.form);
      alert('Cảm ơn bạn đã liên hệ với chúng tôi!');
      // Reset form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
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

.page-container {
  font-family: var(--font-family);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

header {
  background-color: var(--primary-color);
  color: #fff;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 40px;
}

header h1 {
  font-size: var(--font-size-large);
  margin: 0;
}

main {
  width: 100%;
  max-width: 800px;
}

.section {
  margin-bottom: 40px;
  text-align: left;
}

.content {
  padding: 20px;
  background: var(--secondary-color);
  border-radius: 8px;
}

.section h2 {
  font-size: var(--font-size-medium);
  color: var(--text-color);
  margin-bottom: 20px;
}

.section p,
ul li,
ol li {
  font-size: var(--font-size-regular);
  line-height: 1.6;
  color: var(--text-muted);
}

ul,
ol {
  list-style-position: inside;
  padding-left: 20px;
}

ul li,
ol li {
  margin-bottom: 10px;
}

footer {
  background-color: var(--secondary-color);
  width: 100%;
  padding: 10px 0;
  text-align: center;
}

footer p {
  font-size: var(--font-size-small);
  color: var(--text-muted);
}

.testimonial {
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: var(--font-size-regular);
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: var(--primary-color);
  color: #fff;
  padding: 10px 20px;
  font-size: var(--font-size-regular);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darken(var(--primary-color), 10%);
}
</style>
