<template setup>
  <nav>
    <div class="navbar-container" :class="{ active: isMenuActive }" @click="toggleMenu">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/">
          <img src="D:\work\do_an_tot_nghiep\frontend\src\assets\logo.jpg" alt="Logo">
        </router-link>
      </div>

      <!-- Menu Items -->
      <ul class="menu">
        <li class="dropdown">
          <span class="dropdown-btn">App</span>
          <ul class="dropdown-content">
            <li><router-link to="/short-link">Short Link</router-link></li>
            <li><router-link to="/create-qr">Create QR</router-link></li>
            <li><router-link to="/nfc">NFC</router-link></li>
          </ul>
        </li>
        <li><router-link to="/pricing">Pricing</router-link></li>
        <li class="dropdown">
          <span class="dropdown-btn">About</span>
          <ul class="dropdown-content">
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/careers">Careers</router-link></li>
          </ul>
        </li>
      </ul>
      <!-- Login/Sign Up -->
      <div class="login-signup">
        <ul class="menu-buton">
          <button>
            <router-link to="/login">Login</router-link>
          </button>
          <button>
            <router-link to="/register" class="sign-up">Sign Up</router-link>
          </button>
        </ul>
      </div>
    </div>
  </nav>
  <h1>fdsfds</h1>
</template>
<style scoped>
/* Navbar Container */
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

/* Logo */
.logo img {
  height: 30px;
}

/* Menu */
.menu {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  margin-right: 20px;
  position: relative;
}

.menu li a {
  text-decoration: none;
}

.menu-buton button a {
  text-decoration: none;
}

.dropdown {
  position: relative;
}

.dropdown .dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-btn {
  cursor: pointer;
}

.dropdown-content li {
  padding: 10px;
}

/* Login/Sign Up */
.login-signup {

  padding: 10px;
  border-radius: 5px;
}

.menu-buton button:not(a) {
  margin-right: 10px;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}

.menu-buton button:hover:not(a) {
  opacity: 0.8;
}

.menu-buton button:nth-child(1) {
  background-color: #f1f3f8;
  /* Màu nền của button Login */
}

.menu-buton button:nth-child(2) {
  background-color: #acff00;
  /* Màu nền của button Sign Up */
}

.menu-buton button:nth-child(2):hover {
  background-color: #8bc34a;
  /* Hiệu ứng hover của button Sign Up */
}

/* Router Link */
router-link {
  text-decoration: none;
  /* Loại bỏ gạch chân mặc định */
  color: inherit;
  /* Kế thừa màu sắc của cha đối tượng */
  cursor: pointer;
  /* Biến con trỏ thành hình con trỏ */
}

/* Responsive */
/* Responsive */
/* Responsive */
@media screen and (max-width: 768px) {

  /* Biến CSS */
  :root {
    --menu-border-color: #ccc;
    --menu-background-color: #fff;
    --menu-padding: 10px;
  }

  /* Ẩn menu và hiển thị logo, nút đăng nhập/đăng ký */
  .menu {
    display: none;
  }

  .logo,
  .login-signup {
    display: block;
  }

  /* Thêm nút menu (hamburger icon) */
  .navbar-container::after {
    content: '\2630';
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }

  /* Khi nút menu được click, hiển thị menu */
  .navbar-container.active .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: var(--menu-background-color);
    border: 1px solid var(--menu-border-color);
    border-radius: 5px;
    width: 200px;
  }

  /* Điều chỉnh lại các thẻ li và a trong menu khi hiển thị */
  .navbar-container.active .menu li {
    margin: 0;
    border-bottom: 1px solid var(--menu-border-color);
  }

  .navbar-container.active .menu li a {
    display: block;
    padding: var(--menu-padding);
  }

  /* Loại bỏ border cuối cùng */
  .navbar-container.active .menu li:last-child a {
    border-bottom: none;
  }
}
</style>
<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;

    },
  },
};
</script>
