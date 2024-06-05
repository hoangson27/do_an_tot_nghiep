<template>
    <div class="register-form">
        <h2>Đăng ký</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Tên:</label>
                <input type="text" v-model="form.name" id="name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="form.email" id="email" required />
            </div>
            <div>
                <label for="password">Mật khẩu:</label>
                <input type="password" v-model="form.password" id="password" required />
            </div>
            <div>
                <label for="confirmPassword">Nhập lại mật khẩu:</label>
                <input type="password" v-model="confirmPassword" id="confirmPassword" required />
            </div>
            <button type="submit">Đăng ký</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            },
            confirmPassword: ''
        };
    },
    methods: {
        handleSubmit() {
            // Kiểm tra xem mật khẩu và mật khẩu xác nhận có khớp nhau không
            if (this.form.password !== this.confirmPassword) {
                alert('Mật khẩu xác nhận không khớp!');
                return;
            }

            // Thực hiện hành động khi form được submit
            console.log('Form data:', this.form);
            // Bạn có thể gửi dữ liệu này đến server bằng AJAX hoặc fetch API
        }
    }
};
</script>

<style scoped>
.register-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.register-form div {
    margin-bottom: 10px;
}

.register-form label {
    display: block;
    margin-bottom: 5px;
}

.register-form input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.register-form button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.register-form button:hover {
    background-color: #218838;
}
</style>