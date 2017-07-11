
const remote = require('electron').remote;
const main = remote.require('./main.js');

let psw = document.createElement('input');
psw.type = 'password';
psw.placeholder = 'Enter Password';
psw.name = 'psw';
psw.id = 'psw';
document.body.appendChild(psw);
document.body.appendChild(document.createElement('br'));
let button = document.createElement('button');
button.textContent = 'Login';
button.type = 'submit';
document.body.appendChild(button);



button.addEventListener('click', ()=> {
  if(main.pass == psw.value){
    main.successfulLogin(remote.getCurrentWindow());
  }
});
