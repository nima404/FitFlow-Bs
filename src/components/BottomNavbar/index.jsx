import { Col, Container, Row } from "react-bootstrap"
import './style.css';
import dashboard from '../../assets/icons/dashboard.png';
import user from '../../assets/icons/user.png';
import users from '../../assets/icons/users.png';
import setting from '../../assets/icons/setting.png';

export const BottomNavbar = () => {

    return (
        <Container className="position-fixed bottom-0 start-0 w-100 bottom_menu_bg">
            <Row className="d-flex justify-content-between align-items-center p-2">
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <img src={dashboard} />
                    <h5 className="mt-2 optionTitle">Dashboard</h5>
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <img src={users} />
                    <h5 className="mt-2 optionTitle">vrienden</h5>
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <img src={user} />
                    <h5 className="mt-2 optionTitle">coaches</h5>
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <img src={setting} />
                    <h5 className="mt-2 optionTitle">Instellingen</h5>
                </Col>
            </Row>
        </Container>
    )
}