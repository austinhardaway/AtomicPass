var electron =  require('electron');

const {app, BrowserWindow} = electron;

app.on('ready', () => {

  //win.webContents.openDevTools()
  let login = new BrowserWindow({width:1000, height:300});
  login.loadURL('file://' + __dirname + '/login.html');
  login.webContents.openDevTools()
});


exports.successfulLogin = (login) => {
  let win = new BrowserWindow({width:800, height: 600});
  win.loadURL('file://' + __dirname + '/index.html');
  login.close();
}
