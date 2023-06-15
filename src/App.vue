<template>
    <h1 class="title">hello app</h1>
    <ul>
        <li>
            <router-link to="/">home</router-link>
        </li>
        <li>
            <router-link to="/">about</router-link>
        </li>
    </ul>
    <router-view />
</template>
<script>
export default {
    name: 'App',
}
</script>
<style>
.title {
    color: pink;
}
</style>