<template>
  <div>
    <input v-model="inputText" placeholder="Enter information">
    <button @click="generateQRCode">Generate QR Code</button>
    <div v-if="qrCode">
      <qrcode-vue :value="qrCode" :size="150" type="canvas"></qrcode-vue>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'vue-qrcode';

export default {
  name: 'QRCodeGenerator',
  components: {
    QrcodeVue,
  },
  data() {
    return {
      inputText: '',
      qrCode: '',
    };
  },
  methods: {
    generateQRCode() {
      // Generate a QR code from the input text
      this.qrCode = `https://example.com?info=${encodeURIComponent(this.inputText)}`;
    },
  },
};
</script>
