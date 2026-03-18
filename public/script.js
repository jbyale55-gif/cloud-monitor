class ComponenteMonitor{

constructor(id){
this.elemento = document.getElementById(id)
}

}

class CardHardware extends ComponenteMonitor{

atualizarInterface(valor,tipo){

this.elemento.innerText = valor

const card = this.elemento.parentElement

if(tipo==="cpu" && parseInt(valor)>90){
card.classList.add("alerta-critico")
}
else if(tipo==="temp" && parseInt(valor)>75){
card.classList.add("alerta-critico")
}
else{
card.classList.remove("alerta-critico")
}

}

}

const cpu = new CardHardware("cpu")
const ram = new CardHardware("ram")
const temp = new CardHardware("temp")

async function atualizar(){

const resposta = await fetch("/api/status")
const dados = await resposta.json()

cpu.atualizarInterface(dados.cpu+"%","cpu")
ram.atualizarInterface(dados.ram+"GB","ram")
temp.atualizarInterface(dados.temperatura+"°C","temp")

}

setInterval(atualizar,2000)