function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {myFunction(this);}
  xhttp.open("GET", "postdata.xml");
  xhttp.send();
}

/**<script>
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
  }
};/ */
function getcontent(){
const xml = new XMLHttpRequest(); // Define xml as an XMLHttpRequest object
xml.onload = function() {
  if (this.readyState === 4 && this.status === 200) {
    const xmlDoc = this.responseXML;
    var x, newEle2, newEle, newText;
    let OP = document.getElementsByClassName("feature");
    let headerv = OP.getElementsByClassName("postname");
    newEle = xmlDoc.createElement("POST");
    newEle2 = xmlDoc.createElement("POSTNAME");
    newText = xmlDoc.createTextNode(headerv.value);
    newEle2.appendChild(newText);
    newEle.appendChild(newEle2);
    x = xmlDoc.getElementsByTagName("CATALOG")[0];
    x.appendChild(newEle);
  } else{console.log("pls")}
};
xml.open("GET", "postdata.xml"); // Fetch the XML data
xml.send(); // Send the request
  //return headerv.value;
}

// Store the response in the myFunction scope
function myFunction(xhttp) {
if (xhttp.readyState === 4 && xhttp.status === 200) {
  const xmlDoc = xhttp.responseXML; 
  const x = xmlDoc.getElementsByTagName("POST");
  let text = x[0].getElementsByTagName("POSTNAME")[0].childNodes[0].nodeValue;
  getxml(text); // Pass the extracted text to getxml
} else{console.log("pls")}
}
function getxml(text) {
console.log(text);
document.getElementsByClassName("VV")[0].innerHTML = "A" + text; // Access the first element with class "VV"
}