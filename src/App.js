//import TaskList from "./components/TaskList";
//import Greeting from "./Greeting";
import Opened_topic from "./TopicPage";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

//import TaskList2 from "./TaskList2";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import ThemeSwitcher from "./TS";

//const [show, setShow] = useState(false);
//<link href="navbar.css" rel="stylesheet">

function App() {
  let x="<div className='App2'> + <h1>To-Do App2</h1>  <TaskList/>  <Greeting /> </div>";
  return ( 
    
    <div className="App">
      <link href="navbar.css" rel="stylesheet"></link>
    <THeader/>
    <TNav />
    <hr/>

      <Opened_topic/>
      <p>needs a sidebar + fix title line header + comments section</p>
<Ic/>
<BarIcon/>
    </div>
  );
}//f1
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
  stroke="Pink"
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
const TNav=()=>(
//make sidebar

<>
const svgString = encodeURIComponent(renderToStaticMarkup(<Ic />));
<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
<span class="navbar-toggler-icon" 
//style={{ backgroundImage: `url(${mySvg})` }}
//style="background-image: url(&quot;data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255,255,255,0.6)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e&quot;);">

style={{
  backgroundImage:` url(${"data:image/svg+xml,<svgString/>"})`}}>
  </span>
        </button>
      <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                
                  <hr class="dropdown-divider"/>
                
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
  <header class="d-flex justify-content-left py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Dashboard</a></li>
        <li class="nav-item"><TNav/></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">insert post header name?</a></li>
      </ul>
    </header>
);
export default App;
//export  App2;
//funct name here has to be same as file name.
//called functs need to be within the div named app
//capita;l letters...