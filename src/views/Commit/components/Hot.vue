<template>
    <Teleport to="body">
        <div class="hot-box">
            <div class="mask" @click="emit('change')"></div>
            <img src="../../../assets/imgs/Figure_1.png" alt="">
        </div>
    </Teleport>
</template>


<script setup>

const emit = defineEmits(['change'])

</script>


<style scoped lang="scss">
.hot-box {
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 6000;
    position: fixed;
    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
    }
    img {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>