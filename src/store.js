import { reactive } from "vue";

export const store = reactive({
    userInput: "",
    theseMovies: [],
    flags: [
        {
            lang: "EN",
            emoji: "🇬🇧"
        },
        {
            lang: "IT",
            emoji: "🇮🇹"
        },
        {
            lang: "FR",
            emoji: "🇫🇷"
        },
        {
            lang: "ES",
            emoji: "🇪🇸"
        },
        {
            lang: "JA",
            emoji: "🇯🇵"
        },
        {
            lang: "KO",
            emoji: "🇰🇷"
        },
        {
            lang: "DE",
            emoji: "🇩🇪"
        }
    ],
});