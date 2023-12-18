import { ref, onMounted } from "vue";

const getScreen = () => {
    const isWidth = ref(true)
    onMounted(() => {
        // console.log(isWidth)
        // console.log(document.body.offsetWidth)
        if (document.body.offsetWidth > 600) {
            isWidth.value = false
        } else {
            isWidth.value = true
        }
    });
    return { isWidth }
}

export default getScreen