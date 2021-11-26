

const defaultState: any = {
    loading: false,
    news: []
};

const homeReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case "GET_NEWS":
            return {
                loading: true,
            };
        case "GET_NEWS_SUCCESS":
            return {
                ...state,
                loading: false,
                news: action.payload,
            };
        case "GET_NEWS_FAILED":
            return {
                loading: false,
            }
        default:
            return state;
    }
};

export default homeReducer;
