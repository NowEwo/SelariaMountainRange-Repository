var Terminal = Shell.CreateWindow({"Name" : "Terminal" , "NoMenu" : ""});
Terminal.g.style.width = "357px";
Terminal.g.style.height = "calc(100%-91px)";
Terminal.g.style.left = "41px";
Terminal.g.style.top = "41px";
Terminal.g.style.backgroundColor = "transparent";
Terminal.g.style.backgropFilter = "none" ;
Terminal.g.querySelector(".wb-body").style.top = "0px";
Terminal.g.removeChild(Terminal.g.querySelector(".wb-header"));