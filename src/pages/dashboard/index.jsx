import { useState } from "react"
import { Sidebar } from "../../components/Sidebar"
import { Container } from "react-bootstrap"
import { BottomNavbar } from "../../components/BottomNavbar"

export const Dashboard = () => {
    const [sidebarState, setSidebarState] = useState(false)
    return (
        <>
            <Sidebar state={sidebarState} setState={setSidebarState} />

            <Container>
                <button onClick={() => setSidebarState(true)}>clicl</button>
            </Container>

            <BottomNavbar />
        </>
    )
}