<template lang="">
    <div class="header-profile">
        <div class="header-container">
            <div class="header-content">
                <div class="title">
                    My Pages
                </div>
                <button class="manage-button">
                    Manage pages
                </button>
            </div>
            <div class="separator"></div>
            <div class="pages-list">
                <button v-for="(page, index) in pages" :key="index" class="page-item">
                    {{ page }}
                </button>
                <button class="add-page-button" @click="addPage">
                    Add Page
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderProfile',
    data() {
        return {
            pages: ['Default']
        };
    },
    methods: {
        addPage() {
            this.pages.push(`Page ${this.pages.length + 1}`);
        }
    }
}
</script>

<style scoped>
.header-profile {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px; /* Bạn có thể thay đổi giá trị này để phù hợp với layout của mình */
    padding: 0 20px;
    box-sizing: border-box;
}

.title {
    font-size: 24px;
    font-weight: bold;
}

.manage-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.manage-button:hover {
    background-color: #45a049;
}

.separator {
    width: 100%;
    border-bottom: 1px solid #666;
    margin: 20px 0;
}

.pages-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 800px; /* Bạn có thể thay đổi giá trị này để phù hợp với layout của mình */
    padding: 0 20px;
    box-sizing: border-box;
}

.page-item {
    background-color: #f1f1f1;
    color: #333;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
}

.page-item:hover {
    background-color: #ddd;
}

.add-page-button {
    background-color: #008CBA;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
}

.add-page-button:hover {
    background-color: #007B9A;
}
</style>
