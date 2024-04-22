<template>
    <div class="history-page">
        <HistoryTable class="tb"></HistoryTable>
    </div>
</template>

<script setup>
import HistoryTable from './components/HistoryTable.vue';
</script>


<style scoped lang="scss">
.history-page {
    height: calc(100vh - 70px);
    .tb {
        margin: 5vh auto;
        width: 1000px;
        height: 80vh;
        border: 1px solid rgba(72, 72, 72, 0.609);
        border-radius: 10px;
    }
}
</style>