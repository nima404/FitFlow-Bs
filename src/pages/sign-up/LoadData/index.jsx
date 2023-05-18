import { Button, Col, Container, Form, FormSelect, InputGroup, Row } from "react-bootstrap"
import './style.css';
import ArrL from '../../../assets/icons/left-arrow.png';
import { Link } from "react-router-dom";

export const LoadSignupData = () => {
    return (
        <Container>
            <Row className="mt-5 d-flex justify-content-start align-items-center">
                <div className="arrL_style mt-3 p-3 rounded-circle d-flex justify-content-center align-items-center">
                    <Link to={'/sign-up'}>
                        <img src={ArrL} />
                    </Link>
                </div>
                <Col className="mt-3">
                    <h5 className="back_title">Let’s complete your profile</h5>
                </Col>
            </Row>

            <Row className="mt-5">
                <Form className="mt-4">
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">Choose Gender</Form.Label>

                        <Form.Select className="mt-2 px-3 inputCustom_style selectCustom_style">
                            <option value="1">Woman</option>
                            <option value="2">Man</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">Date of Birth</Form.Label>
                        <Form.Control type="date" className="mt-2 px-3 inputCustom_style" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">Your Weight</Form.Label>

                        <div className="position-relative">
                            <Form.Control type="number" className="mt-2 px-3 inputCustom_style " />
                            <div className="position-absolute afterStyle d-flex justify-content-center align-items-center text-dark">
                                KG
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">Your Height</Form.Label>
                        <div className="position-relative">
                            <Form.Control type="number" className="mt-2 px-3 inputCustom_style " />
                            <div className="position-absolute afterStyle d-flex justify-content-center align-items-center text-dark">
                                CM
                            </div>
                        </div>
                    </Form.Group>

                    <Col>
                        <Link to={'/dashboard'}>
                            <Button className="w-100 py-2 submitBtnCustom_style text-dark" type="submit">
                                Next
                            </Button>
                        </Link>
                    </Col>
                </Form>
            </Row>

            <Row className="my-5">
                <Col className="d-flex justify-content-end">
                    <p className="skip">
                        Skip for now
                    </p>
                </Col>
            </Row>
        </Container>
    )
}