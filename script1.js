function changeContent() {
    // get the element   // for which you want to change the content
    // getElementById("ID")  // getElementsByTag("Tag")
    // getElementsByClassName("ClassName") // querySelector("#id")
    // querySelectorAll(".className")
    let heading1 = document.getElementById("heading1")
    heading1.innerHTML = "javascript is awesome"
//     heading1.align = "center"
//     heading1.style.color = "white"
//     heading1.style.backgroundColor = "gray"
let image = document.getElementById("image")
image.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
}
