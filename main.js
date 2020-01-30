const {app, BrowserWindow} = require('electron');


function createWindow(){
    //create the browser window
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    });

    //load index.html
    win.loadFile('index.html')

    //open devtools
    win.webContents.openDevTools();
    
    //emitted when window is closed
    win.on('closed', ()=>{
        win = null;
    })

}

app.on('ready', createWindow);

app.on('windows-all-closed',()=>{
    //to close app completely on macos 
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate',()=>{
        //recreate app window from dock icon clicked
        if(win === null){
            createWindow();
        }
});