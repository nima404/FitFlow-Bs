import { Button, Col, Container, Form, FormSelect, InputGroup, Row } from "react-bootstrap"
import './style.css';
import ArrL from '../../../assets/icons/left-arrow.png';
import {Link, useNavigate} from "react-router-dom";
import {PostSignupData} from "./service";
import {useEffect , useState} from "react";

export const LoadSignupData = () => {

    const [data , setData] = useState(
        {
         height:"",
         weight:"",
            dateOfBirth:"",
            gender:""
        }
    )


    const router = useNavigate()
    const pushDataHandler = async()=>{
        const a = Object.values(data);

        const all = a.every((item)=> !!item == true)

        if(all){
            const signDatas = localStorage.getItem("datas")
            if(signDatas){
                const parseDatas = JSON.parse(signDatas)
                const response = await PostSignupData("signup" , {...parseDatas , ...data})
                const token =await response?.token;

                if(token){
                    router('/dashboard')
                }else{
                    router("/sign-up")
                }
            }

        }
    }
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
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">Choose Gender</Form.Label>

                        <Form.Select className="mt-2 px-3 inputCustom_style selectCustom_style" onChange={(e)=> setData({...data , gender:e.target.value})}>
                            <option value="Woman">Woman</option>
                            <option value="Man">Man</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">Date of Birth</Form.Label>
                        <Form.Control type="date" className="mt-2 px-3 inputCustom_style" onChange={(e)=> setData({...data , dateOfBirth:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">Your Weight</Form.Label>

                        <div className="position-relative">
                            <Form.Control type="number" className="mt-2 px-3 inputCustom_style " onChange={(e)=> setData({...data , weight:e.target.value})}/>
                            <div className="position-absolute afterStyle d-flex justify-content-center align-items-center text-dark">
                                KG
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="lableCustom_style">Your Height</Form.Label>
                        <div className="position-relative">
                            <Form.Control type="number" className="mt-2 px-3 inputCustom_style " onChange={(e)=> setData({...data , height:e.target.value})}/>
                            <div className="position-absolute afterStyle d-flex justify-content-center align-items-center text-dark">
                                CM
                            </div>
                        </div>
                    </Form.Group>

                    <Col>

                            <Button className="w-100 py-2 submitBtnCustom_style text-dark" type="submit" onClick={pushDataHandler}>
                                Next
                            </Button>
                    </Col>

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