<template>
    <div class="card">
        <h2>Information Card</h2>
        <!-- Decode the encrypted link and parse it to JSON -->
        <div v-if="decodedData">
            <p><strong>Facebook Link:</strong> {{ decodedData.facebook }}</p>
            <p><strong>Zalo Link:</strong> {{ decodedData.zalo }}</p>
            <p><strong>Bank Account:</strong> {{ decodedData.bankAccount }}</p>
            <div v-if="decodedData.avatar">
                <p><strong>Avatar:</strong></p>
                <img :src="decodedData.avatar" alt="Avatar" class="avatar-preview">
            </div>
            <div v-for="(item, index) in decodedData.additional" :key="index">
                <p><strong>Additional Input {{ index + 1 }}:</strong> {{ item }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    props: ['encryptedLink'],
    setup(props) {
        const decodedData = ref(null);

        onMounted(() => {
            // Decode the encrypted link and parse it to JSON
            const json = atob(props.encryptedLink);
            decodedData.value = JSON.parse(json);
        });

        return { decodedData };
    }
}
</script>

<style scoped>
.card {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.avatar-preview {
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
}
</style>
