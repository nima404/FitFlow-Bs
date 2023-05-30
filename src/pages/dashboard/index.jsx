import { useState } from "react"
import { Sidebar } from "../../components/Sidebar"
import { Button, Col, Container, Row } from "react-bootstrap"
import { BottomNavbar } from "../../components/BottomNavbar"
import './style.css';
import logo from '../../assets/images/logo.png';
import sidebar from '../../assets/icons/sidebar.png';
import profile from '../../assets/images/profile.png';
import plus from '../../assets/icons/Vector (12).png';
import run from '../../assets/icons/run.png'
import bic from '../../assets/icons/ion_bicycle-sharp.png';
import sport from '../../assets/icons/sport.png';
import { Link, useLocation } from "react-router-dom";

export const Dashboard = () => {
    const [sidebarState, setSidebarState] = useState(false)
    const [activityState, setActivityState] = useState(false)

    const [activityList, setActivityList] = useState([
        { title: "Rennen", img: run, route: "/dashboard/rennen" },
        { title: "Fietsen", img: bic, route: "/" },
        { title: "Yoga", img: sport, route: "/" },
        { title: "Rennen", img: run, route: "/" },
        { title: "Yoga", img: sport, route: "/" },
        { title: "Rennen", img: run, route: "/" },
    ])

    const router = useLocation()

    const pushActivityHandler = (node) => {
    }
    return (
        <>
            <Sidebar state={sidebarState} setState={setSidebarState} />

            <Container className="mb100">
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

                <Row className="mt-5 mb-3">
                    <Col className="d-flex justify-content-center align-items-center flex-column">
                        <h5 className="activity_title">Activities</h5>
                        <h5 className="mt-4 activity_title">add your first activity</h5>

                        <Row className="mt-4">
                            <Col>
                                {
                                    !activityState ?
                                        <Button className='rounded plus-bg-style d-flex justify-content-center align-items-center' onClick={() => setActivityState(true)}>
                                            <img src={plus} />
                                        </Button> :
                                        <div className='activity_Box mt-4'>
                                            {
                                                activityList.map((node, _) => {
                                                    return <Link to={node.route}>
                                                        <div className='activity_item' key={`${node.title}_${_}`} onClick={() => pushActivityHandler(node)}>
                                                            <div className='activity_img d-flex justify-content-center align-items-center'>
                                                                <img src={node.img} />
                                                            </div>
                                                            <h5>{node.title}</h5>
                                                        </div>
                                                    </Link>
                                                })
                                            }
                                        </div>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >

            <BottomNavbar />
        </>
    )
}