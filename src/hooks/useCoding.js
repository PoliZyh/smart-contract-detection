import { ref } from "vue";
import { wait } from "../utils/time";


export const useCoding = (str, spaceTime = 100) => {
    const curStrs = ref([])
    const letters = str.split("")
    let index = 0
    let isBegin = true

    const startCoding = async () => {
        while (isBegin) {
            if (index >= letters.length) {
                while(index > 0) {
                    curStrs.value.pop()
                    index--
                    await wait(5)
                }
                curStrs.value = []
            }
            curStrs.value.push(letters[index])
            index++
            await wait(spaceTime)
        }
    }

    const destroyCoding = () => {
        curStrs.value = []
        isBegin = false
    }

    return {
        curStrs,
        startCoding,
        destroyCoding
    }
}