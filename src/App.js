import MainRoutes from './routes/Routes';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CartPage from './Page/Cart/Cart';
import Login from './Page/auth/Login';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
function App() {
    const [isLogin, setIslogin] = useState(false);
    const user = useSelector((state) => state.user.user);
    useEffect(() => {
        setIslogin(!!user);
    }, [user]);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {Object.values(MainRoutes).map((route) => {
                        const Page = route.component;
                        return <Route key={route.id} path={route.path} element={<Page />} />;
                    })}
                    <Route path="*" element={<Navigate to={MainRoutes.ERROR.path} replace />} />
                    <Route path="/cart" element={isLogin ? <CartPage /> : <Navigate to="/login" replace />} />
                    <Route
                        path="/login"
                        element={isLogin ? <Navigate to={MainRoutes.HOME.path} replace /> : <Login />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
