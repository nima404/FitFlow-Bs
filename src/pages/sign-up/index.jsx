import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import './style.css';
import ArrL from '../../assets/icons/left-arrow.png';
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export const SignUp = () => {
    const [data , setData] = useState({
        fullName:"",
        email:"",
        password:""
    })

    useEffect(()=>{
        console.log("data" , data)
    } , [data])
    const router = useNavigate()
    const pushDataHandler = ()=>{
        const values = Object.values(data);
        const every = values.every((item)=> !!item == true)
        if(every){
            localStorage.setItem("datas" , JSON.stringify(data))
            router('/sign-up/load-data')
        }else{
            window.location.reload()
        }
    }
    return (
        <Container>
            <Row className="mt-5 d-flex justify-content-start align-items-center">
                <div className="arrL_style mt-3 p-3 rounded-circle d-flex justify-content-center align-items-center">
                    <Link to={'/'}>
                        <img src={ArrL} />
                    </Link>
                </div>
                <Col className="mt-3">
                    <h5 className="back_title">vul uw gegevens in</h5>
                </Col>
            </Row>

            <Row className="mt-5">
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">Volledige naam</Form.Label>
                        <Form.Control type={"text"} placeholder="naam" className="mt-2 px-3 inputCustom_style" onChange={(e)=> setData({...data , fullName:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">E-mailadres</Form.Label>
                        <Form.Control type="email" placeholder="email" className="mt-2 px-3 inputCustom_style" onChange={(e)=> setData({...data , email:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">Wachtwoord</Form.Label>
                        <Form.Control type={"password"} placeholder="Wachtwoord" className="mt-2 px-3 inputCustom_style" onChange={(e)=> setData({...data , password:e.target.value})}/>
                    </Form.Group>

                    <Col>
                            <Button className="w-100 py-3 submitBtnCustom_style text-dark" type="submit" onClick={pushDataHandler}>
                                Account aanmaken
                            </Button>
                    </Col>
            </Row>

            <Row className="my-5">
                <Col className="d-flex justify-content-center">
                    <p className="login">
                        Heeft u al een account? <span>Inloggen!</span>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}