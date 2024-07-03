<template>
    <div class="form-register">
      <h2>Đăng ký</h2>
      <form @submit.prevent="handleSubmit">
        <div v-if="step === 1">
          <label for="username">Tên người dùng:</label>
          <div class="input-group">
            <span>digiatalcard.com/</span>
            <input 
              type="text" 
              id="username" 
              v-model="username" 
              placeholder="user" 
              required 
            />
          </div>
          <button type="submit">Tiếp tục</button>
        </div>
        <div v-if="step === 2">
          <div>
            <p>This is your website: <strong>Https://digiatalcard/</strong>{{ username }}</p>
          </div>
          
          <label for="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            required 
          />
          <label for="password">Mật khẩu:</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            required 
          />
          <label for="confirmPassword">Xác nhận mật khẩu:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            v-model="confirmPassword" 
            required 
          />
          
          <button type="submit">Đăng ký</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        step: 1,
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSubmit() {
        if (this.step === 1) {
          // Kiểm tra tên người dùng, chuyển sang bước tiếp theo
          console.log('Tên người dùng:', this.username);
          this.step = 2;
        } else if (this.step === 2) {
          // Xử lý đăng ký với email và mật khẩu
          console.log('Email:', this.email);
          console.log('Mật khẩu:', this.password);
          console.log('Xác nhận mật khẩu:', this.confirmPassword);
          // Thêm logic kiểm tra mật khẩu và gửi dữ liệu
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-register {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  h2 {
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #555;
  }
  
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .input-group span {
    background-color: #f0f0f0;
    padding: 8px;
    border-right: 1px solid #ccc;
    color: #555;
  }
  
  .input-group input {
    flex: 1;
    padding: 8px;
    border: none;
    outline: none;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 16px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    margin-bottom: 16px;
    font-size: 16px;
    color: #333;
  }
  
  strong {
    color: #007bff;
  }
  </style>
  