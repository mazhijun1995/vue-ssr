<template>
<div>
    <div class="about-h1">about</div>
    <ul>
        <li>{{userInfo.name}}</li>
        <li>{{userInfo.address}}</li>
    </ul>
</div>
</template>
<script>
import {useStore} from 'vuex';
export default {
    name: "About",
    setup(){
        const {getters} = useStore();
        const userInfo = getters['demo/getData'];
        return {
            userInfo,
        }
    }
}
</script>
<style scoped>
    .about-h1 {
        color: red;
    }
</style>
