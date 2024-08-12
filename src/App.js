import logo from './logo.svg';
import './App.css';
import Navbar from './core/components/layouts/Navbar';
import Landing from './core/components/layouts/Landing';
import Footer from './core/components/layouts/Footer';
import RootRouter from './root-routers/';


function App() {
  const appName = "mindsprint";
  return (
    <>
      <Navbar appName={appName}/>
  
       <RootRouter/> 
      <Footer/>
    </>
  );
}

export default App;
