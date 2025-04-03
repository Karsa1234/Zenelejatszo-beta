let pickedS = null;
let forms=document.getElementById("forms");
let musictitle=document.getElementById("musictitle");
let played;

forms.addEventListener("submit", (event) => {
    pickedS=document.getElementById("pickedSong").value;
    localStorage.setItem("utolso", pickedS);
    event.preventDefault();
    pickedS=document.getElementById("pickedSong").value;
    if(pickedS.includes("bor")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("bor").style.display= "unset";
        played=document.getElementById("bor");
    }else if(pickedS.includes("pálinka")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("palinka").style.display= "unset";
        played=document.getElementById("palinka");
    }else if(pickedS.includes("grund")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("grund").style.display= "unset";
        played=document.getElementById("grund");
    }else if(pickedS.includes("belehalok")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("belehalok").style.display= "unset";
        played=document.getElementById("belehalok");
    }else if(pickedS.includes("afrika")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("afrika").style.display= "unset";
        played=document.getElementById("afika");
    }else if(pickedS.includes("requiem")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("requiem").style.display= "unset";
        played=document.getElementById("requiem");
    }else if(pickedS.includes("ut")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("ut").style.display= "unset";
        played=document.getElementById("ut");
    }else if(pickedS.includes("kezenfogsz")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("kezenfogsz").style.display= "unset";
        played=document.getElementById("kezenfogsz");
    }else if(pickedS.includes("csokkiraly")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("csokkiraly").style.display= "unset";
        played=document.getElementById("csokkiraly");
    }else if(pickedS.includes("rakpart")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("rakpart").style.display= "unset";
        played=document.getElementById("rakpart");
    }else if(pickedS.includes("buli")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("buli").style.display= "unset";
        played=document.getElementById("buli");
    }else if(pickedS.includes("korkozepen")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("korkozepen").style.display= "unset";
        played=document.getElementById("korkozepen");
    }else if(pickedS.includes("szen")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("szen").style.display= "unset";
        played=document.getElementById("szen");
    }else if(pickedS.includes("minden")){
        document.getElementById("picker").style.visibility= "hidden";
        document.getElementById("minden").style.display= "unset";
        played=document.getElementById("minden");
    }
});
//event.preventDefault()
function back(){
    document.getElementById("picker").style.visibility= "visible";
    played.style.visibility= "hidden";
}
//console.log(pickedS);
//document.getElementById('Vissza').addEventListener('click', back());


if(pickedS.includes("bor")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("bor").style.display= "unset";
    played=document.getElementById("bor");
}else if(pickedS.includes("pálinka")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("palinka").style.display= "unset";
    played=document.getElementById("palinka");
}else if(pickedS.includes("grund")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("grund").style.display= "unset";
    played=document.getElementById("grund");
}else if(pickedS.includes("belehalok")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("belehalok").style.display= "unset";
    played=document.getElementById("belehalok");
}else if(pickedS.includes("afrika")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("afrika").style.display= "unset";
    played=document.getElementById("afika");
}else if(pickedS.includes("requiem")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("requiem").style.display= "unset";
    played=document.getElementById("requiem");
}else if(pickedS.includes("ut")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("ut").style.display= "unset";
    played=document.getElementById("ut");
}else if(pickedS.includes("kezenfogsz")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("kezenfogsz").style.display= "unset";
    played=document.getElementById("kezenfogsz");
}else if(pickedS.includes("csokkiraly")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("csokkiraly").style.display= "unset";
    played=document.getElementById("csokkiraly");
}else if(pickedS.includes("rakpart")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("rakpart").style.display= "unset";
    played=document.getElementById("rakpart");
}else if(pickedS.includes("buli")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("buli").style.display= "unset";
    played=document.getElementById("buli");
}else if(pickedS.includes("korkozepen")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("korkozepen").style.display= "unset";
    played=document.getElementById("korkozepen");
}else if(pickedS.includes("szen")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("szen").style.display= "unset";
    played=document.getElementById("szen");
}else if(pickedS.includes("minden")){
    document.getElementById("picker").style.visibility= "hidden";
    document.getElementById("minden").style.display= "unset";
    played=document.getElementById("minden");
}

// audio.currentTime=localStorage.getItem("jelenlegiido");



// music.addEventListener('timeupdate',function(){
//     var currentTimeMs = audio.currentTime*1000;
//     audio.currentTime=localStorage.setItem("jelenlegiido", currentTimeMs);
// },false);