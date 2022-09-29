import MainRoutes from './routes/Routes';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {Object.values(MainRoutes).map((route) => {
                        const Page = route.component;
                        return <Route key={route.id} path={route.path} element={<Page />} />;
                    })}
                    <Route path="*" element={<Navigate to={MainRoutes.ERROR.path} replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
