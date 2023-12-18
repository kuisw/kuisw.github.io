<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("")
const password = ref("")
const admin = ref("0")
const router = useRouter()

const login = () => {
    if (username.value == "ysh" && password.value == "0d000721") {
        admin.value = "2000"
        router.push({ name: 'HomeAdmin', params: { id: '2000' } })
        // alert(admin.value)
    } else {
        alert("用户名或密码错误>_<")
        // alert(admin.value)
    }
};
const Unlogin = () => {
    admin.value = "0"
    router.push({ name: 'HomeAdmin', params: { id: '0' } })
}
</script>

<template>
    <div class="web-login" id="app">
        <!-- @submit.prevent="login" -->
        <form @submit.prevent="login">
            <div class="form">
                <div class="loginHeader">
                    <div>登录</div>
                </div>
                <div class="login">
                    <div class="inpbox">
                        <input type="text" placeholder="username" v-model="username">
                    </div>
                    <div class="inpbox">
                        <input type="password" placeholder="password" v-model="password">
                    </div>
                </div>
                <div class="action">
                    <div class="btn"><button class="button">登录</button></div>
                    <form @submit.prevent="Unlogin">
                        <div class="btn"><button class="button">就不登录！(￣^￣) 哼</button></div>
                    </form>
                </div>
            </div>
        </form>
    </div>
</template>

<style>
.web-login {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    position: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form {
    width: 260px;
    height: 210px;
    border: 1px solid black;
    background-color: rgba(41, 45, 62, 0.5);
    color: #fff;
    border-radius: 10px;
    padding: 20px 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
}

.form a {
    color: #fff;
    width: auto;
    display: flex;
    justify-content: center;
    display: inline-block
}

.loginHeader {
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    line-height: 90px;
    background-color: transparent;
}

.loginHeader div {
    background-color: transparent;
}

.inpbox {
    text-align: center;
    margin-bottom: 5px;
}

::-webkit-input-placeholder {
    color: rgb(59, 59, 59);
}

.inpbox input {
    background-color: rgba(191, 191, 191, 0.5);
    border: 0;
    width: 100px;
    text-align: center;
    color: #fff;
    outline: none;
}

.action {
    /* flex-wrap: wrap-reverse; */
    text-align: center;
}

.btn {
    width: auto;
    text-transform: uppercase;
    text-align: center;
    line-height: 30px;
}

.button {
    border: 0;
    background-color: transparent;
    color: #fff;
    font-size: 17px;
}

/* 竖屏 */
@media (orientation:portrait) {
    .web-login {
        background-image: url(../assets/login-mph.jpg);

    }
}

/* 横屏 */
@media (orientation: landscape) {
    .web-login {
        background-image: url(../assets/login.jpg);
    }

    .form {
        width: 450px;
        height: 300px;
        padding-bottom: 30px;
    }

    .loginHeader {
        font-size: 40px;
    }

    .inpbox {
        line-height: 50px;
    }

    .inpbox input {
        width: 200px;
        height: 30px;
    }

    .btn {
        margin-top: 20px;
        font-size: 25px;
    }

    .button {
        font-size: 25px;
    }

}
</style>