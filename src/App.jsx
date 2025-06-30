import react, { useState, useEffect } from 'react';
import { createTheme, CssBaseline, ThemeProvider, Container,Paper} from "@material-ui/core"
import HomeScreen from "./Screens/HomeScreen"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css'
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Cart from "./Pages/Cart";
import Support from "./Pages/Support";
import Landing from './Pages/Landing';
import OrderTracking from './Pages/OrderTracking';
import SupportTracking from './Pages/SupportTracking';
import Feedback from './Pages/Feedback';


const theme= createTheme({
  Typography:{
    h1:{fontWeight:'bold'},
    h2:{
      fontSize:'2rem',
      color:'black',
    },
  },
  palette:{
    primary:{main: '#ff1744'},
    secondary:{
      main:'#118e16',
      contrastText:'#ffffff'
    },
  },
});


function App() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('cafeUser');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('cafeUser');
      }
    }
    setIsLoading(false);
  }, []);

  const handleUserRegistered = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('cafeUser');
    setUser(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-800 mx-auto mb-4"></div>
          <p className="text-accent-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show landing page if user is not registered
  if (!user) {
    return <Landing onUserRegistered={handleUserRegistered} />;
  }
  
  return (

    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/support" element={<Support />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/:linkId" element={<Cart />} />
              <Route path="/orders" element={<OrderTracking />} />
              <Route path="/support-tickets" element={<SupportTracking />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>

    )
}

export default App
