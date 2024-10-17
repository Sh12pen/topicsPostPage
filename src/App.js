import TaskList from "./components/TaskList";
import Greeting from "./Greeting";
import Opened_topic from "./TopicPage";
//import TaskList2 from "./TaskList2";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import ThemeSwitcher from "./TS";
function App() {
  let x="<div className='App2'> + <h1>To-Do App2</h1>  <TaskList/>  <Greeting /> </div>";
  return ( 
    <div className="App">
    <THeader/>
    <hr/>

      <Opened_topic/>
      <p>needs a navbar + fix title line header + comments section</p>

    </div>
  );
}//f1


const THeader=()=>(
  <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
)
export default App;
//export  App2;
//funct name here has to be same as file name.
//called functs need to be within the div named app
