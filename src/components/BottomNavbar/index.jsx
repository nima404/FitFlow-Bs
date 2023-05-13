import { Col, Container, Row } from "react-bootstrap"
import './style.css';
import dashboard from '../../assets/icons/dashboard.png';

export const BottomNavbar = () => {
    return (
        <Container className="position-fixed bottom-0 start-0 w-100">
            <Row className="d-flex justify-content-betweeb align-items-center py-2">
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <img src={dashboard} />
                    <h5 className="mt-2 optionTitle">Dashboard</h5>
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <img src={dashboard} />
                    <h5 className="mt-2 optionTitle">Dashboard</h5>
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <img src={dashboard} />
                    <h5 className="mt-2 optionTitle">Dashboard</h5>
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <img src={dashboard} />
                    <h5 className="mt-2 optionTitle">Dashboard</h5>
                </Col>
            </Row>
        </Container>
    )
}