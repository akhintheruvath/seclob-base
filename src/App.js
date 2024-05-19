import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SignInPage from './SignInPage/SignInPage';
import { Dashboard } from './Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard activeTab={"dashboard"} />} />
        <Route path="/upload" element={<Dashboard activeTab={"upload"} />} />
        <Route path="/invoice" element={<Dashboard activeTab={"invoice"} />} />
        <Route path="/schedule" element={<Dashboard activeTab={"schedule"} />} />
        <Route path="/calendar" element={<Dashboard activeTab={"calendar"} />} />
        <Route path="/notification" element={<Dashboard activeTab={"notification"} />} />
        <Route path="/settings" element={<Dashboard activeTab={"settings"} />} />
      </Routes>
    </Router>
  );
}

export default App;