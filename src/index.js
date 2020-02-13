import "./assets/styles/style.scss";
import "./index.hbs";
import "./assets/styles/sofiapro-light.otf";

var counter = 0;
var widthCount = 0;
var openSidebar, closeSidebar

document.getElementById("adapt__btn").onclick = countSidebar;

function countSidebar () {
    counter++;
    if (counter%2 == 1) {
        openSidebar = setInterval(moveSidebar, 1);
    } else {
        closeSidebar = setInterval(sidebarBack, 1);
    }
}

function moveSidebar () {
    document.getElementsByTagName("BODY")[0].style.position = "relative";
    widthCount += 4;
    document.getElementById("sidebar").style.width = widthCount + "px";
    document.getElementsByTagName("BODY")[0].style.right = widthCount + "px";
    if (widthCount == 300) {
        clearInterval(openSidebar);
    }
}

function sidebarBack () {
    widthCount -= 4;
    document.getElementsByTagName("BODY")[0].style.right = widthCount + "px";
    document.getElementById("sidebar").style.width = widthCount + "px";
    if (widthCount == 0) {
        clearInterval(closeSidebar);
        document.getElementsByTagName("BODY")[0].style.position = "static";
    }
}