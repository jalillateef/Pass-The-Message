const input = document.getElementById('text-input');
const submitBtn = document.getElementById('btn');
const deliveredMsg = document.getElementById('delivered-text');
const alert = document.getElementById('alert');

window.addEventListener('DOMContentLoaded', function(){
    deliveredMsg.textContent = ""
})


submitBtn.addEventListener('click', function(e){
    if(input.value.length >= 1){
    deliveredMsg.textContent = input.value
    }
    if (input.value === ""){
// Display alert
        alert.style.display = "block";
// Make alert disappear after 3 seconds
        window.setTimeout(closeAlert, 3000);
        function closeAlert(){
            alert.style.display = "none";
        }
        deliveredMsg.textContent != input.value
    }
})
    
input.addEventListener('keydown', function(e){
    if(e.key === "Enter" & input.value.length >= 1){
        e.preventDefault()
        deliveredMsg.textContent = input.value
        }
    if(e.key === "Enter" & input.value === ""){
        e.preventDefault()
        alert.style.display = "block";
        window.setTimeout(closeAlert, 3000);
        function closeAlert(){
            alert.style.display = "none";
        }
        deliveredMsg.textContent != input.value
    }
})







