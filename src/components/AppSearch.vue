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
    <header>
        <div class="container">
            <h1>BOOLFIX</h1>
            <div class="input-group">
                <input type="text" v-model="store.userInput">
                <button type="button" @click="$emit('searchThisInput')">Search</button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    header{
        background-color: $main-gray;
    }

    .container{
        padding: 20px 10px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    h1{
        color: red;
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