const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname,"public")))

class HardwareEngine{

gerarDados(){
return{
cpu: Math.floor(Math.random()*101),
ram: (Math.random()*16).toFixed(2),
temperatura: Math.floor(Math.random()*61)+30
}
}

}

app.get("/api/status",(req,res)=>{

const hardware = new HardwareEngine()

res.json(hardware.gerarDados())

})

app.listen(3000,()=>{
console.log("Servidor rodando em http://localhost:3000")
})