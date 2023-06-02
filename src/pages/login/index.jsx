import { Button, Col, Container, Form, Row } from "react-bootstrap"
import './style.css';
import { Link } from "react-router-dom";
import ArrL from '../../assets/icons/left-arrow.png';

export const Login = () => {
    return <Container>
        <Row className="mt-5 d-flex justify-content-start align-items-center gapSize mb-5">
            <div className="arrL_style mt-3 p-3 rounded-circle d-flex justify-content-center align-items-center">
                <Link to={'/'}>
                    <img src={ArrL} />
                </Link>
            </div>
            <Col className="mt-3">
                <h5 className="back_title_login">welcome To FitFlow</h5>
            </Col>
        </Row>

        <Row className="mt-5">
            <Col className="mt-5">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="lableCustom_style">Email address</Form.Label>
                    <Form.Control type={"email"} placeholder="" className="mt-2 px-3 inputCustom_style" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="lableCustom_style">Password</Form.Label>
                    <Form.Control type={"password"} placeholder="" className="mt-2 px-3 inputCustom_style" />
                </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col className="d-flex justify-content-end align-items-center mt-2">
                <h5 className="forgot_text">Forgot Password?</h5>
            </Col>
        </Row>

        <Row className="mt-5">
            <Col className="mt-4">
                <Button className="w-100 py-3 submitBtnCustom_style text-dark" type="submit">
                    Login
                </Button>
            </Col>
        </Row>

        <Row className="my-5">
            <Col className="d-flex justify-content-center">
                <p className="login">
                    Don’t have an account ? <span>Register!</span>
                </p>
            </Col>
        </Row>
    </Container>
}