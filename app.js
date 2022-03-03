// Gioco Palindromo
{
    // INPUT E OUTPUT HTML
    let parola = document.getElementById('parola')
    let result = document.querySelector('.result')
    let generate = document.querySelector('.btn-secondary')
    generate.addEventListener('click', generating)
    function ReverseString(str) {
        return str.split('').reverse().join('')
    }
    function generating() {
        reset();
        if (parola.value == ReverseString(parola.value)) {
            result.append('Questa parola è palindroma')
        } else {
            result.append('Questa parola non è palindroma')
        }
    }
    function reset() {
        result.innerHTML = ''
    }
}
// Dadi
{
    
}

        

