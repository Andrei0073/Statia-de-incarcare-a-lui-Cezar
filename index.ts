let gmailu = document.getElementById("email") as HTMLInputElement;

function verify_gmail(): void { 
    if (gmailu.value == "marcel@gmail.com") { 
        const para = document.createElement("e_bun");
        para.innerHTML = "CORECT";
        const mesajuretinut = document.getElementById("e_bun");
        if (mesajuretinut) { 
            mesajuretinut.appendChild(para);
        }
    }
}