<script>
    import axios from "axios";
    import AppSearch from "./components/AppSearch.vue";
    import AppMain from "./components/AppMain.vue";
    import { store } from "./store.js";

    export default{
        components: {
            AppSearch,
            AppMain
        },
        data(){
            return {
                store,
            }
        }
    }
</script>

<template>
    <AppSearch></AppSearch>
    <AppMain></AppMain>
</template>

<style lang="scss">
    @use './style/general';
</style>