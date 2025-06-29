

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

    const persons = [
        {
            name: 'Anna',
            age: 40,
        },
        {
            name: 'Kirill',
            age: 41,
        },
        {
            name: 'Veronica',
            age: 2,
        },
        {
            name: 'Archi',
            age: 5,
        },
        {
            name: 'Basha Rima',
            age: 62,
        },
    ]

    function checkAge (arr) {
        arr.forEach(person => {
             if (person.age > 30) {
            console.log(person.name)
        } 
        });

    }

    checkAge(persons)

}

module.exports = { uppg8 };