<template>
    <div>
        <h2>Encrypted Information Page</h2>
        <p>Encrypted Link: {{ encryptedLink }}</p>
    </div>
</template>

<script>
export default {
    props: ['encryptedLink']
}
</script>