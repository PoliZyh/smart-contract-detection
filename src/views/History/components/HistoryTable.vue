<template>
    <div class="h-table">
        <div class="r tr">
            <div class="c c-1">ID</div>
            <div class="c c-2">文件</div>
            <div class="c c-3">日期</div>
            <div class="c c-4">时间</div>
            <div class="c c-5">结果</div>
            <div class="c c-6">状态</div>
        </div>
        <div class="r" v-for="item in data" :key="item.id">
            <div class="c c-1">{{ item.id }}</div>
            <div class="c c-2">
                <span v-for="file in item.files" :key="file">{{ file }}
                    <span v-if="file !== item.files[item.files.length - 1]">、</span>
                </span>
            </div>
            <div class="c c-3">{{ item.date }}</div>
            <div class="c c-4">{{ item.time }}</div>
            <div class="c c-5"
            :style="{
                color: result_map[item.result] === 'success' ? '#71da5a' : result_map[item.result] === 'warning' ? '#edce4e' : '#e56767'
            }
            ">{{ result_map[item.result] }}</div>
            <div class="c c-6"
            :style="{
                color: status_map[item.status] === 'done' ? '#71da5a' : status_map[item.status] === 'progress' ? '#6cdaee' : '#e56767'
            }">{{ status_map[item.status] }}</div>
        </div>
    </div>
</template>


<script setup>
import { color } from 'echarts';
import { ref } from 'vue';

const result_map = {
    0: 'success',
    1: 'warning',
    2: 'error',
}

const status_map = {
    0: 'done',
    1: 'progress',
}

const data = ref([
    {
        id: 0,
        files: ['code1', 'data1', 'log1'],
        date: '2024-03-22',
        time: '17:59:21',
        result: 0,
        status: 0
    },
    {
        id: 1,
        files: ['test1', 'test2', 'test3'],
        date: '2024-03-24',
        time: '12:37:21',
        result: 1,
        status: 0
    },
    {
        id: 2,
        files: ['code', 'data', 'log'],
        date: '2024-04-22',
        time: '19:31:03',
        result: 2,
        status: 0
    },
])
</script>


<style scoped lang="scss">
.h-table {
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding: 10px;
    color: $c-text-dark-1;
    .r {
        width: 100%;
        display: flex;
        height: 40px;
        display: flex;
        align-items: center;
    }
    .tr {
        font-weight: 600;
        color: $c-text-dark-2;
    }
    .c {

    }
    .c-1 {
        flex: 1;
    }
    .c-2 {
        flex: 4;
    }
    .c-3 {
        flex: 2;
    }
    .c-4 {
        flex: 2;
    }
    .c-5 {
        flex: 3;
    }
    .c-6 {
        flex: 3;
    }
}
</style>