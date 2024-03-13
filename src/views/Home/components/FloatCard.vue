<template>
    <div class="card-box">
        <h6>{{ title }}</h6>
        <p>{{ content }}</p>
    </div>
</template>


<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    }
})
</script>


<style scoped lang="scss">
.card-box {
    background-color: $c-black-light;
    width: 30%;
    padding: 30px 25px;
    border-radius: 10px;
    h6 {
        color: $c-text-dark-1;
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 15px;
    }
    p {
        color: $c-text-dark-2;
        line-height: 1.5;
        letter-spacing: 1px;
    }
}
</style>