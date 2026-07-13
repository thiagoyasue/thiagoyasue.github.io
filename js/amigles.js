// Escolhe uma pessoa aleatória
const resposta = pessoas[Math.floor(Math.random() * pessoas.length)];

console.log("Resposta:", resposta);

// Elementos da página
const input = document.getElementById("inputPessoa");
const lista = document.getElementById("listaPessoas");
const botao = document.getElementById("btnChutar");

// Preenche o autocomplete
pessoas.forEach(pessoa => {
    const option = document.createElement("option");
    option.value = pessoa.nome;
    lista.appendChild(option);
});

// Quando clicar no botão
botao.addEventListener("click", chutar);

// Também permite apertar Enter
input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        chutar();
    }
});

function chutar(){

    const nome = input.value.trim();

    if(nome === "")
        return;

    const pessoa = pessoas.find(p =>
        p.nome.toLowerCase() === nome.toLowerCase()
    );

    if(!pessoa){
        alert("Pessoa não encontrada.");
        return;
    }

    console.log("Você escolheu:");
    console.log(pessoa);

    input.value = "";
}