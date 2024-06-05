<template setup>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/short-link">Short Link</router-link></li>
      <li><router-link to="/create-qr">Create QR</router-link></li>
      <li><router-link to="/nfc">NFC</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
  <h1>fdsfds</h1>
</template>

<style scoped>
.navbar {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
  /* Căn giữa nội dung */
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  /* Căn giữa các phần tử con */
}

.navbar li {
  display: inline-block;
}

.navbar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.navbar a:hover {
  color: #007BFF;
}
</style>
