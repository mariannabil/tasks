// let customers = [{name:'mrmr', balance:5000}],[{name:'nail', balance:2000}];
// fs.writeFileSync('customer.json', Json.srtingify({name:'mrmr', balance:5000})

// let addcustomer = function(){
//     customers.push({name:'nail', balance:2000})
// }

// let showcustomers = function(){
//     return customers
// }
// let addbalance = function(amount){
//    customers.forEach(amount=>)
// }
// console.log(addbalance())
// console.log(showcustomers())


//const yargs = require('yargs')

// yargs.commend({
//     command: 'adduser',
 //  describe: 'add New User',
 //   builder:{
//         name:{
  //               demandOption:true,
//             describe:'title content',
//             type: 'string'
//         },
//         age:{
//             demandOption:true,
//             describe:'title content',
//             type: 'string' 
//         },
//         account:{
//             demandOption:true,
//             describe:'title content',
//             type: 'number'
//         }
//     },
//         handler: function(argv) {
//             let users =
//              {
//                 name : argv.name,
//                 age : argv.age,
//               account : argv.account,
               
//             }
        
//             console.log(users) 
        

 //yargs.argv

// const fs = require('fs')


// yargs.command({
//     command:'addCustomer',
//     describe:'add New Customer',
//     bulder:{
//         name:{
//             demandOption:true,
//           describe:'title content',
//              type: 'string'  
//         },
//         balance:{
//             demandOption:true,
//              describe:'title content',
//                   type: 'string'  
//         },
//       account:{
//         demandOption:true,
//                    describe:'title content',
//               type: 'number' 
//       }, 
//       handler: function(){
        
//         showAllData()
//         }
//     }

// })
// yargs.argv
// const fs = require('fs')
// const yargs = require('yargs')        


//         data = readFileData()
//         accountnumbers = []
//         data.forEach(element => {
//             accountnumbers.push(element.accountnumber)
//         });
//         existnum=accountnumbers.find(num => num=argv.accountnumber)
        
//         if(existnum) {
//             console.log("this Number is exist before")
//         }
//         else{        
//             let customer = { name: argv.name, balance: argv.balance, accountnumber: argv.accountnumber }
//             addCustomer(customer) 
//             fs.writefileSync('data.json', Json.stringify(accountnumber))   
//         }
//     }
// })
// yargs.argv


const express = require('express')
const path = require('path')
const app = express()
const port =3001
const publicDir = path.join(__dirname,'public')
app.use(express.static(publicDir))
app.get('',(req,res)=>{
    res.send('hello')
})
app.listen(port,()=>{
    console.log('server on localhost:3000')
})