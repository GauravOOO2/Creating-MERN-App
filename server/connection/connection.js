const mongoose = require('mongoose')

 const connect = async()=>{
    try{
        await mongoose.connect('mongodb+srv://gauravking918:12345@cluster0.a6fcxkt.mongodb.net/',{dbName:'MernNewApp'})
    .then(()=>{
        console.log('Connected ')
    })
    }catch(error){
        console.error("nahh no database nigga cuz", error.message )
    }
 }

connect()
module.exports = mongoose