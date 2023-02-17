var Style = document.createElement("style");
Style.innerHTML = `
body{
  background-color : #282828 ;
  height : 100% ;
  padding : 0px ;
  margin : 0px ;
  width : 100% ;
}
#TopBar{
  background-color : #1474CA ;
  position : absolute ;
  height : 51px ;
  width : 100% ;
  top : 0px ;
}
#TopBar p{
  position : absolute ;
  left : 9px ;
}
#ActionsButtons{
  position : absolute ;
  width : 100% ;
  top : 85px ;
}
#ActionsButtons button , #ActionsButtons input{
  background-color : transparent ;
  text-align : center ;
  color : white ;
  height : 51px ;
  border : none ;
  width : 100% ;
}
#ActionsButtons button:hover , #ActionsButtons input:hover{
  background-color : #252525 ;
}
`;
document.head.appendChild(Style);

document.body.innerHTML = `
<div id="TopBar">
  <p style="font-family:'metropolis';color:white;">Custom Selaria Recovery v0.1</p>
</div>
<div id="ActionsButtons">
  <button onclick="localStorage.clear();">Reset Local Storage</button>
  <button onclick="FlashJSON();">Flash JSON file</button>
  <button onclick="Firmware.LoadBIOS();">Load default BIOS</button>
  <button onclick="Firmware.document.location.href = Firmware.document.location.href;">Reboot</button>
</div>
`;

function FlashJSON(){
  var JSONFILEPATH = prompt("Enter the JSON file path");
  Flash(JSONFILEPATH);
}

var FileSystem = Firmware.RecoveryFileSystem;

function Flash(PathArgument){
  var Content = FileSystem.getFileContent(PathArgument).result;
  Content = JSON.parse(Content);
  for(Entry in Content.Files){
      var Path = Content.Files[Entry].Content
      Content.Files[Entry].Content = FileSystem.getFileContent(Path).result;
  }
  Content = JSON.stringify(Content)
  Firmware.Socket.emit("Flash" , Content);
  alert("Flashed !");
}

var OpenFilesManager = () => {
  var Window = new Winbox("Files manager" , {
    "url" : "System/Softwares/FilesManager/App.html"
  });
}