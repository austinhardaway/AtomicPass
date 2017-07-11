var electron =  require('electron');

const {app, BrowserWindow} = electron;

const Menu = require('electron').Menu
const MenuItem = require('electron').MenuItem
const settings = require('electron-settings')

const template = [
  {
    label: 'File',
    submenu: [
      {label: 'Change Password',
        click(item, focusedWindow){
          let changePass = new BrowserWindow({width:300, height:100})
          changePass.loadURL('file://'+__dirname+'/views/changePassword.html')
          changePass.webContents.openDevTools();
        }
      },
      {label: 'Add Account'},
      {label: 'Update'}
    ]
  }
]

exports.pass
const fMenu = Menu.buildFromTemplate(template);

let getPsw = () => {
  if(settings.has('psw')){
      pass = settings.get('psw')
  } else {
    runSetup()
  }

}

let runSetup = () =>{
  
}

app.on('ready', () => {

  //win.webContents.openDevTools()
  let login = new BrowserWindow({width:1000, height:300});
  login.loadURL('file://' + __dirname + '/views/login.html');
  login.webContents.openDevTools()
});


exports.successfulLogin = (login) => {
  let win = new BrowserWindow({width:800, height: 600});
  win.loadURL('file://' + __dirname + '/views/index.html');
  win.webContents.openDevTools()
  Menu.setApplicationMenu(fMenu);
  login.close();
}

let changePassword = (newPassword) =>{
  pass=newPassword;
}
