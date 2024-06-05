<template>
    <div>
        <h2>Enter Your Information</h2>
        <input v-model="facebook" placeholder="Facebook Link">
        <input v-model="zalo" placeholder="Zalo Link">
        <input v-model="bankAccount" placeholder="Bank Account">
        <button @click="encryptData">Generate Encrypted Link</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            facebook: '',
            zalo: '',
            bankAccount: ''
        };
    },
    methods: {
        encryptData() {
            // Logic to encrypt the data and generate the encrypted link
            const encryptedLink = btoa(JSON.stringify({
                facebook: this.facebook,
                zalo: this.zalo,
                bankAccount: this.bankAccount
            }));

            // Redirect to the InfoPage with the encrypted link
            this.$router.push({ name: 'InfoPage', params: { encryptedLink } });
        }

    }
}
</script>