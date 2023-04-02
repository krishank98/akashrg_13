
import './App.css';
import Example from './components/navbar/Example';
import Footer from './components/footer/Footer';
import Whatsapp from './components/whatsapp/Whatsapp';
import Topbar from './components/topbar/Topbar';
import DropdownComponent from './components/dropdown/DropdownComponent';
// import Dropdown from './components/dropdown/Dropdown';


function App() {
  return (
    <>
    <Topbar></Topbar>
    <Example ></Example>
    
    <DropdownComponent></DropdownComponent>
    
    
    {/* <Dropdown style={{margin: "40px" }}></Dropdown> */}
    
    <div style={{height: '100vh'}}>
    </div>
    
    <Whatsapp></Whatsapp>
    <Footer></Footer>

    </>

  )
}

export default App;
