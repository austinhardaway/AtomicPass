

const remote = require('electron').remote
const main = remote.require('./main.js')

let oldPsw = document.createElement('input')
oldPsw.type = 'password'
oldPsw.placeholder = 'Enter Old Password'
document.body.appendChild(oldPsw)
document.body.appendChild(document.createElement('br'))

let newPsw = document.createElement('input')
newPsw.type = 'password'
newPsw.placeholder = 'Enter New Password'
document.body.appendChild(newPsw)
document.body.appendChild(document.createElement('br'))

let change = document.createElement('button')
change.textContent = 'Change Password'
document.body.appendChild(change)

change.addEventListener('click', () =>{
  console.log(main.pass)
  pass = main.pass

  if(oldPsw.value == main.pass){
    console.log('Change Succesful')
    main.pass = newPsw.value
  } else {
     console.log("Incorrect Password")
  }
})
