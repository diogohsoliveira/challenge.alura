//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Array para armazenar os nomes, lista, resultado e os sorteados

let amigos = [];
let listaAmigos = document.getElementById('listaAmigos'); // ul - unorder list
let resultado = document.getElementById('resultado');    // ul - unorder list
let sorteados = new Set();                              // armazena valores únicos

// Função que lê a entrada em elemento do HTML, verifica se o valor é válido  e chama uma atualização na lista
     
    function adicionarAmigo() {
        let entrada = document.getElementById('amigo');
        let nome = entrada.value.trim();
            if (nome == ''){
                alert('Digite um nome válido!');
            }
                else {
                amigos.push(nome);
                atualizarLista();
                entrada.value = '';
            }
    }

// Função atualiza a lista de nomes 

    function atualizarLista() {
            listaAmigos.innerHTML = '';
            amigos.forEach(amigo => {
                let li = document.createElement('li'); // li - list item
                li.textContent = amigo;
                listaAmigos.appendChild(li);          // appendChild adiciona um item ao final de uma lista de itens
            });
    }

//função sortear o amigo secreto e verificar nomes já sorteados para encerrar o jogo

    function sortearAmigo() {
            if (amigos.length > 0) {
                if (sorteados.size === amigos.length) { //'===' comparador mais rigoroso, verifica o tipo antes de comparar
                    resultado.innerHTML = `<li>Todos os nomes já foram sorteados! Reinicie a página.</li>`;
                    return;
                }
                let sorteado;
                do {
                    sorteado = amigos[Math.floor(Math.random() * amigos.length)]; 
                    // retorna um indice para amigos -> maior inteiro(numero aleatório*tamanho array amigos))
                } while (sorteados.has(sorteado)); //verifica a existêncio do item entre os já sorteados
                sorteados.add(sorteado);
                resultado.innerHTML = `<li>Amigo secreto sorteado: ${sorteado}</li>`;
            } else {
                resultado.innerHTML = `<li>Adicione pelo menos um nome à lista antes de sortear!</li>`;
            }
    }