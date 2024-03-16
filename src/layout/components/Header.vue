<template>
    <div class="header-box">
        <div class="left">
            <img src="https://pinia.vuejs.org/logo.svg" alt="logo">
            <span class="logo-t">DeepSecuChain</span>
        </div>
    </div>
</template>


<script setup>

</script>


<style scoped lang="scss">
.header-box {
    width: 100%;
    height: 70px;
    background-color: $c-black;
    display: flex;
    padding: 10px 30px;
    align-items: center;
    position: fixed;
    z-index: 2000;
    .left {
        display: flex;
        align-items: center;
        gap: 15px;
        img {
            height: 30px;
        }
        .logo-t {
            color: $c-text-dark-1;
            font-weight: 500;
        }
    }
}
</style>