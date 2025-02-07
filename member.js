function skillsMember(){
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();
    var member = member.replace(/\s+/g, '');
    console.log(member);
    if (member == "jamesbryant"){
        window.location = "jamesbryant.html";
    }
    else if (member == "danielbryant"){
        window.location = "danielbryant.html";
    }
    else if (member == "davidbryant"){
        window.location = "davidbryant.html";
    }
    else if (member == "johnbryant"){
        window.location = "johnbryant.html";
    }
    else if (member == "josephbryant"){
        window.location = "josephbryant.html";
    }
    else if (member == "michaelbryant"){
        window.location = "michaelbryant.html";
    }
    else if (member == "robertbryant"){
        window.location = "robertbryant.html";
    }
    else if (member == "williambryant"){
        window.location = "williambryant.html";
    }
    else if (member == "williamdbryant"){
        window.location = "williamdbryant.html";
    }
    else if (member == "williammbryant"){
        window.location = "williammbryant.html";
    }
    else if (member == "williamrbryant"){
        window.location = "williamrbryant.html";
    }
    else if (member == "williamsbryant"){
        window.location = "williamsbryant.html";
    }
    else {
        alert("Invalid Member Name");
    }
}