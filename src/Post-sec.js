// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const LisofPosts=()=>(
    <>
    <script src="sparefunctions.js"/>
    <script>
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
           // getcontent(this);
            getxml(this);
        }
        };


</script>
    </>
)



export default LisofPosts;