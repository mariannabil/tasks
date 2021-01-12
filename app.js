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


// const yargs = require('yargs')

//  yargs.commend({
//    command: 'adduser',
//   describe: 'add New User',
//    builder:{
//      name:{
//                  demandOption:true,
//              describe:'title content',
//             type: 'string'
//        },
//        age:{
//            demandOption:true,
//            describe:'title content',
//             type: 'string' 
//        },
//        account:{
//            demandOption:true,
//            describe:'title content',
//             type: 'number'
//         }
// //      },
//         handler: function(argv) {
//             let users =

          
       
 
const yargs =require('yargs')
  
readFileData = function(){
     data= Json.parse(fs.readFileSync('data.json').toString());
     if(data.toString().length==0) console.log('err')
     else{return data}
 };
    
 data = readFileData(index)
 exsitnum=data.findindex(num => num=argv.accountnumber)
 
if(exsitnum) {
    console.log("this Number is exist before")
  }
 else{        
   let customer = { name: argv.name, balance: argv.balance, accountnumber: argv.accountnumber }
     addCustomer(customer)    
}

//    data = readFileData()
//          accountnumbers = []
//         data.forEach(element => {
//            accountnumbers.push(element.accountnumber)
//         });
//          existnum=accountnumbers.includes(argv.accountnumber)
        
//       if(!existnum) {
//              let customer = { name: argv.name, balance: argv.balance, accountnumber: argv.accountnumber }
//             addCustomer(customer) 
//        }
//       else{        
//           console.log("this Number is exist before") 
//         }
       showAllData = function(){
           data = readFileData()
           if(data.length>0) console.log(data);
           else console.log("no notes found")
        }
       addNewData = function(customer) {
          data = readFileData() 
          data.push(customer)
          fs.writeFileSync('data.json', JSON.stringify(data))
        }
       showSingleNote = function(single){
            data = readFileData()
           result = data.find(element=>{
                return element.single == single
            })
            if(!result) console.log("not found")
           else console.log(result)
       }
 yargs.command({
   command:'addCustomer',
 describe:'add New Customer',
    bulder:{
   name:{
  demandOption:true,
  describe:'title content',
               type: 'string'  
    },
     balance:{
          demandOption:true,
            describe:'title content',
                 type: 'string'  
           },
    account:{
                  demandOption:true,
              describe:'title content',
          type: 'number'
    } 
      }, 
     handler: function(argv){
        let user = {
             name:argv.name,
             balance:argv.balance,
             account:argv.account,
         }
         console.log(user) 
         
        }
    
    
    })
    yargs.command({
       
            command:'showAllNotes',
            describe:'show all stored notes',
            handler: function(){
                showAllData()
            }
         
    })
    yargs.command({
        command:"addNewNote",
        describe:"add new note to our file",
        builder:{
            name:{ type:'string', demandOption:true},
            balance:{ type:'string'},
            account:{type:'number'},
        },
        handler: function(argv){
            let note = {name: argv.name, balance:argv.balance,account:argv.account}
            addNewData(note)
        }
    })
    yargs.argv
      
    
        // yargs.command({
        //     command:'showAllData',
        //     describe:'show all stored notes',
        //     handler: function(){
        //         showAllData()
        //     }
        // })
        // yargs.command({
        //     command:"addNewNote",
        //     describe:"add new note to our file",
        //     builder:{
        //         name:{ type:'string', demandOption:true},
        //         balance:{ type:'string'}

            
        //     account:{ type:'number'}
        //     },
        //     handler: function(argv){
        //         let note = {name: argv.name, balance:argv.balance, account:argv.account}
        //         addNewData(note)
            
  
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


// const express = require('express')
// const path = require('path')
// const app = express()
// const port =3001
// const publicDir = path.join(__dirname,'public')
// app.use(express.static(publicDir))
// app.get('',(req,res)=>{
//     res.send('hello')
// })
// app.listen(port,()=>{
//     console.log('server on localhost:3000')
// })

