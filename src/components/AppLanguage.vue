<script>
    import { store } from "../store.js"

    export default{
        name: 'AppLanguage',
        props: ["mediaLang"],
        data(){
            return {
                store,
                isFlag: false,
            }
        },
        methods: {
            getEmojiFlag(){
                let mediaLangFlag = this.mediaLang;

                store.flags.forEach((flag) => {
                    if (flag.lang === this.mediaLang){
                        this.isFlag = true
                        mediaLangFlag = flag.emoji
                    }
                })
                // spiegazione per la me del futuro:
                // mettendo this.isFlag = false all'inizio della funzione, per qualche motivo triggerava una funzione ricorsiva
                //che effettuava un 21 controllo su una flag spagnola (insesistente) per 101 volte
                if (mediaLangFlag === this.mediaLang){
                    this.isFlag = false
                }
                return mediaLangFlag;
            }
        },
    }
</script>

<template>
    <div class="original-language" :class="{ 'flag': this.isFlag }">{{ this.getEmojiFlag() }}</div>
</template>

<style scoped lang="scss">
    .flag{
        font-size: 2rem
    }

</style>