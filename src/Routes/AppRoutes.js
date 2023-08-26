import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ProtectedRoute from './ProtectedRoute'
import Navbar from '../Components/Navbar'
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    index
                    path='/login'
                    element={<Login />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes