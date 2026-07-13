// --------------------
// Variáveis
// --------------------

const resposta = pessoas[Math.floor(Math.random() * pessoas.length)];

const input = document.getElementById("inputPessoa");
//const lista = document.getElementById("listaPessoas");
const sugestoes = document.getElementById("sugestoes");
const botao = document.getElementById("btnChutar");
const tabela = document.querySelector("#tabelaResultados tbody");

const chutes = [];

console.log("Resposta:", resposta);

// --------------------
// Inicialização
// --------------------

//inicializar();

/*
function inicializar() {

    pessoas
        .sort((a, b) => a.nome.localeCompare(b.nome))
        .forEach(pessoa => {

            const option = document.createElement("option");
            option.value = pessoa.nome;
            lista.appendChild(option);

        });

}*/

// --------------------
// Eventos
// --------------------

botao.addEventListener("click", chutar);

input.addEventListener("keydown", e => {

    if (e.key === "Enter")
        chutar();

});

input.addEventListener("input", atualizarSugestoes);

function atualizarSugestoes(){

    const texto = input.value.toLowerCase().trim();

    sugestoes.innerHTML = "";

    if(texto === ""){

        sugestoes.style.display = "none";
        return;

    }

    const encontrados = pessoas.filter(p =>
        p.nome.toLowerCase().includes(texto)
    );

    if(encontrados.length === 0){

        sugestoes.style.display = "none";
        return;

    }

    sugestoes.style.display = "block";

    encontrados.forEach(pessoa => {

        const div = document.createElement("div");

        div.className = "sugestao";

        div.textContent = pessoa.nome;

        div.addEventListener("click", () => {

            input.value = pessoa.nome;

            sugestoes.innerHTML = "";
            sugestoes.style.display = "none";

            input.focus();

        });

        sugestoes.appendChild(div);

    });

}

// --------------------
// Chutar
// --------------------

function chutar() {

    const nome = input.value.trim();

    if (nome === "")
        return;

    const pessoa = pessoas.find(p =>
        p.nome.toLowerCase() === nome.toLowerCase()
    );

    if (!pessoa) {

        alert("Pessoa não encontrada.");
        return;

    }

    const resultado = comparar(pessoa, resposta);
    console.log(resultado);

    if (chutes.includes(pessoa.nome)) {

        alert("Você já tentou essa pessoa.");
        return;

    }

    chutes.push(pessoa.nome);

    adicionarLinha(pessoa, resultado);

    input.value = "";
    input.focus();

    if (pessoa.nome === resposta.nome) {

    alert("🎉 Parabéns! Você acertou!");

    input.disabled = true;
    botao.disabled = true;

    return;
    }

}

// --------------------
// Interface
// --------------------

function adicionarCelula(tr, texto, cor){

    const td = document.createElement("td");

    td.textContent = texto;

    td.classList.add(cor);

    tr.appendChild(td);

}

function adicionarLinha(pessoa, resultado) {

    const tr = document.createElement("tr");

    adicionarCelula(tr, pessoa.nome, resultado.nome);
    adicionarCelula(tr, pessoa.sexo, resultado.sexo);
    adicionarCelula(tr, pessoa.local, resultado.local);
    adicionarCelula(tr, pessoa.etnia, resultado.etnia);

    if (Array.isArray(pessoa.grupo))
        adicionarCelula(tr, pessoa.grupo.join(", "), resultado.grupo);
    else
        adicionarCelula(tr, pessoa.grupo, resultado.grupo);

    tabela.appendChild(tr);

}

function comparar(chute, resposta){

    const resultado = {};

    for(const atributo in resposta){

        resultado[atributo] =
            compararAtributo(
                chute[atributo],
                resposta[atributo]
            );

    }

    return resultado;

}

function compararAtributo(chute, resposta){

    // Arrays (grupo, formação, etc.)
    if(Array.isArray(resposta)){

        const iguais = chute.filter(item =>
            resposta.includes(item)
        );

        if(iguais.length === 0)
            return "vermelho";

        if(
            iguais.length === resposta.length &&
            chute.length === resposta.length
        )
            return "verde";

        return "amarelo";
    }

    // Texto
    if(chute === resposta)
        return "verde";

    return "vermelho";

}