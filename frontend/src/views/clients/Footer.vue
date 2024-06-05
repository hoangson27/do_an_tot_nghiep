<template>
    <footer class="app-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Us</h3>
                    <p>We are a team of passionate developers building awesome applications.</p>
                </div>
                <div class="footer-section">
                    <h3>Contact</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "AppFooter"
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

.app-footer {
    background-color: #2c3e50;
    color: white;
    padding: 20px 0;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-section {
    flex: 1;
    min-width: 250px;
    margin: 10px;
}

.footer-section h3 {
    margin-bottom: 15px;
}

.footer-section p {
    margin: 0 0 10px;
}

.social-icons a {
    color: white;
    margin-right: 10px;
    font-size: 20px;
    transition: color 0.3s ease;
}

.social-icons a:hover {
    color: #42b983;
}

.footer-bottom {
    text-align: center;
    margin-top: 20px;
    border-top: 1px solid #555;
    padding-top: 10px;
}
</style>