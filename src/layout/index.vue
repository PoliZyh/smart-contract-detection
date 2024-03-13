<template>
    <div class="layout">
        <Header></Header>
        <Main class="main"></Main>
    </div>
</template>


<script setup>
import Header from "./components/Header.vue";
import Main from './components/Main.vue'
</script>


<style scoped lang="scss">
.layout {
    width: 100%;
    height: 100%;
    .main {
        padding-top: 70px;
        background-color: $c-black;
    }
}
</style>