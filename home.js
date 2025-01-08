function handleClick(button) {
    const message = button.getAttribute('data-message');
    alert(message);
        }

function clickme(){

    const newelement=document.createElement('P')
    newelement.textContent="channel subscribed "
    const nw = document.getElementById("btn")
    nw.appendChild(newelement)
    btn.style.color="red"


}