export const Regex ={
    stringOnly:{
        regex:`[A-Za-z]+[A-Za-z ]*`,
        message:(name)=>{
            return `${name} is not valid`
        }
    },
    notNullString:{
        regex:`[a-zA-Z0-9]+.*`,
        message:(name)=>{
            return `${name} is required`
        }
    },
    phoneNo:{
        regex:`^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$`,
        message:(name)=>{
            return `${name} is not valid`
        }
    },
    wholeNumberWithZero:{
        regex:`[0-9]*`,
        message:(name)=>{
            return `${name} is not valid`
        }
    }
}