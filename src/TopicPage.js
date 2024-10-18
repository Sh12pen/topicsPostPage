// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { useState } from "react";
import ThemeSwitcher from "./TS";
//  const [state1, functsetnewstate] = useState([]);
  //const resetstate = () => {  functsetnewstate(null);};
const Opened_topic=() => (
        
        <>
          
        <div class="container row-3 " id="postbox">
        <nav aria-label="breadcrumb" class="feature col" >
        <ol ><div id="postname" class="col-1 row-0"> <h1> Topic name</h1></div></ol>
        <hr/>
       <ol> <div id="posttext" class="col-1 row-1">texto</div></ol>
       <ol  class="breadcrumb p-3 bg-body-tertiary rounded-4"> <div id="posttags" class="col-1 row-2">  <small class="text-body-secondary">
        <PostTags/>

        </small></div></ol>

</nav>
</div>
<hr/>
<Dividerforsection/>

            </>
    );

function PostTags(){
  return(
    <Stack direction="horizontal" gap={2}>
      <Badge pill bg="primary">
        tag 1
      </Badge><Badge pill bg="secondary">
        tag 2
      </Badge><Badge pill bg="danger">
        tag 3
      </Badge>
      
    </Stack>
  );
}
const Attpt=()=>(
<>
 
  <body>

<div class="container my-5">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb p-3 bg-body-tertiary rounded-4">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
  </nav>
</div>

<Dividerforsection/>
<div class="container my-5">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb p-3 bg-body-tertiary rounded-3">
      <li class="breadcrumb-item">
        <a class="link-body-emphasis" href="#">

          <span class="visually-hidden">Home</span>
        </a>
      </li>
      <li class="breadcrumb-item">
        <a class="link-body-emphasis fw-semibold text-decoration-none" href="#">Library</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav>
</div>

<div class="b-example-divider"></div>

<div class="container my-5">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
      <li class="breadcrumb-item">
        <a class="link-body-emphasis" href="#">
          <svg class="bi" width="16" height="16"></svg>
          <span class="visually-hidden">Home</span>
        </a>
      </li>
      <li class="breadcrumb-item">
        <a class="link-body-emphasis fw-semibold text-decoration-none" href="#">Library</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav>
</div>

<div class="b-example-divider"></div>

<div class="container my-5">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-custom overflow-hidden text-center bg-body-tertiary border rounded-3">
      <li class="breadcrumb-item">
        <a class="link-body-emphasis fw-semibold text-decoration-none" href="#">
          <svg class="bi" width="16" height="16">  </svg>
          Home
        </a>
      </li>
      <li class="breadcrumb-item">
        <a class="link-body-emphasis fw-semibold text-decoration-none" href="#">Library</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav>
</div>

<div class="b-example-divider"></div>
<script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    </body>
</>

)
function Dividerforsection(){
    return(
        <div class="b-example-divider"></div>
    )
}

function comments(){
  //add components to respective sections after
  return(
    Node
  );
}
export default Opened_topic;