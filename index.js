
const input = document.getElementById('input');

function clickAlert(){
  alert("Hey i was clicked!")
}
function addingEventListener(){
  input.addEventListener('click',clickAlert)

}


addingEventListener();
