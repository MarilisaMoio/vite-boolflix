<script>
    import { store } from '../store.js';

    export default{
        name: 'AppSearch',
        data(){
            return {
                store,
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="input-group">
            <input type="text" v-model="store.userInput">
            <button type="button" @click="$emit('searchThisInput')">Search</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    .container{
        padding: 20px 10px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
    }
    .input-group{
        > * {
            border-radius: 0;
            border: 1px solid gray;
            padding: 6px;
        }
        button{
            border-top-right-radius: $input-radius;
            border-bottom-right-radius: $input-radius;
        }
        input{
            border-top-left-radius: $input-radius;
            border-bottom-left-radius: $input-radius;
        }
    }
</style>