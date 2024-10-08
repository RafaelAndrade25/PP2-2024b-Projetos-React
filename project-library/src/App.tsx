import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Addbook from './pages/addBook';
import Editbook from './pages/editBook';
function App() {
    return (
        <div className = "container">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Addbook />} />
                    <Route path="/edit/:id" element={<Editbook />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;