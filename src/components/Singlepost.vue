<script setup>
import { computed } from "vue";

const props = defineProps({
    post: Object,
});

const snippet = computed(() => {
    return props.post.Introduction
});



</script>

<template>
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ snippet }}</p>
        <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
    </div>
</template>

<style></style>