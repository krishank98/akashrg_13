import logo from './logo.svg';
import './App.css';
import Example from './components/navbar/Example';
import Footer from './components/footer/Footer';
import Whatsapp from './components/whatsapp/Whatsapp';
import Topbar from './components/topbar/Topbar';


function App() {
  return (
    <>
    <Topbar></Topbar>
    <Example ></Example>
    <div style={{height: '100vh'}}>
    </div>
    <Whatsapp></Whatsapp>
    <Footer></Footer>

    </>

  )
}

export default App;
