<template>
    <HeaderProfile/>
    <div class="main-container">
        <div class="form-container">
            <h2>Enter Your Information</h2>

            <!-- Upload and Display Avatar -->
            <div class="avatar-container">
                <input type="file" @change="onFileChange">
                <div v-if="avatarUrl" class="avatar-preview">
                    <img :src="avatarUrl" alt="Avatar Preview">
                </div>
            </div>

            <!-- Render default input fields -->
            <input v-model="defaultInputs.facebook" placeholder="Facebook Link">
            <input v-model="defaultInputs.zalo" placeholder="Zalo Link">
            <input v-model="defaultInputs.bankAccount" placeholder="Bank Account">

            <!-- Render each additional input field using v-for -->
            <div v-for="(input, index) in additionalInputs" :key="index">
                <input v-model="input.value" :placeholder="`Input ${index + 4}`">
            </div>

            <div class="buttons">
                <button @click="addInput">Add More</button>
                <button @click="encryptData">Generate Encrypted Link</button>
                <SaveButton :dataToSave="combinedData" @save="handleSave"/>
            </div>
        </div>

        <div class="saved-data-container" v-if="savedData">
            <h2>Saved Data</h2>
            <table>
                <thead>
                    <tr>
                        <th v-if="savedData.avatar">Avatar</th>
                        <th>Facebook</th>
                        <th>Zalo</th>
                        <th>Bank Account</th>
                        <th v-if="savedData.additional.length > 0">Additional Inputs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-if="savedData.avatar"><img :src="savedData.avatar" alt="Avatar" class="saved-avatar"></td>
                        <td>{{ savedData.facebook }}</td>
                        <td>{{ savedData.zalo }}</td>
                        <td>{{ savedData.bankAccount }}</td>
                        <td v-if="savedData.additional.length > 0">
                            <ul>
                                <li v-for="(input, index) in savedData.additional" :key="index">{{ input }}</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="encryptedLink">
            <PhoneIframe  :src="iframeSrc" />
        </div>
    </div>
</template>

<script>
import SaveButton from '../../clients/saveData.vue';
import PhoneIframe from '../../clients/PhoneIframe.vue';
import HeaderProfile from './Header.vue'
export default {
    components: {
        SaveButton,
        PhoneIframe,
        HeaderProfile
    },
    data() {
        return {
            defaultInputs: {
                facebook: '',
                zalo: '',
                bankAccount: ''
            },
            additionalInputs: [],
            savedData: null,
            hasChanges: false,
            avatarUrl: null, // URL của ảnh đại diện
            encryptedLink: null // Lưu trữ liên kết mã hóa
        };
    },
    computed: {
        combinedData() {
            return {
                ...this.defaultInputs,
                additional: this.additionalInputs.map(input => input.value),
                avatar: this.avatarUrl
            };
        },
        iframeSrc() {
            return this.encryptedLink ? `/info/${this.encryptedLink}` : '';
        }
    },
    watch: {
        defaultInputs: {
            handler() {
                this.hasChanges = true;
            },
            deep: true
        },
        additionalInputs: {
            handler() {
                this.hasChanges = true;
            },
            deep: true
        },
        avatarUrl() {
            this.hasChanges = true;
        }
    },
    methods: {
        addInput() {
            // Thêm một ô input mới vào mảng additionalInputs
            this.additionalInputs.push({ value: '' });
        },
        encryptData() {
            // Kết hợp các input mặc định và các input bổ sung
            const combinedData = {
                ...this.defaultInputs,
                additional: this.additionalInputs.map(input => input.value),
                avatar: this.avatarUrl
            };

            // Mã hóa dữ liệu và tạo liên kết mã hóa
            this.encryptedLink = btoa(JSON.stringify(combinedData));
        },
        handleSave(data) {
            // Lưu dữ liệu khi sự kiện save được kích hoạt từ SaveButton
            if (this.hasChanges) {
                this.savedData = data;
                this.hasChanges = false;
            }
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.avatarUrl = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }
    }
}
</script>

<style scoped>
.main-container {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.form-container, .saved-data-container {
    flex: 1;
    margin: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.avatar-container {
    text-align: center;
    margin-bottom: 20px;
}

.avatar-preview {
    margin-top: 10px;
}

.avatar-preview img {
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
}

.saved-avatar {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

ul {
    list-style-type: none;
    padding: 0;
}

.buttons {
    display: flex;
    justify-content: space-between;
}

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
