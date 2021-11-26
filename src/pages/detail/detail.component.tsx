import { withRouter } from "react-router-dom"
import { Container } from "reactstrap";
import Cards from "./../../components/card/card.component";

const Detail = (props: any) => {
    return <Container><Cards news={props?.location?.state?.data} detail={true} /></Container >
}

export default withRouter(Detail);