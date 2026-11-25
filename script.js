
      const formulario = document.querySelector("#formulario");
      const nome = document.querySelector("#nome");
      const idade = document.querySelector("#idade");
      const turma = document.querySelector("#turma");
      const nota1 = document.querySelector("#nota1");
      const nota2 = document.querySelector("#nota2");
      const alerta = document.querySelector("#alerta");
      const lista = document.querySelector("#lista");
      const total = document.querySelector("#total");
      const reprovados = document.querySelector("#reprovados");
      const aprovados = document.querySelector("#aprovados");


      total = 0
      formulario.addEventListener("submit", (event)=>{      
      event.preventDefault()
    
      const nomeDigitado = nome.value.trim()
      
const valorNota1 = Number(nota1.value) 
const valorNota2 = Number(nota2.value) 
const media = (valorNota1 + valorNota2) / 2

let situacao = ""
if(media => 7){
  situacao = "aprovado"
 
}
else{
  situacao = "reprovado"
}

     const item = document.createElement("li")
    item.textContent = "Nome: " + nome.value + " - Idade: " + idade.value + " - Turma: " + turma.value + " - Nota 1: " + nota1.value + " - Nota 2: " + nota2.value + " - Média: " + media + " - situação: " + situacao;
    lista.appendChild(item)

    





    nome.value = ""
    idade.value = ""
    turma.value = ""
    nota1.value = ""
    nota2.value = ""

