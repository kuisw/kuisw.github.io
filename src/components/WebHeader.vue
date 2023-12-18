<script setup>
import getScreen from "../composibles/getScreen";
import { ref } from "vue";

const { isWidth } = getScreen()

const isAdmin = ref(false)

const props = defineProps({
    getAdmin: {
        type: Number,
        required: true
    }
})
// alert(props.getAdmin)
// console.log(getAdmin)
if (props.getAdmin == 2000) {
    isAdmin.value = true
} else {
    isAdmin.value = false
}

const emit = defineEmits('changeNav')
const nav = (changeNav = "0") => {
    emit('changeNav', changeNav)
}

</script>

<template>
    <div class="web-header">
        <div class="header">
            <div class="title"><a href="" @click="nav(0)"><b>乂的个人网站</b></a></div>
            <div class="nav">
                <input v-if="isWidth" type="checkbox">
                <span v-if="isWidth"></span>
                <span v-if="isWidth"></span>
                <span v-if="isWidth"></span>
                <ul class="navlist">
                    <li @click="nav(0)">专题文章</li>
                    <li @click="nav(1)">我的作品</li>
                    <li v-if="isAdmin"><a href="" @click="nav(2)">常用网址</a></li>
                    <li v-if="isAdmin"><a href="" @click="nav(3)">追番列表</a></li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<style>
.web-header {
    /* border: 1px solid red; */
    width: 100%;
    /* height: 250px; */
}

.header {
    /* border: 1px solid purple; */
    background-color: rgba(99, 99, 99, 0.7);
}

.title {
    /* border: 1px solid blue; */
    float: left;
    font-size: 25px;
}

.navlist li {
    width: 100px;
}

a {
    color: black;
}

/* 电脑端 */
@media only screen and (min-width: 600px) {
    .web-header {
        width: 100%;
        text-align: center;
        margin: auto;
        height: 300px;
        /* aspect-ratio: 3/1; */
        background-image: url(../assets/header.jpg);
        background-position: bottom;
        background-repeat: no-repeat;
        /* background-size: cover; */
    }

    .navlist {
        height: 70px;
        line-height: 70px;
        text-align: center;
        margin: auto;
        width: 600px;
    }

    .navlist li {
        float: left;
        color: black;
    }

    .title {
        height: 70px;
        line-height: 70px;
        margin: 0 0 0 70px;
    }
}

/* 手机端 */
@media only screen and (max-width: 600px) {
    .title {
        margin: 10px;
    }

    .header {
        background-color: rgba(99, 99, 99, 0.5);
    }

    .clear {
        clear: both;
    }

    .web-header {
        background-image: url(../assets/header-mph.jpg);
        background-size: cover;
        height: 200px;
    }

    .nav {
        /* height: 135px; */
        float: right;
        margin: 10px 10px 0 0;
        position: relative;
    }

    .navlist {
        /* border: 1px solid green; */
        height: 0;
        overflow: hidden;
        transition: all 0.5s;
    }

    .navlist li {
        height: 20px;
        padding: 0;
        width: 70px;
        margin-top: 2px;
    }

    .navlist li a {
        color: black;
    }

    .nav input {
        width: 32px;
        height: 32px;
        opacity: 0;
        cursor: pointer;
    }

    .nav span {
        position: absolute;
        left: 5px;
        width: 22px;
        height: 4px;
        background-color: #7b7b7b;
        top: 5px;
        border-radius: 15px;
        pointer-events: none;
    }

    .nav span:nth-child(3) {
        top: 13px;
    }

    .nav span:nth-child(4) {
        top: 22px;
    }

    .nav input:checked~ul {
        height: 100px;
    }

    .nav input:checked~.nav {
        height: 135px;
    }

    .nav input:checked~span:nth-child(2) {
        top: 13px;
        transform: rotate(-45deg);
    }

    .nav input:checked~span:nth-child(3) {
        background-color: rgba(255, 255, 255, 0);
    }

    .nav input:checked~span:nth-child(4) {
        top: 13px;
        transform: rotate(45deg);
    }

}
</style>