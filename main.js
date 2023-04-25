function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play(); 
    
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 



for (let contador = 0; contador < listaDeTeclas.length; contador++) { 

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; 
    const idAudio = `#som_${instrumento}`; 
    

    tecla.onclick = function() { 
        tocaSom(idAudio);   
    }

    tecla.onkeydown = function(evento) {
        if (evento.code === 'Space'|| evento.code === 'Enter') {
            tecla.classList.add('ativa'); 
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}

/* ANOTAÇÕES:
1. É uma convenção usar o nome 'main' no arquivo principal de js.
2. A funcionalidade play() permite reprodução do áudio.
3. querySelectorAll seleciona todos os elementos com determinado seletor e cria um array.
4. Função tocaSom precisa de um parâmetro, para que possa ser atribuído o som de cada botão. 
5. Criação de lista de teclas permite manipulação dos botões
6. função anônima, não recebe um nome. Permite passar parâmetro para tocaSom
7. atributo classList permite acessar determinada classe numa lista de classes.
8. uso de uma template string para atribuir um texto dinâmico.
9. onkeydown/onkeyup - indica se a tecla foi pressionada ou solta. 
10. É preciso especificar qual a tecla pressionada (uso de estrutura condicional).
11. funcionalidade add permite adicionar classe na lista
*/
