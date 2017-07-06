
const remote = require('electron').remote;
const main = remote.require('./main.js');

let psw = document.createElement('input');
psw.type = 'text';
psw.placeholder = 'Enter Password';
psw.name = 'psw';
psw.id = 'psw';
document.body.appendChild(psw);
document.body.appendChild(document.createElement('br'));
let button = document.createElement('button');
button.textContent = 'Login';
button.type = 'submit';
document.body.appendChild(button);

let pass = "password";
button.addEventListener('click', ()=> {
  if(pass == psw.value){
    main.successfulLogin(remote.getCurrentWindow());
  }
});
