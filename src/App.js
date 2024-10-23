//import TaskList from "./components/TaskList";
//import Greeting from "./Greeting";
import Opened_topic from "./TopicPage";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import TaskList2 from "./TaskList2";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import ThemeSwitcher from "./TS";
import Sidebar from "./Sidebar/Sidebar.jsx";

//const [show, setShow] = useState(false);
//<link href="navbar.css" rel="stylesheet">

function App() {
  let x="<div className='App2'> + <h1>To-Do App2</h1>  <TaskList/>  <Greeting /> </div>";
  return ( 
    
    <div className="App" >
      
      
     <link href="navbar.css" rel="stylesheet"></link>
     <div className="home-container ">
        <div className="home-container ">

          <Sidebar/>
        </div>
            <div className=" main-content">
                <THeader/>
              
                <hr/>
                <script>
  console.log("help");
  getcontent();
 loadDoc(); 
 
</script>
                  <Opened_topic/>
                  <p>footer below... <br/> need to fix sidebar heghjt</p>

            </div>
    </div>
    
  </div>
  );
}//f1

/**
 *  <div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4">
    <h5 className="text-white h4">Collapsed content</h5>
    <span className="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <span id="navbar-button-toggler" className="navbar-toggler-icon"   >

    </span>

      
    </button>
  </div></nav>
 * / */
const Ic=()=>{return( 
/*<svg 
  viewBox='0 0 30 30' 
  xmlns='http://www.w3.org/2000/svg'>
  <path 
  stroke='rgba(255,255,255,0.6)' 
  stroke-width='2' 
  stroke-linecap='round' 
  stroke-miterlimit='10' 
  d='M4 7h22M4 15h22M4 23h22'
  />
</svg>*/
<svg

className="w-6 h-6 text-gray-800 dark:text-white"
aria-hidden="true"
          fill="none"

viewBox='0 0 30 30' 
  xmlns='http://www.w3.org/2000/svg'>
  <path 
   stroke='rgba(255,255,255,0.6)' 
  strokeWidth="2"
  strokeLinecap='round' 
  strokeMiterlimit='10' 
  d='M4 7h22M4 15h22M4 23h22'
  />

  </svg>

)}
const BarIcon = () => {
  return (
      <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
          />
      </svg>
  )
}
const svgString = encodeURIComponent(renderToStaticMarkup(    "background-image: url(&quot;data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255,255,255,0.6)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e&quot;);"
));
//const dataUri = `url("data:image/svg+xml,${svgString}")`;
const TNav=()=>(
//make sidebar
//

<>
<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">Menu

        </button>
      <div className="offcanvas offcanvas-start"  tabIndex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLightLabel">Offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                
                  <hr className="dropdown-divider"/>
                
              </ul>
            </li>
          </ul>
          
        </div>
      </div>
      </>
)
const Types=()=>([
  'Primary',
  'Secondary',
  'Success',
  'Danger',
  'Warning',
  'Info',
  'Light',
  'Dark',
])

const THeader=()=>(
  
  <header className="d-flex justify-content-center py-3 px-3">
 
      <ul className="nav nav-pills ">
        <li className="nav-item"><TNav/></li>
        <li className="nav-item"><a href="#" className="nav-link">Dashboard</a></li>
        
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item">
              <a href="c" className="nav-link ">
              <svg className="bi d-block mx-auto mb-1" width="24" height="24"><symbol id="people-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fillRule="evenodd" 
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </symbol>
                <use xlinkHref="#people-circle"></use></svg>
                Account
              </a>
            </li>
      </ul>
    </header>
);
export default App;
//export  App2;
//funct name here has to be same as file name.
//called functs need to be within the div named app
//capita;l letters...