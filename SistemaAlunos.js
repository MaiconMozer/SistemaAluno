let numeroDeAlunos = 10;
let contador = 0;
let nomeDeAluno = ["Marcel", "Franklin", "Rita", "Afranio"]

//EXEMPLO COM FOR
/*for(let contador = 0; contador <= numeroDeAlunos; contador++){
    //console.log(contador)

    if(contador == 0){
        console.log("O numero atual e igual a zero")
    
    }else if (contador % 2 == 0){
        console.log ("O número " + contador + " é par.")
        // Concatenar: Junta em um mesmo texto, diferentes fragmentos de texto e variáveis. Pode ser a divisa com , que mantem o tipo de variavel, nete caso numero, ou +, transforma avariavel em texto. fica uma frase so com as informaçoes adicionadas.
    
    }else{
        console.log (`O número ${contador} é impar.`)
        // Interpolação: Utilia a montagem do texto com crase ao invez de aspas. As váriaveis em ${}.
    }
}*/
// CTRL + ; COMENTA TODAS AS LINHAS SELECIONADASDE UMA VZ SÓ.



//EXEMPLO COM WHILE
/*
while (contador <= numeroDeAlunos){
    if(contador == 0){
        console.log("O numero atual e igual a zero")

    }else if (contador % 2 == 0){ //Porcentagem faz a divisão e considera o resto como parametro.
        console.log ("O número " + contador + " é par.")
        // Concatenar: Junta em um mesmo texto, diferentes fragmentos de texto e variáveis. Pode ser a divisa com , que mantem o tipo de variavel, nete caso numero, ou +, transforma avariavel em texto. fica uma frase so com as informaçoes adicionadas.

    }else{
        console.log (`O número ${contador} é impar.`)
        // Interpolação: Utilia a montagem do texto com crase ao invez de aspas. As váriaveis em ${}.
        }
contador++;
}
*/


//EXEMPLO FOROF
for (let nome of nomeDeAluno) {
    console.log(`Esta pessoa se chama ${nome}`)
}






//ctrl + c Para o loop