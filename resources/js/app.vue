<template>
    <div>
        <Header/>

        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script setup>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";

</script>

<style lang="scss">

</style>
