import { Button, Col, Container, Row } from "react-bootstrap"
import './style.css'
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
export const HomePage = () => {
    return (
        <Container className="mt-3">
            <Row className="mt-5">
                <Col sm={12} >
                    <Link to={'/login'}>
                        <h5 className="LoginStyle">Log in</h5>
                    </Link>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col sm={12} className="mt-5 d-flex justify-content-center align-items-center">
                    <Button className="w-50 customBtn_styl">Activiteiten</Button>
                </Col>
                <Col sm={12} className="mt-4 d-flex justify-content-center align-items-center">
                    <Button className="w-50 customBtn_styl">Coaches</Button>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col sm={12} className="mt-5 d-flex justify-content-center align-items-center">
                    <img src={logo} />
                </Col>
                <Col sm={12} className="mt-4 d-flex justify-content-center align-items-center">
                    <Link to={"/sign-up"}>
                        <Button className="w-100 px-2 customBtnSignup_style">SIGN UP</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}