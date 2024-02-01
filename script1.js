let circle = document.getElementById("circle")
let btn1= document.getElementById("btn1")
let btn2= document.getElementById("btn2")
let btn3= document.getElementById("back")
let btn4= document.getElementById("next")
let text= document.getElementById("textid")
let img= document.getElementById("img1")
let img2= document.getElementById("img2")
let daira= document.getElementById("daira")


function green(){
    circle.style.backgroundColor = "#a4ff6b"

    btn1.style.backgroundColor = "#45a20b"
    btn2.style.backgroundColor = "#45a20b"
    btn3.style.backgroundColor = "#45a20b"
    btn4.style.backgroundColor = "#45a20b"

    text.style.color = "#A4FF6B"

    img.style.height = "300px"
    img.style.width = "300px"
    img.style.opacity = "1"
    
    img2.style.height = "100px"
    img2.style.width = "100px"
    img2.style.opacity = "0"
daira.style.transform = "rotate(0deg)"
    
}
function orange(){
    circle.style.backgroundColor = "#ffa601"
    btn1.style.backgroundColor = "#ff760d"
    btn2.style.backgroundColor = "#ffe818"
    btn3.style.backgroundColor = "#ff760d"
    btn4.style.backgroundColor = "#ff760d"
    text.style.color = "#ffa601"
    img.style.height = "100px"
    img.style.width = "100px"
    img.style.opacity = "0"

    img2.style.height = "300px"
    img2.style.width = "300px"
    img2.style.opacity = "1"
daira.style.transform = "rotate(35deg)"
    
}//#c95700
// height: 100px; opacity: 0; width: 100px;


