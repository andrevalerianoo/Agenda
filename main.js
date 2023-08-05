const form = document.getElementById('formulario');
const inputnomeContato = document.getElementById('nomeContato');
const inputnomeTelefone = document.getElementById('nomeTelefone');
let linhas ='';

alert('Bem Vindo!');

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha();

    function adicionalinha(){
        const inputnomeContato = document.getElementById('nomeContato');
        const inputnomeTelefone = document.getElementById('nomeTelefone');


        let linha = '<tr>';
        linha += `<td> ${inputnomeContato.value}</td>`;
        linha += `<td> ${inputnomeTelefone.value}</td>`;
        linha += '</tr>'

        linhas += linha;

        const corpotabela = document.querySelector('tbody');
        corpotabela.innerHTML = linhas;


        inputnomeContato.value = '';
        inputnomeTelefone.value = '';
    }
    
    
    

    
});
