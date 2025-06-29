

function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10

    function numbers (number1, number2) {
        return number1 + number2
    }

    return numbers(5, 10)
}

module.exports = { uppg7 };