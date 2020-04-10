document.querySelector('form').addEventListener('submit', function(e){
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;

    let listOfNames;

    if (localStorage.getItem('listOfNames') === null){
        listOfNames = [];
    } else {
        listOfNames = JSON.parse(localStorage.getItem('listOfNames'));
    }

    listOfNames.push(`${firstName} ${lastName}`);

    localStorage.setItem('listOfNames', JSON.stringify(listOfNames));


    alert('Full name added successfully')
    console.log(firstName, lastName);
    e.preventDefault()
})

const listOfNames = JSON.parse(localStorage.getItem('listOfNames'));

listOfNames.forEach(function(lastName, firstName){
        console.log(lastName, firstName)
});