import { getAllNews } from "./home.service";

export const getNews = () => async (dispatch: any) => {
    try {
        dispatch({
            type: "GET_NEWS",
        });

        const results = await getAllNews();

        dispatch({
            type: "GET_NEWS_SUCCESS",
            payload: results,
        });

        return results;
    } catch (e) {
        dispatch({
            type: "GET_NEWS_FAILED",
        });
    }
};