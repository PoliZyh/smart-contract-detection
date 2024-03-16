<template>
    <div class="home-logo-box">
        <div class="left">
            <h1 class="name wow fadeInUp">DeepSecuChain</h1>
            <h2 class="det">
                <span v-for="i in curStrs" :key="i">{{ i }}</span>
            </h2>
            <div class="btn wow fadeInLeft">
                <div class="start">
                </div>
                <p @click="router.push('/commit')">Get Start</p>
            </div>
        </div>
        <div class="right wow fadeIn">
            <div class="img-bg"></div>
            <img src="https://pinia.vuejs.org/logo.svg" alt="logo">
        </div>
    </div>
</template>


<script setup>
import { onMounted } from 'vue';
import { useCoding } from '../../../hooks/useCoding';
import { useRouter } from 'vue-router';

const router = useRouter()

const {
    startCoding,
    destroyCoding,
    curStrs
} = useCoding('Based on deep learning, blockchain smart contract security detection system.');


onMounted(() => {
    startCoding();
})
</script>


<style scoped lang="scss">
.home-logo-box {
    width: 100%;
    display: flex;
    gap: 10%;
    .left {
        width: 50%;
        .name {
            @include txt-linear;
            font-size: 3rem;
            width: fit-content;
            font-weight: 600;
            line-height: 1.3;
        }
        .det {
            color: $c-text-dark-1;
            font-size: 2.2rem;
            line-height: 1.2;
            font-weight: 600;
            margin-top: 30px;
            height: 200px;
        }
        .btn {
            display: flex;
            align-items: center;
            height: 60px;
            gap: 10px;
            border: 1.5px solid $c-yellow-2;
            width: fit-content;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            .start {
                background-image: url(https://pinia.vuejs.org/mp-logo.svg);
                background-repeat: no-repeat;
                height: 50px;
                width: 30px;
                cursor: pointer;
                display: flex;
                align-items: center;
                border-radius: 10px;
                background-position: 0 center;
            }
            p {
                font-size: 1.2rem;
                color: $c-text-dark-1;
                width: 100px;
            }
        }
    }
    .right {
        width: 40%;
        position: relative;
        height: 320px;
        width: 320px;
        .img-bg {
            height: 320px;
            width: 320px;
            display: flex;
            justify-content: center;
            align-items: center;
            filter: blur(72px);
            background-image: linear-gradient(15deg, $c-yellow-2 65%, $c-green-1 30%);
            border-radius: 50%;

        }
        img {
            height: 320px;
            width: 320px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>