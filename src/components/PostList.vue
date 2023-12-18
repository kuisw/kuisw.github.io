<script setup>
import Singlepost from "./Singlepost.vue";

defineProps({
    posts: Array,
});

</script>

<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <Singlepost :post="post"/>
        </div>
    </div>

</template>

<style>

</style>