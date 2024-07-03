<template>
    <div class="login-form">
        <form @submit.prevent="handleSubmit">
            <h2>Login</h2>
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        handleSubmit() {
            console.log('Username:', this.username);
            console.log('Password:', this.password);
            this.$router.push({ name: 'Dashboard' });
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

.login-form {
    font-family: 'Poppins', sans-serif;
    max-width: 350px;
    margin: auto;
    padding: 40px;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    color: white;
    text-align: center;
}

.login-form h2 {
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
}

.input-group input {
    width: calc(100% - 20px);
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 0 auto;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

.input-group input:focus {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: #42b983;
    color: white;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
    background-color: #3a9a73;
    transform: translateY(-2px);
}

button:active {
    transform: translateY(1px);
}
</style>