import { useEffect } from "react";
import { withRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Container, Spinner } from "reactstrap";
import { getNews } from "./../../redux/home/home.action";
import { Articles } from "./../../model/news";
import Cards from "./../../components/card/card.component";

const Home = (props: any) => {
    const dispatch = useDispatch();
    const news = useSelector((state: any) => {
        return state.news
    })

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])


    return !news?.loading ? <Container>
        {
            news?.news?.articles?.map((news: Articles, index: any) => {
                return <div key={index}><Cards news={news} action={() => { props.history.push(`/news/${news.source.id}`, { data: news }) }} /></div>
            })
        }



    </Container > :
        <div style={{ textAlign: "center", paddingTop: "30px" }}><Spinner>Loading...</Spinner></div>
}

export default withRouter(Home);
