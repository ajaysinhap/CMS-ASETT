import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ComplaintForm from './pages/ComplaintForm';
import ComplaintType from './pages/ComplaintType';
import ComplainantDetails from './pages/ComplainantDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" replace />} />
            <Route path="/welcome" element={<ComplaintForm />} />
            <Route path="/complaint-type" element={<ComplaintType />} />
            <Route path="/complainant-details" element={<ComplainantDetails />} />
            <Route path="*" element={<Navigate to="/welcome" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
