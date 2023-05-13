import { useState } from "react"
import { Sidebar } from "../../components/Sidebar"
import { Col, Container, Row } from "react-bootstrap"
import { BottomNavbar } from "../../components/BottomNavbar"
import './style.css';
import logo from '../../assets/images/logo.png';
import sidebar from '../../assets/icons/sidebar.png';
import profile from '../../assets/images/profile.png';

export const Dashboard = () => {
    const [sidebarState, setSidebarState] = useState(false)
    return (
        <>
            <Sidebar state={sidebarState} setState={setSidebarState} />

            <Container>
                <Row className="mt-4 d-flex justify-content-between align-items-center">
                    <Col>
                        <img src={logo} className="logoStyle" />
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <img src={sidebar} onClick={() => setSidebarState(true)} />
                    </Col>
                </Row>

                <Row className="mt-5 mb-3">
                    <Col className=" mt-4 d-flex justify-content-center align-items-center flex-column">
                        <h5 className="d-flex justify-content-center align-items-center mb-3 welcomeText">welkom Ashley!</h5>
                        <div className="profile_border p-2 rounded-circle">
                            <img src={profile} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    
                </Row>
            </Container >

            <BottomNavbar />
        </>
    )
}