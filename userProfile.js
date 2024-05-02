//User profile
//Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

function getUserData() {
    const userData = {};
    userData.username = prompt("Enter your username:");
    userData.age = prompt("Enter your age:");
    userData.favoriteMovies = [];

    for (let i = 0; i < 3; i++) {
        userData.favoriteMovies.push(prompt(`Enter your favorite movie ${i + 1}:`));
    }

    return userData;
}

function displayUserProfile(userData) {
    console.log(`Username: ${userData.username}`);
    console.log(`Age: ${userData.age}`);
    console.log("Favorite Movies:");
    userData.favoriteMovies.forEach(movie => {
        console.log(`- The film ${movie} is one of my favorites`);
    });
}

const user = getUserData();
displayUserProfile(user);
