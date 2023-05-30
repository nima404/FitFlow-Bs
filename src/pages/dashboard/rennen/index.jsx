import { Button, Col, Container, Form, Row } from "react-bootstrap"
import ArrL from '../../../assets/icons/left-arrow.png';
import { Link } from "react-router-dom";
import run from '../../../assets/icons/Vector (19).png';
import './style.css';
import play from '../../../assets/icons/play_arrow.png';
import stop from '../../../assets/icons/stop.png';
import { useState } from "react";

export const Rennen = () => {
    const [btnState, setBtnState] = useState("play")
    return <Container>
        <Row className="mt-5 d-flex justify-content-start align-items-center">
            <div className="arrL_style mt-3 p-3 rounded-circle d-flex justify-content-center align-items-center">
                <Link to={'/dashboard'}>
                    <img src={ArrL} />
                </Link>
            </div>
            <Col className="mx-5 mt-3 d-flex align-items-center justify-content-start">
                <img src={run} />
                <h5 className="back_title">Track Run</h5>
            </Col>
        </Row>


        <Form>
            <Row className="mt-5">
                <Col className="">
                    <Form.Group className="mb-3 d-flex align-items-center justify-content-start flex-column" controlId="formBasicEmail">
                        <Form.Control className="text-center inpCustom" type={"number"} placeholder="0.00" />
                        <Form.Label className="mt-1">Looptijd</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-start flex-column" controlId="formBasicEmail">
                        <Form.Control className="text-center inpCustom" type={"number"} placeholder="0.00" />
                        <Form.Label className="mt-1">Looptijd (km)</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-start flex-column" controlId="formBasicEmail">
                        <Form.Control className="text-center inpCustom" type={"number"} placeholder="0.00" />
                        <Form.Label className="mt-1">Verbrande calorieën</Form.Label>
                    </Form.Group>

                </Col>
            </Row>

            <Row className="mt-5 d-flex justify-content-center align-items-center">
                {
                    btnState == "play" ?
                        <Button className=" btnActionStyle d-flex justify-content-center align-items-center" onClick={() => setBtnState("stop")}>
                            <img src={play} />
                        </Button>
                        :
                        <Button className=" btnActionStyle d-flex justify-content-center align-items-center" onClick={() => setBtnState("play")}>
                            <img src={stop} />
                        </Button>
                }
            </Row>
        </Form>
    </Container >
}