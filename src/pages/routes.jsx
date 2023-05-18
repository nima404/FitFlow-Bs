import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { PrivateRoute } from "../components/privateRoute";
import { Dashboard } from "./dashboard";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { DashboardSetting } from "./dashboard/setting";

export const Routers = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <Container className="page_container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/sign-up" element={<SignUp />} /> */}

                <Route path="*" element={<div>not found</div>} />

                <Route path='/' element={<PrivateRoute isAuthentic={isAuthenticated} />} >
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/dashboard/setting' element={<DashboardSetting />} />
                </Route>
            </Routes>
        </Container>
    )
}