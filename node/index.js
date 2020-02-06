const os = require('os');
const fs = require('fs');
// console.log(os);

/* console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('Username: ', os.userInfo().username); */

const genderArray = ['F', 'M'];

const femaleFirstName = [
    'Agnieszka',
    'Janina',
    'Marta',
    'Urszula',
    'Antonina',
    'Martyna',
    'Karolina',
    'Bożena',
    'Marcelina',
];

const maleFirstName = [
    'Paweł',
    'Piotr',
    'Arkadiusz',
    'Krzysztof',
    'Antoni',
    'Marek',
    'Sebastian',
    'Henryk',
    'Wojciech',
];

const surname = [
    'Nowak',
    'Wójcik',
    'Mazur',
    'Krawczyk',
    'Woźniak',
    'Kaczmarek',
    'Zając',
    'Król',
    'Wieczorek',
    'Wróbel',
    'Stępień',
];

const gender = genderArray[Math.floor(Math.random() * genderArray.length)];

const data = {
    gender: gender,
    name: gender === 'F'? femaleFirstName[Math.floor(Math.random() * femaleFirstName.length)] : maleFirstName[Math.floor(Math.random() * maleFirstName.length)],
    surname: surname[Math.floor(Math.random() * surname.length)],
    age: Math.floor(Math.random() * (78 - 18 + 1)) + 18,
};

const people = [];
for (let i = 0; i < 20; i++) {
    const data = {
        gender: gender,
        name: gender === 'F'? femaleFirstName[Math.floor(Math.random() * femaleFirstName.length)] : maleFirstName[Math.floor(Math.random() * maleFirstName.length)],
        surname: surname[Math.floor(Math.random() * surname.length)],
        age: Math.floor(Math.random() * (78 - 18 + 1)) + 18,
    };
    people.push(data);
}

fs.writeFile('people.json', JSON.stringify(people), err => {
    if (err) throw err;
    console.log('File was saved');
});

console.log(people);
