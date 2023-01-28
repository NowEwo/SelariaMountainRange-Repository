document.body.innerHTML = "";
function ShowText(Text){
    var TextElement = document.createElement("p");
    TextElement.innerHTML = Text;
    TextElement.setAttribute("style" , "font-family:'VGA';color:white;");
    document.appendChild(TextElement)
}
ShowText("Test !")