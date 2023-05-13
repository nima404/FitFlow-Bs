import { Col, Container, Row } from "react-bootstrap"
import './style.css';
import backImg from '../../assets/icons/left-arrow.png';
import rightArr from '../../assets/icons/rightArr.png';
import profileImg from '../../assets/images/profile.png';
import { useState } from "react";

export const Sidebar = ({ state, setState }) => {
    const [pages, setPages] = useState([
        { title: "Activiteiten Geschiedenis", route: "" },
        { title: "Training Vooruitgang", route: "" },
        { title: "Mijn doelen", route: "" },
        { title: "Mijn vrienden", route: "" },
        { title: "Mijn uitdagingen", route: "" },
        { title: "Instellingen", route: "" },
    ])

    if (state) {
        return (
            <Container className="position-fixed top-0 start-0 w-100 bgColor overflow-scroll">
                <Row className="mt-5 px-4">
                    <Col sm={12}>
                        <div className='back_parent d-flex align-items-center justify-content-center rounded-circle' onClick={() => setState(false)}>
                            <img src={backImg} />
                        </div>
                    </Col>
                </Row>

                <Row className="mt-4 px-4">
                    <Col sm={12} className="d-flex justify-content-center align-items-center flex-column">
                        <div className="rounded-circle p-2 borderStyle">
                            <img src={profileImg} />
                        </div>
                        <h5 className="mt-2 fontStyle">Ashley</h5>
                    </Col>
                </Row>

                <Row className="px-4 mt-5">
                    {
                        pages.map((node, _) => {
                            return <Col key={`${node.title}_${_}`} sm={12} className="d-flex flex-row-reverse justify-content-between align-items-center py-4 border_style">
                                <img src={rightArr} />
                                <h5>{node.title}</h5>
                            </Col>
                        })
                    }
                </Row>

                <Row className="px-4 mt-4 pb-4">
                    <Col sm={12}>
                        <h5 className="logOutStyle">Uitloggen</h5>
                    </Col>
                </Row>
            </Container>
        )
    }
}