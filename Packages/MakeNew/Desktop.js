for(FileObject in FileSystem.getDirContent("/home/"+Kernel.User["Name"]+"/desktop")){
    FileSystem.delete("/home/"+Kernel.User["Name"]+"/desktop"+FileSystem.getDirContent("/home/"+Kernel.User["Name"]+"/desktop")[FileObject].name);
}
Shell.ReloadDesktop();