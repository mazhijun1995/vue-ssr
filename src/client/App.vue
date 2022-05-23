<template>
<div>
    <div id = "app-box">首页</div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">about页</router-link>
    <router-view  />
</div>
</template>
<script>
export default {
    name: "App",
}
</script>
