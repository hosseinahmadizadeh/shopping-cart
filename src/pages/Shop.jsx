import { Row, Col } from "react-bootstrap"

function Shop (){
    return (
        <Row xs={1} md={4} className="g-4">
            <Col align="center"><h3>Product 1</h3></Col>
            <Col align="center"><h3>Product 2</h3></Col>
            <Col align="center"><h3>Product 3</h3></Col>
            <Col align="center"><h3>Product 4</h3></Col>
        </Row>
    )
}
export default Shop