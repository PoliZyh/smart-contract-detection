<template>
    <div class="home-page">
        <HomeLogo></HomeLogo>
        <div class="cards">
            <FloatCard 
            class="wow fadeInUp"
            :data-wow-delay="index * 0.1 + 's'"
            v-for="(item, index) in cardData" :key="index" :title="item.title" :content="item.content"></FloatCard>
        </div>
    </div>
</template>


<script setup>
import HomeLogo from './components/HomeLogo.vue';
import FloatCard from './components/FloatCard.vue';
import useWow from '../../hooks/useWow';
import { onMounted, ref } from 'vue';

const cardData = ref([
    {
        title: '基于大模型的智能合约多模态数据融合模块',
        content: '基于大模型的智能合约多模态数据融合模块的核心目标是实现对智能合约的深层次安全分析与风险评估。'
    },
    {
        title: '自适应智能合约安全监测与攻击模式学习算法',
        content: '自适应智能合约安全监测与攻击模式学习算法通过先进的机器学习技术实现对智能合约安全威胁的实时识别和响应'
    },
    {
        title: '基于大模型的智能合约安全分析可解释性增强模块',
        content: '该框架的目的是提高安全分析的可解释性'
    }
])

onMounted(() => {
    useWow();
})
</script>



<style scoped lang="scss">
.home-page {
    width: 100%;
    padding: 100px;
    background-color: $c-black;
    min-height: 100vh;
    .cards {
        margin-top: 100px;
        width: 100%;
        display: flex;
        gap: 5%;
        flex-wrap: wrap;
    }
}
</style>