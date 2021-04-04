const INITIAL_STATE = {
    gameList: [],
    gameListError: "",
    gameListFilter: {
        name: "",
        rating: 0,
        orderBy: "Relase Date",
        orderType: true

    }
}
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_GAME_LIST':
            return { ...state, gameList: action.payload }
        case 'GET_FILTER':
            return { ...state, gameListFilter: action.payload }
        case 'GET_GAME_LIST_ERROR':
            return { ...state, gameListError: action.payload }
        default: return state
    }
}