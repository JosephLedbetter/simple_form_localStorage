localStorage.removeItem({});

document.querySelector('form').addEventListener('submit', function(e){
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const age = document.getElementById(age).value;
    const email = document.getElementById(email).value;


    let listOfNames;

    if (localStorage.getItem('listOfNames') === null){
        listOfNames = [];
    } else {
        listOfNames = JSON.parse(localStorage.getItem('listOfNames'));
    }

    listOfNames.push(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}, Email: ${email}`);

    localStorage.setItem('listOfNames', JSON.stringify(listOfNames));


    alert('Full name added successfully')
    console.log(firstName, lastName, age, email);
    e.preventDefault()
})

const listOfNames = JSON.parse(localStorage.getItem('listOfNames'));

listOfNames.forEach(function(lastName, firstName, age, email){
        console.log(lastName, firstName, age, email)
});