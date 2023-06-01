import { Button, Col, Container, Form, Row } from "react-bootstrap"
import ArrL from '../../../assets/icons/left-arrow.png';
import {Link, useNavigate} from "react-router-dom";
import run from '../../../assets/icons/Vector (19).png';
import './style.css';
import { useState } from "react";

export const Rennen = () => {

    const [data , setData] = useState({
        durationInMinutes: null,
        description:null,
        distanceInKm:null,
        userId:1
    })

    const router = useNavigate()
    const stopHandler = ()=>{
        const Values = Object.values(data)
        const every = Values.every((i)=> i !== null)
if(every){
    var formdata = new FormData();
    formdata.append("durationInMinutes", data.durationInMinutes);
    formdata.append("description", data.description);
    formdata.append("distanceInKm", data.distanceInKm);
    formdata.append("userId", "1");

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("http://localhost:8081/activities/addRunningActivity", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            const parse = JSON.parse(result)
            if(parse.message == "Running activity added successfully"){
                router("/dashboard")
            }else{

            }
        })
        .catch(error => console.log('error', error));
}

    }
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
                        <Form.Control className="text-center inpCustom" type={"number"} placeholder="0.00" onChange={(e)=> setData({...data , durationInMinutes:e.target.value})}/>
                        <Form.Label className="mt-1">Looptijd</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-start flex-column" controlId="formBasicEmail">
                        <Form.Control className="text-center inpCustom" type={"number"} placeholder="0.00" onChange={(e)=> setData({...data , distanceInKm:e.target.value})}/>
                        <Form.Label className="mt-1">Looptijd (km)</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center justify-content-start flex-column" controlId="formBasicEmail">
                        <Form.Control className="text-center inpCustom" type={"text"} placeholder="..."
                                      onChange={(e)=> setData({...data , description:e.target.value})}
                        />
                        <Form.Label className="mt-1">Description</Form.Label>
                    </Form.Group>

                </Col>
            </Row>

            <Row className="mt-5 d-flex justify-content-center align-items-center">



                <Row className="my-5">
                    <Col>
                        <Button className="w-100 py-2 submitBtnCustom_style text-dark" type={"button"} onClick={stopHandler}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Row>
        </Form>
    </Container >
}