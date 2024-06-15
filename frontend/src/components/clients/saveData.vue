<template>
    <button @click="saveData">Save</button>
</template>

<script>
export default {
    props: ['dataToSave'],
    methods: {
        saveData() {
            if (this.dataToSave) {
                this.$emit('save', this.dataToSave);
            }
        }
    }
}
</script>

<style scoped>
button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

button:focus {
    outline: none;
}
</style>
