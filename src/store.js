import { reactive } from "vue";

export const store = reactive({
    userInput: "",
    theseMovies: [],
    flags: [
        {
            lang: "en",
            emoji: "🇬🇧"
        },
        {
            lang: "it",
            emoji: "🇮🇹"
        },
        {
            lang: "fr",
            emoji: "🇫🇷"
        },
        {
            lang: "es",
            emoji: "🇪🇸"
        },
        {
            lang: "ja",
            emoji: "🇯🇵"
        },
        {
            lang: "ko",
            emoji: "🇰🇷"
        },
        {
            lang: "de",
            emoji: "🇩🇪"
        }
    ],
});