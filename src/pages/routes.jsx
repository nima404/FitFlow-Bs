import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { PrivateRoute } from "../components/privateRoute";
import { Dashboard } from "./dashboard";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { DashboardSetting } from "./dashboard/setting";
import { SignUp } from "./sign-up";
import { LoadSignupData } from "./sign-up/LoadData";
import { Rennen } from "./dashboard/rennen";
import { Login } from "./login";

export const Routers = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <Container className="page_container">
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/login" element={<Login />} />

                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-up/load-data" element={<LoadSignupData />} />

                <Route path="*" element={<div>not found</div>} />

                <Route path='/' element={<PrivateRoute isAuthentic={isAuthenticated} />} >
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/dashboard/setting' element={<DashboardSetting />} />
                    <Route path='/dashboard/rennen' element={<Rennen />} />
                </Route>
            </Routes>
        </Container>
    )
}