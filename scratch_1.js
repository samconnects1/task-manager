const valid = require('validator')

let email ='samconnects@gmail.com'

const validate = (value) =>{
    if(value==='samconnects@gmail'){
        return console.log('EMail already in use')
    }
    return console.log('All good')
}

validate(email)