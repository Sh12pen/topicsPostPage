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
        
        <div class="container">
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
<SComment1/>

<Dividerforsection/>
<SComment2/>
            </div>
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

function Comments(){
  //add components to respective sections after
  return(
    <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                  <div class="card-header">commenter username </div>
               <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <div class="conversation-meta">
                <a href="#">Like</a> · <a href="#">Reply</a> · <a href="#">Report</a>
                </div>
          </a>
</div>
    //
  );
}
function SComment1(){
  return(
    <>
   <div class="container px-4">
   <div class="row gx-5">
    <div class="row col-xl">
    <Comments/></div>
<div class="row samenow">
    <div class="spacepls row-2 col-sm-3">
          <svg class="svg-inline--fa fa-reply fs-10 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="reply" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
            <path fill="currentColor" d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z">
            </path></svg>
        </div>
    <div class="reply row-2 col-sm-9 ">
      
                            
          <div class="conversation-avatar"> a
                              <a href="#" class="user-avatar">
                                <img src="" alt=""/></a>
                            </div>
                            
                            
                            <div class="conversation-message">
                              <div class="conversation-meta d-flex w-100 justify-content-between">
                                <a href="#"><strong>Username </strong></a> 
                                 <small class="time ml-1">timestamp</small>
                              </div>
                              <div class="conversation-message-text"> 
                                response 
                                texto                
                                </div>
                              <div class="conversation-meta">
                                <a href="#">Like</a> · <a href="#">Reply</a> · <a href="#">Report</a>
                              </div>
                            </div>      
  

         </div></div>
  </div>
</div>
</>
//gutter x list group
  );
}

function SComment2(){
  return(
//for things to be on th esame row, put them in same div under clss row
    <>
   <div class="container px-4">


     <div class="row gx-5">
       <div class="row col-xl"> <SComment1/></div>
       <div class="spacepls row-2 col-sm-3">
</div>
<div class="row samenow">
       <div class="spacepls row-2 col-sm-3">
              <svg class="svg-inline--fa fa-reply fs-10 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="reply" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z">
                </path></svg>
       </div>
      <div class="reply row-2 col-sm-6 ">             
          <div class="conversation-avatar"> b
                              <a href="#" class="user-avatar">
                                <img src="" alt=""/></a>
          </div>
                            
                            
          <div class="conversation-message">
              <div class="conversation-meta d-flex w-100 justify-content-between">
                <a href="#"><strong>Username </strong></a> 
                  <small class="time ml-1">timestamp</small>
              </div>
              <div class="conversation-message-text"> 
                response 
                texto                
              </div>
              <div class="conversation-meta">
                <a href="#">Like</a> · <a href="#">Reply</a> · <a href="#">Report</a>
              </div>
         </div>      
  

      </div>
  </div>
  
  </div>


 
 </div>
</>
  )
}
export default Opened_topic;