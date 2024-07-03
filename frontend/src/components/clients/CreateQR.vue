<template>
  <div>
    <!-- Hiển thị thông tin có sẵn -->
    <div class="info">
      <h2>Thông tin có sẵn:</h2>
      <p>{{ info }}</p>
    </div>

    <!-- Upload ảnh và chọn kích thước -->
    <div class="image-upload">
      <input type="file" @change="handleFileUpload" accept="image/*">
      <div>
        <label>
          <input type="radio" v-model="selectedSize" value="Small"> Small (320px)
        </label>
        <label>
          <input type="radio" v-model="selectedSize" value="Medium"> Medium (375px)
        </label>
        <label>
          <input type="radio" v-model="selectedSize" value="Large"> Large (414px)
        </label>
      </div>
    </div>

    <!-- Hiển thị hình ảnh đã tải lên -->
    <div class="uploaded-image" v-if="uploadedImageUrl">
      <h3>Hình ảnh đã tải lên:</h3>
      <img :src="uploadedImageUrl" :style="{ maxWidth: '100%', height: 'auto' }" alt="Uploaded Image">
    </div>

    <!-- Button để ghép ảnh và QR -->
    <button @click="mergeImageWithQR">Ghép ảnh và QR</button>

    <!-- Kết quả hình ảnh ghép ở đây -->
    <div class="result" v-if="mergedImage">
      <h3>Hình ảnh ghép:</h3>
      <img :src="mergedImage" :style="{ maxWidth: '100%', height: 'auto' }" alt="Merged Image">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import QRCode from 'qrcode';

export default {
  name: 'CreateQR',
  data() {
    return {
      info: 'Thông tin ví dụ: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageFile: null,
      uploadedImageUrl: null,
      selectedSize: 'Medium', // Kích thước ảnh mặc định khi tải lên
      mergedImage: null
    };
  },
  methods: {
    async generateQRCode(text) {
      try {
        return await QRCode.toDataURL(text);
      } catch (error) {
        console.error('Failed to generate QR code:', error);
        return null;
      }
    },
    async handleFileUpload(event) {
      this.imageFile = event.target.files[0];

      // Đọc file ảnh và hiển thị ảnh đã tải lên
      const reader = new FileReader();
      reader.readAsDataURL(this.imageFile);

      reader.onload = () => {
        this.uploadedImageUrl = reader.result;
      };
    },
    async mergeImageWithQR() {
      if (!this.imageFile) {
        alert('Vui lòng tải lên một ảnh trước.');
        return;
      }

      // Đọc file ảnh
      const reader = new FileReader();
      reader.readAsDataURL(this.imageFile);

      reader.onload = async () => {
        const imageDataUrl = reader.result;

        // Tạo mã QR từ thông tin có sẵn
        const qrCodeDataUrl = await this.generateQRCode(this.info);

        // Tạo canvas để ghép ảnh
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Tạo image object từ imageDataUrl
        const image = new Image();

        image.onload = () => {
          // Chọn kích thước ảnh dựa trên selectedSize
          let newWidth, newHeight;
          switch (this.selectedSize) {
            case 'Small':
              newWidth = 320;
              newHeight = 568;
              break;
            case 'Medium':
              newWidth = 375;
              newHeight = 667;
              break;
            case 'Large':
              newWidth = 414;
              newHeight = 736;
              break;
            default:
              newWidth = 375;
              newHeight = 667;
              break;
          }

          canvas.width = newWidth;
          canvas.height = newHeight;

          // Vẽ ảnh lên canvas
          ctx.drawImage(image, 0, 0, newWidth, newHeight);

          // Tạo image object từ qrCodeDataUrl
          const qrCodeImage = new Image();
          qrCodeImage.onload = () => {
            const qrSize = 100; // Kích thước mã QR
            const qrX = (newWidth - qrSize) / 2; // Vị trí X để căn giữa
            const qrY = newHeight - qrSize - 10; // Vị trí Y để đặt ở dưới cùng

            // Vẽ mã QR vào giữa dưới cùng của ảnh
            ctx.drawImage(qrCodeImage, qrX, qrY, qrSize, qrSize);

            // Đưa kết quả về dưới dạng data URL
            this.mergedImage = canvas.toDataURL('image/png');
          };

          // Load qrCodeImage từ qrCodeDataUrl
          qrCodeImage.src = qrCodeDataUrl;
        };

        // Load image từ imageDataUrl
        image.src = imageDataUrl;
      };

      reader.onerror = (error) => {
        console.error('Failed to read the file:', error);
        alert('Đã xảy ra lỗi khi đọc file.');
      };
    }
  }
};
</script>

<style scoped>
.info {
  margin-bottom: 20px;
}

.image-upload {
  margin-bottom: 20px;
}

.image-upload input[type="file"] {
  margin-bottom: 10px;
}

.uploaded-image {
  margin-bottom: 20px;
  text-align: center; /* Căn giữa hình ảnh */
}

.uploaded-image img, .result img {
  max-width: 100%;
  height: auto; /* Đảm bảo tỉ lệ hình ảnh không bị méo */
}
</style>
