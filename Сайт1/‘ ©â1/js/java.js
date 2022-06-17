let currTheme
window.onload= function (){
    currTheme=localStorage.getItem("curent");
    change(currTheme);
}


function change(theme){
    localStorage.setItem("curent",theme);

    let colorb = 'black'
    let colorf = 'white'
    switch(theme) {
        case 'red': {
            colorb = "red";
            colorf = "black"
            break;
        }
        case 'violet': {
            colorb = 'violet'
            colorf='white'

            break;
        }
    }
    document.getElementById('menu').style.backgroundColor = colorb;
    document.getElementById('menu').style.color = colorf;
}

function send(){
    alert('Mesajul este primit');
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}