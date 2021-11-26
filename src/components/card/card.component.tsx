import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const Cards = (props: any) => {
    return <Card className="my-2 p-1" onClick={props.action}>
        <Row>
            <Col lg={(props.detail && 12) || 3}>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={`${props.news.urlToImage}`}
                        top
                        width="100%"
                    />
                </Card>
            </Col>
            <Col lg={(props.detail && 12) || 9}>
                <CardBody style={{ border: "0px" }}>
                    <CardTitle style={{ cursor: "pointer" }} tag="h5" >
                        {props.news?.title}
                    </CardTitle>
                    <CardText>
                        {props.news?.description}
                    </CardText>
                </CardBody>
            </Col>
        </Row>
    </Card>
}

export default Cards;