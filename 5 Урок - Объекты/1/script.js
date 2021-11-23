var numberOfFilms = +prompt('Сколько фильмов уже посмотрели?');

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for(i = 0; i < 2; i++) {
    var a = prompt('Название фильма: ');
    var b = +prompt('Оцените фильм: ');

    if(a != null && b != null && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
        console.log('done!');
    } else {
        i--;
        console.log('error');
    }
}

if(personalMovieDB.count < 10) {
    console.log('Мало фильмов просмотрено.');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Любитель');
} else {
    console.log('Киноман');
}

var writeYourGenres = () => {
    for(i = 0; i < 3; i++) {
        var genre = prompt('Ваш любимый жанр: ');
        personalMovieDB.genres.push(genre);
    }
}

var showMyDB = (privat) => {
    if(!privat) {
        console.log(personalMovieDB);
    }
}

writeYourGenres();
showMyDB(personalMovieDB.privat);


