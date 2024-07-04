<template>
  <div>
    <!-- Hiển thị thông tin có sẵn -->
    <div class="info">
      <h2>Thông tin có sẵn:</h2>
      <p>{{ info }}</p>
    </div>

    <!-- Upload ảnh và chọn kích thước -->
    <div class="image-upload">
      <h3>Tải lên ảnh:</h3>
      <input type="file" @change="handleFileUpload" accept="image/*">
      <div>
        <label>
          <input type="radio" v-model="selectedSize" value="Avatar"> Avatar (200x200px)
        </label>
        <label>
          <input type="radio" v-model="selectedSize" value="Phone Background"> Phone Background (375x667px)
        </label>
        <label>
          <input type="radio" v-model="selectedSize" value="Full Screen"> Full Screen (1920x1080px)
        </label>
      </div>
    </div>

    <!-- Chọn ảnh từ danh sách có sẵn -->
    <div class="image-list">
      <h3>Chọn ảnh từ danh sách có sẵn:</h3>
      <div v-for="(image, index) in availableImages" :key="index" class="image-option" @click="selectImage(image)">
        <img :src="image" :alt="'Image ' + (index + 1)" />
      </div>
    </div>

    <!-- Nhập dữ liệu cho mã QR -->
    <div class="qr-input">
      <input v-model="qrData" placeholder="Nhập dữ liệu cho mã QR">
      <button @click="useDefaultBio">Sử dụng liên kết bio mặc định</button>
    </div>

    <!-- Hiển thị hình ảnh đã chọn hoặc tải lên -->
    <div class="uploaded-image" v-if="resizedImageUrl">
      <h3>Hình ảnh đã chọn:</h3>
      <img :src="resizedImageUrl" :style="{ maxWidth: '100%', height: 'auto' }" alt="Selected Image">
    </div>

    <!-- Button để ghép ảnh và QR -->
    <button @click="mergeImageWithQR">Ghép ảnh và QR</button>

    <!-- Kết quả hình ảnh ghép ở đây -->
    <div class="result" v-if="mergedImage">
      <h3>Hình ảnh ghép:</h3>
      <div>
        <label>
          <input type="radio" v-model="renderSize" value="Small"> Small (320px)
        </label>
        <label>
          <input type="radio" v-model="renderSize" value="Medium"> Medium (375px)
        </label>
        <label>
          <input type="radio" v-model="renderSize" value="Large"> Large (414px)
        </label>
      </div>
      <img :src="mergedImage" :style="{ maxWidth: renderWidth, height: 'auto' }" alt="Merged Image">
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
      selectedImageUrl: null,
      resizedImageUrl: null,
      selectedSize: 'Phone Background', // Kích thước ảnh mặc định khi tải lên
      qrData: '', // Dữ liệu để tạo mã QR
      mergedImage: null,
      renderSize: 'Medium', // Kích thước mặc định khi render hình ảnh ghép
      availableImages: [ // Danh sách ảnh có sẵn để chọn
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg'
      ]
    };
  },
  computed: {
    renderWidth() {
      switch (this.renderSize) {
        case 'Small':
          return '320px';
        case 'Medium':
          return '375px';
        case 'Large':
          return '414px';
        default:
          return '375px';
      }
    }
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
    handleFileUpload(event) {
      this.imageFile = event.target.files[0];

      // Đọc file ảnh và hiển thị ảnh đã tải lên
      const reader = new FileReader();
      reader.readAsDataURL(this.imageFile);

      reader.onload = () => {
        this.uploadedImageUrl = reader.result;
        this.resizeImage(this.uploadedImageUrl);
        this.selectedImageUrl = null; // Reset selectedImageUrl khi tải lên ảnh mới
      };
    },
    selectImage(imageUrl) {
      this.selectedImageUrl = imageUrl;
      this.uploadedImageUrl = null; // Reset uploadedImageUrl khi chọn ảnh từ danh sách
      this.resizeImage(this.selectedImageUrl);
    },
    useDefaultBio() {
      this.qrData = 'https://www.example.com/bio';
    },
    async resizeImage(imageUrl) {
      const image = new Image();
      image.src = imageUrl;

      image.onload = () => {
        let newWidth, newHeight;
        switch (this.selectedSize) {
          case 'Avatar':
            newWidth = 200;
            newHeight = 200;
            break;
          case 'Phone Background':
            newWidth = 375;
            newHeight = 667;
            break;
          case 'Full Screen':
            newWidth = 1920;
            newHeight = 1080;
            break;
          default:
            newWidth = 375;
            newHeight = 667;
            break;
        }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(image, 0, 0, newWidth, newHeight);

        this.resizedImageUrl = canvas.toDataURL('image/png');
      };
    },
    async mergeImageWithQR() {
      const imageUrl = this.resizedImageUrl;
      if (!imageUrl) {
        alert('Vui lòng chọn hoặc tải lên một ảnh trước.');
        return;
      }

      // Tạo mã QR từ dữ liệu nhập vào
      const qrCodeDataUrl = await this.generateQRCode(this.qrData || this.info);

      // Tạo canvas để ghép ảnh
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Tạo image object từ imageUrl
      const image = new Image();

      image.onload = () => {
        // Chọn kích thước ảnh dựa trên selectedSize
        let newWidth, newHeight;
        switch (this.selectedSize) {
          case 'Avatar':
            newWidth = 200;
            newHeight = 200;
            break;
          case 'Phone Background':
            newWidth = 375;
            newHeight = 667;
            break;
          case 'Full Screen':
            newWidth = 1920;
            newHeight = 1080;
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

      // Load image từ imageUrl
      image.src = imageUrl;
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

.qr-input {
  margin-bottom: 20px;
}

.uploaded-image {
  margin-bottom: 20px;
  text-align: center; /* Căn giữa hình ảnh */
}

.uploaded-image img, .result img {
  max-width: 100%;
  height: auto; /* Đảm bảo tỉ lệ hình ảnh không bị méo */
}

.image-list {
  margin-bottom: 20px;
}

.image-option {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}

.image-option img {
  max-width: 100px;
  max-height: 100px;
  border: 2px solid transparent;
  transition: border 0.3s;
}

.image-option img:hover {
  border: 2px solid #42b983;
}
</style>
