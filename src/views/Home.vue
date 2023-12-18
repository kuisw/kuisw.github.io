<script setup>
import PostList from "../components/PostList.vue";
import WebHeader from "../components/WebHeader.vue";
import Composition from "../components/Composition.vue";
import Website from "../components/Website.vue";
import Acgn from "../components/Acgn.vue";

import getPosts from "../composibles/getPosts";

import {  ref } from "vue";
import { useRoute } from 'vue-router';

const { posts, load } = getPosts()
load()

const route = useRoute();

const getAdmin = Number(route.params.id)
// alert(getAdmin)

const isArticle = ref(true)
const isComposition = ref(false)
const isWebsite = ref(false)
const isACG = ref(false)
const a = ref("0")
const getNav = (changeNav) => {
    a.value = changeNav
    alert(a.value)
    if (a.value == 1) {
        isComposition.value = true
    }
}

</script>

<template>
    <div class="home">
        <div>
            <WebHeader :getAdmin="getAdmin" @changeNav="getNav" />
        </div>
        <div>
            <PostList v-if="isArticle" :posts="posts" />
            <Composition v-if="isComposition" />
            <Website v-if="isWebsite" />
            <Acgn v-if="isACG" />
        </div>
    </div>
</template>

<style></style>