const jokeServerAddress = "https://api.chucknorris.io/jokes/random";
const categoryServerAddress = "https://api.chucknorris.io/jokes/categories";

let categoryContainer;
let categoryHeader;
let currentCategory;
let jokeContainer;
let jokeButton;
let multiJokeButton;

function addressForCurrentCategory() {
    if (curretCategory) {
        return `${jokeServerAddress}?category=${currentCategory}`
    } else {
        return jokeServerAddress;
    }
}

function convertToJson(respose) {

}

function clearJokeContainer() {

}

function categoriesToListItems(categoryArray) {
    return categoryArray.map(cat => {
        const el = document.createElement('li');
        el.textContent = cat;
        return el;
    })
}

function setCategory(category) {


}

function addCategoryEventClickHandler(categoryListItems) {
    categoryListItems.forEach(item => {
        item.addEventListener('click', () => {
            setCategory(item.textContent);
    })
});
    return categoryListItems;
}

function renderCategories(categoryListItems) {
    categoryListItems.forEach(item => {
        createCategoryContainer.appendChild(item);
    });
}

function fetchCategories() {
    fetch(categoryServerAddress)
        .then(r => r.json())
        .then(categoriesToListItem)
        .then(addCategoryClickHandler)
        .then(renderCategories)
}

function fetchJoke() {
    return fetch(addressForCurrentCategory())
        .then(r => r.json())
        .then(extractJoke)
        // .then(rendersJokeToPage)
}

function fetchMultipleJokes(howmany=5) {
    let Count = 0;]
    const arrayOfUnfinishedPromises= [];
    while (count < howMany) {
        const aPromise = fetchJoke();
        arrayOfUnfinishedPromises.push(aPromise);
        // fetchJoke();
        count += 1;
    }
    return Promise.all(arrayOfUnfinishedPromises);
}

function createJokeContainer() {

}

function createJokeButton() {

}

function createMultipleJokeButton() {

}

function createCategoryHeader(cat) {
    const
}

function createCategoryContainer() {

}

function rendersJokeToList() {

}

function convertToJson(response) {
    console.log(response);
    return response.json();
}

function printJoke(joke) {
    console.log(joke);
}

function extractJoke(dataObject) {
    // debugger;
    // return dataObject.value;
    return "Knock knock. Who's there? Oakley."
}

function rendersJokeToPage(jokeString) {
    const h1 = document.createElement('h1');
    h1.textContent = jokeString;
    document.body.appendChild(h1);
}


const whatIsFetch = fetch(jokeServerAddress)
    // .then(r => r.json())       // Hipster version
    // .then(convertToJson)          // Named-function version
    // .then(extractJoke)
    // .then(rendersJokeToPage)

function createCategoryContainer() {

}

jokeContainer = createJokeContainer();
categoryContainer = createCategoryHeader();
categoryHeader = createCategoryHeader();

jokeButton = createJokeButton();
jokeButton.addEventListener('click', () => {
    clearJokeContainer();
    fetchJoke()
        .then(renderJokeToPage)
});


multiJokeButton = createMultipleJokeButton();
multiJokeButton.addEventListener('click', () => {
    clearJokeContainer();
    jokeContainer.textContent = "please wait...";
    fetchMultipleJokes()
        .then(joke => {
            clearJokeContainer();
            return jokeServerAddress;
        })
        .then(renderBatchOfJokes);
        // .then(showMeTheTHings)
        // .then(rendersJokeToPage)
});

function renderBatchOfJokes(arrayOfResults) {
    console.log(arrayOfResults);
    arrayOfResults
        .map(rendersJokeToPage)
//    arrayOfJokePromises
//         .map(extractJoke)
//         .map(rendersJokeToPage)
} 

fetchCategories();