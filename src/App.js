
import './App.css';
import Example from './components/navbar/Example';
import Footer from './components/footer/Footer';
import Whatsapp from './components/whatsapp/Whatsapp';
import Topbar from './components/topbar/Topbar';
import Iphone from './components/Iphone/Iphone';
import DropdownComponent from './components/dropdown/DropdownComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Dropdown from './components/dropdown/Dropdown';


function App() {
  return (
    <>
    <Topbar></Topbar>
    <Example ></Example>
    
    {/* <DropdownComponent></DropdownComponent> */}
    <BrowserRouter>
  
          <Route path="/">
          <Iphone></Iphone>
          </Route>
        
    
      </BrowserRouter>
    
    
    {/* <Dropdown style={{margin: "40px" }}></Dropdown> */}
    
    <div style={{height: '100vh'}}>
    </div>
    
    <Whatsapp></Whatsapp>
    <Footer></Footer>

    </>

  )
}

export default App;
