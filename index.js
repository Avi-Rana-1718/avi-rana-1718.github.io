
if(localStorage.themeId==0) {
    document.body.style.backgroundColor="#202124";
    document.body.style.color="#fff";
    document.getElementById("theme").innerHTML = `<i class="fas fa-sun"></i>`;
    document.getElementById("head").style.backgroundColor = "#303136";

    for(let i=0;i<document.getElementsByClassName("item").length;i++) {
        document.getElementsByClassName("item")[i].style.backgroundColor = "#303136";
    }

} else {
    document.body.style.backgroundColor="#f9f9fa";
    document.body.style.color="#3a4145";
    document.getElementById("theme").innerHTML = `<i class="fas fa-moon"></i>`;
    for(let i=0;i<document.getElementsByClassName("item").length;i++) {
        document.getElementsByClassName("item")[i].style.backgroundColor = "#f9f9fa";
    }
}

function changeTheme() {
    if(localStorage.themeId==0) {
        document.body.style.backgroundColor="#f9f9fa";
        document.body.style.color="#3a4145";
        localStorage.setItem("themeId", "1");
        document.getElementById("theme").innerHTML = `<i class="fas fa-moon"></i>`;
        document.getElementById("head").style.backgroundColor = "#f9f9fa";
        for(let i=0;i<document.getElementsByClassName("item").length;i++) {
            document.getElementsByClassName("item")[i].style.backgroundColor = "#f9f9fa";
        }
    } else {
        document.body.style.backgroundColor="#202124";
        document.body.style.color="#fff";
        document.getElementById("theme").innerHTML = `<i class="fas fa-sun"></i>`;
        document.getElementById("head").style.backgroundColor = "#303136";
        localStorage.setItem("themeId", "0");
        for(let i=0;i<document.getElementsByClassName("item").length;i++) {
            document.getElementsByClassName("item")[i].style.backgroundColor = "#303136";
        }
    }
}
console.log(localStorage.themeId);