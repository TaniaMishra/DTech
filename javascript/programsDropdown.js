// Program 1 Dropdown
document.getElementById("program1").addEventListener("click", handleClick1);
function handleClick1() {
    let info = document.getElementById("program1-info");
    if (info.style.display != "flex") {
        info.style.display = "flex";
        document.getElementById("arrow1").src = "../images/upArrowWhite.png";
    }
    else {
        info.style.display = "none";
        document.getElementById("arrow1").src = "../images/downArrowWhite.png";
    }
}

// Program 2 Dropdown
document.getElementById("program2").addEventListener("click", handleClick2);
function handleClick2() {
    let info = document.getElementById("program2-info");
    if (info.style.display != "flex") {
        info.style.display = "flex";
        document.getElementById("arrow2").src = "../images/upArrowWhite.png";
    }
    else {
        info.style.display = "none";
        document.getElementById("arrow2").src = "../images/downArrowWhite.png";
    }
}

// Program 3 Dropdown
document.getElementById("program3").addEventListener("click", handleClick3);
function handleClick3() {
    let info = document.getElementById("program3-info");
    if (info.style.display != "flex") {
        info.style.display = "flex";
        document.getElementById("arrow3").src = "../images/upArrowWhite.png";
    }
    else {
        info.style.display = "none";
        document.getElementById("arrow3").src = "../images/downArrowWhite.png";
    }
}