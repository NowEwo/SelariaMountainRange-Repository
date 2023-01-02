FileSystem.delete("/home");
FileSystem.createDir("/" , "home");
Kernel.Process("ssc boot User Selaria");
Kernel.Reload();