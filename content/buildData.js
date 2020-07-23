const fs = require('fs')

const books = [
    {
        id: '1',
        name: "Brave Not Perfect",
        price: '11,80',
        imageSrc: '/images/BraveNotPerfect.jpeg',
        author: 'Reshma Saujani',
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: '2',
        name: "The Vanishing Half",
        price: '14,37',
        imageSrc: '/images/TheVanishingHalf.jpeg',
        author: 'Brit Bennett',
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: '3',
        name: "The Evening And The Morning",
        price: '20,60',
        imageSrc: '/images/TheEveningAndTheMorning.jpeg',
        author: 'Ken Follett ',
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: '4',
        name: "Girl, Woman, Other",
        price: '10,00',
        imageSrc: '/images/GirlWomanOther.jpeg',
        author: 'Bernardine Evaristo',
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

]


fs.writeFileSync('./content/books.json', JSON.stringify(books));
try {
  fs.mkdirSync('./content/books');
} catch (e) {
  if (e.code !== 'EEXIST') throw e;
}
books.forEach(book => {
  fs.writeFileSync(
    `./content/books/${book.id}.json`,
    JSON.stringify(book),
  );
});