let pickedS = "";
let forms=document.getElementById("forms");
let musictitle=document.getElementById("musictitle");
let played;

forms.addEventListener("submit", (event) => {
    //pickedS=document.getElementById("pickedSong").value;
    let pickedS = localStorage.getItem("utolso") || "";
    //localStorage.setItem("utolso", pickedS);
    event.preventDefault();
    pickedS=document.getElementById("pickedSong").value;

    if(pickedS.includes("felho") || pickedS.includes("felhő") || pickedS.includes("Felhő")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("felho").style.display= "unset";
        played=document.getElementById("felho");
    }else if(pickedS.includes("grund") || pickedS.includes("Grund")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("grund").style.display= "unset";
        played=document.getElementById("grund");
    }else if(pickedS.includes("szolosbe") || pickedS.includes("szőlősbe") || pickedS.includes("Szőlősbe")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("szolosbe").style.display= "unset";
        played=document.getElementById("szolosbe");
    }else if(pickedS.includes("robinson") || pickedS.includes("Robinson")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("robinson").style.display= "unset";
        played=document.getElementById("robinson");
    }else if(pickedS.includes("marti") || pickedS.includes("márti") || pickedS.includes("Márti")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("marti").style.display= "unset";
        played=document.getElementById("marti");
    }else if(pickedS.includes("kapu") || pickedS.includes("Kapu")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("kapu").style.display= "unset";
        played=document.getElementById("kapu");
    }else if(pickedS.includes("o") || pickedS.includes("O")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("o").style.display= "unset";
        played=document.getElementById("o");
    }else if(pickedS.includes("jovok") || pickedS.includes("jövök") || pickedS.includes("Jövök")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("jovok").style.display= "unset";
        played=document.getElementById("jovok");
    }else if(pickedS.includes("napok") || pickedS.includes("Napok")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("napok").style.display= "unset";
        played=document.getElementById("napok");
    }else if(pickedS.includes("kerek") || pickedS.includes("Kerek")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("kerek").style.display= "unset";
        played=document.getElementById("kerek");
    }else if(pickedS.includes("lehetsz") || pickedS.includes("Lehetsz")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("lehetsz").style.display= "unset";
        played=document.getElementById("lehetsz");
    }else if(pickedS.includes("boros") || pickedS.includes("Boros")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("boros").style.display= "unset";
        played=document.getElementById("boros");
    }else if(pickedS.includes("minden") || pickedS.includes("Minden")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("minden").style.display= "unset";
        played=document.getElementById("minden");
    }else if(pickedS.includes("tevagy") || pickedS.includes("Tevagy")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("tevagy").style.display= "unset";
        played=document.getElementById("tevagy");
    }else if(pickedS.includes("kezenfogsz") || pickedS.includes("kézenfogsz") || pickedS.includes("Kézenfogsz")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("kezenfogsz").style.display= "unset";
        played=document.getElementById("kezenfogsz");
    }else if(pickedS.includes("lehetne") || pickedS.includes("Lehetne")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("lehetne").style.display= "unset";
        played=document.getElementById("lehetne");
    }
})
//event.preventDefault()
function back(){
    document.getElementById("picker").style.visibility= "visible";
    played.style.display = "none";
}
//console.log(pickedS);
//document.getElementById('Vissza').addEventListener('click', back());

// audio.currentTime=localStorage.getItem("jelenlegiido");



// music.addEventListener('timeupdate',function(){
//     var currentTimeMs = audio.currentTime*1000;
//     audio.currentTime=localStorage.setItem("jelenlegiido", currentTimeMs);
// },false);