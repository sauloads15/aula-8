// let paragrafo = document.getElementsByName('nomeQualquer');
// paragrafo[0].innerText = 'test1'
// paragrafo[1].innerText = 'test2'
// let paragrafo= document.getElementsByClassName('minhaClass')
// paragrafo[0].innerText= 'escreveno no html'
// let paragrafos= document.getElementById('texto');
// let h1= document.querySelector('h1');
// let paragrafo= document.querySelector('#paragrafo');
// let texto = document.querySelector('.texto');
// let paragrafos= document.querySelectorAll('.minhaClasse')
// function getValue() {
//     console.log(document.getElementById('myInput').value);
// }

function valorInput() {
    const soma = parseFloat(document.getElementById('input1').value) +
                 parseFloat(document.getElementById('input2').value);
                 document.getElementById('resultado').textContent = `Resultado: ${soma}`;
}
