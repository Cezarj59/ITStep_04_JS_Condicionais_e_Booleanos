
const nome = prompt("Informe o nome:");
let idade = prompt("Informe a idade:");
let sexo = prompt("Informe o sexo: 'f' para FEMININO e 'm' para MASCULINO, ou escreva o Genênero.");

// toUperCase() toLowerCase() compara se a letra digitada é maiuscula ou minuscula.
if(sexo == 'm'){
    sexo = 'MASCULINO';
}else if(sexo == 'f'){
    sexo = 'FEMININO';
}

if(idade >= 18){
    idade = 'ADULTO';
}else{
    idade = 'MENOR DE IDADE';
}

document.write("Nome: " + nome + "<br>Idade: " + idade + "<br>Sexo: " + sexo);