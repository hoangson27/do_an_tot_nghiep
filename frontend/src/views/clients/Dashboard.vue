<template>
    <div class="dashboard-container">
        <Sidebar @navigate="currentComponent = $event" />
        <div class="main-content">
            <component :is="currentComponent"></component>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/clients/Sidebar.vue'
import QRCode from '@/components/clients/CreateQR.vue'
import NFC from '@/components/clients/NFC.vue'
import ShortLink from '@/components/clients/ShortLink.vue'
import Analytics from '@/components/clients/Analytics.vue'

export default {
    name: 'Dashboard',
    components: {
        Sidebar,
        ShortLink,
        QRCode,
        NFC,
        Analytics
    },
    data() {
        return {
            currentComponent: 'Analytics'
        };
    }
};
</script>

<style scoped>
.dashboard-container {
    display: flex;
}

.main-content {
    flex: 1;
    padding: 20px;
}
</style>