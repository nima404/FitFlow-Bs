import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { PrivateRoute } from "../components/privateRoute";
import { Dashboard } from "./dashboard";
import { useState } from "react";

export const Routers = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/sign-up" element={<SignUp />} /> */}

                    <Route path="*" element={<div>not found</div>} />

                    <Route path='/' element={<PrivateRoute isAuthentic={isAuthenticated} />} >
                        {/* specify private routes here  */}
                        <Route path='/dashboard' element={<Dashboard />} />
                        {/* <Route path='/dashboard/setting' element={<DashboardSetting />} /> */}
                    </Route>
                </Routes>
            </div>
        </div>
    )
}