<script>
    import { store } from "../store.js"

    export default{
        name: 'AppLanguage',
        props: ["mediaLang"],
        data(){
            return {
                store,
                mediaLangFlag: ""
            }
        },
        methods: {
            getEmojiFlag(mediaLang){
                let isFlag = false;
                store.flags.forEach((flag) => {
                    if (flag.lang === mediaLang){
                        isFlag = true;
                        this.mediaLangFlag = flag.emoji;
                    }
                })
                if (isFlag === false){
                        this.mediaLangFlag = mediaLang;
                    }
            }
        },
    }
</script>

<template>
    <div class="original-language">{{ getEmojiFlag(this.mediaLang) }}{{ this.mediaLangFlag }}</div>
</template>

<style scoped lang="scss">

</style>