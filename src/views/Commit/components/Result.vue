<template>
    <div class="result-box">
        <pre><code class="language-python line-numbers" v-html="codeStr"></code></pre>
        <div class="err-list wow fadeInUp" v-if="strIndex >= str.length">
            <p class="title">错误信息</p>
            <ul>
                <li v-for="(l, index) in errList" :key="l">
                    {{ l }}
                </li>
            </ul>
        </div>
        <div class="model-box wow fadeInUp" v-if="strIndex >= str.length"
            @click="emit('change', true)">
            <p>特征值贡献度模型</p>
            <Model></Model>
        </div>
        <div class="model-box b1 wow fadeInUp" v-if="strIndex >= str.length"
            @click="emit('change-hot', true)">
            <p>DeepLIFT深度学习重要特征</p>
            <Pan></Pan>
        </div>
        
    </div>
</template>


<script setup>
import { onMounted, onUpdated, ref } from "vue";
import Prism from "prismjs";
import Model from "./Model.vue";
import Pan from './Pan.vue'

const emit = defineEmits(['change', 'change-hot'])

const str = `
pragma solidity ^0.8.0;

contract Auction {
    address public highestBidder;
    uint public highestBid;

    function bid() public payable {
        require(msg.value > highestBid, "Bid must be higher than current highest bid.");

        if (highestBid != 0) {
            require(payable(highestBidder).send(highestBid), "Failed to send previous highest bid.");
        }

        highestBidder = msg.sender;
        highestBid = msg.value;
    }

    function withdraw() public {
        require(msg.sender != highestBidder, "Highest bidder cannot withdraw until auction ends.");
        require(msg.sender.send(highestBid), "Failed to send bid amount.");
        highestBid = 0;
    }

    function endAuction() public {
        require(msg.sender == highestBidder, "Only highest bidder can end the auction.");
        selfdestruct(payable(msg.sender));
    }
}

`

const errList = ref([
    '在 withdraw 函数中，没有检查 highestBid 是否为零，因此在 highestBid 溢出后，一个未能赢得拍卖的地址可以尝试撤回金额，从而导致无效的 ether 转移',
    '如果某人以非常大的值调用 bid 函数，将 highestBid 的值设置为很大，然后再次调用 bid 函数，将 highestBid 的值设置为更大的值，那么可能导致 highestBid 溢出，将其值重新设置为 0。这可能使某人以非常小的金额赢得拍卖。'
])

const codeStr = ref(``)
const strIndex = ref(0)

const handlePushStr = () => {
    let timer = setInterval(() => {
        codeStr.value += str[strIndex.value++]
        if (strIndex.value >= str.length) {
            clearInterval(timer);
        }
    }, 20);
}

onUpdated(() => {
    Prism.highlightAll(); //修改内容后重新渲染
});
onMounted(() => {
    Prism.highlightAll(); //切换菜单重新渲染
    handlePushStr()
})
</script>


<style scoped lang="scss">
.result-box {
    width: 100%;

    .model-box {
        margin-top: 40px;
        color: $c-text-dark-1;
        padding: 30px;
        background-color: $c-black-light;
        border-radius: 10px;
        width: 25%;
        display: flex;
        gap: 40px;
        align-items: center;
        cursor: pointer;
    }

    .b1 {
        width: 30%;
    }
    
    .err-list {
        margin-top: 40px;
        color: $c-text-dark-1;
        padding: 20px;
        background-color: $c-black-light;
        border-radius: 10px;
        ul {
            list-style: decimal;
            padding-left: 20px;
            color: $c-text-dark-2;
            li {
                line-height: 2;
            }
        }
    }

    pre {
        overflow: hidden !important;
        position: relative;

        code {
            display: inline-block;
            padding-bottom: 20px;
            position: relative;
            top: 20px;
        }

        &::before {
            content: "";
            position: absolute;
            background: red;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            top: 10px;
            left: 15px;
            transform: translate(-50%);
        }

        &::after {
            content: "";
            position: absolute;
            background: sandybrown;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            top: 9.5px;
            left: 30px;
            transform: translate(-50%);
        }

        code:first-child {
            &::after {
                content: "";
                position: absolute;
                background: limegreen;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                top: -26.8px;
                left: -16px;
                transform: translate(-50%);
            }
        }
    }
}
</style>