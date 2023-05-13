import { Col, Container, Row } from "react-bootstrap"
import './style.css';
import dashboard from '../../assets/icons/dashboard.png';
import user from '../../assets/icons/user.png';
import users from '../../assets/icons/users.png';
import setting from '../../assets/icons/setting.png';
import { Link } from "react-router-dom";
import { useState } from "react";

export const BottomNavbar = () => {
    const [bottomMenuOptions, setBottomMenuOptions] = useState([
        { title: "Dashboard", img: dashboard, route: "/dashboard" },
        { title: "vrienden", img: users, route: "/" },
        { title: "coaches", img: user, route: "/" },
        { title: "Instellingen", img: setting, route: "/dashboard/setting" },
    ])
    return (
        <Container className="position-fixed bottom-0 start-0 w-100 bottom_menu_bg">
            <Row className="d-flex justify-content-between align-items-center p-2">
                {
                    bottomMenuOptions.map((node, _) => {
                        return <Col>
                            <Link to={node.route} className="d-flex flex-column align-items-center justify-content-center">
                                <img src={node.img} />
                                <h5 className="mt-2 optionTitle">{node.title}</h5>
                            </Link>
                        </Col>
                    })
                }
            </Row>
        </Container>
    )
}