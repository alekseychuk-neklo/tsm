let fruits =[
    {name: 'banana', count: 10},
    {name: 'orange', count: 10},
    {name: 'apple', count: 10},
    {name: 'lemon', count: 10},
    {name: 'mandarin', count: 10},
];

function getArgument(arr, attr) {
    return arr.map(function (element) {
        return element[attr];
    })
}
let tmp = getArgument(fruits, 'name');
console.log(tmp);
let userBooks =[
    {name: 'Anna', books: ['Harry Potter', 'War and Peace']},
    {name: 'Anna2', books: ['Harry Potter2', 'War and Peace2']},
    {name: 'Anna3', books: ['Harry Potter3', 'War and Peace3']},
    {name: 'Anna4', books: ['Harry Potter2', 'War and Peace4']},
    {name: 'Anna5', books: ['Harry Potter5', 'War and Peace5']},
    ];
function getUserBooks(userBooksArr){
    return userBooksArr.reduce(function (acc, item) {
        return [...acc, ...item.books].reduce(function (unique, item) {
            return unique.includes(item)?unique: [...unique, item]
        }, []);
    }, []);
}

books = getUserBooks(userBooks);
console.log(books);