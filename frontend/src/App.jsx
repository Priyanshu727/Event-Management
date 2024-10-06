
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';

import EventDetail from './pages/EventDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/create-event" element={<EventForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
