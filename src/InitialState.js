export default {
    UserInfo: {
        username: "",
        ekia: null,
        kills: null,
        deaths: null,
        wins: null,
        losses: null,
        longestKillstreak: null,
        ekiapergame: null,
        scoreperminute: null,
        tdmkills: null,
        tdmdeaths: null,
        tdmwins: null,
        tdmlosses:null,
        domkills: null,
        domdeaths: null,
        domwins: null,
        domlosses: null,
        domdefends: null,
        domoffends: null,
        domkillstreak: null,
        isLoading: true,
        username1: "",
        username2: ""
    },
    GetStats: {
        isFetching: false,
        hasErrors: false,
        isSuccessful: false,
        data: null
    },
    GetUser: {
        isFetching: false,
        hasErrors: false,
        isSuccessful: false,
        data: null,
        success: false
    }
}