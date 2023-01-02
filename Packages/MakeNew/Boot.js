for(FileObject in FileSystem.getDirContent("/boot")){
    FileSystem.delete("/boot/"+FileSystem.getDirContent("/boot")[FileObject].name);
}