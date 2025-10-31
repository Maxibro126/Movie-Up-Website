
let movies = [
    {id: 1, title: "Demon Slayer: Infinity Castle", year: 2025, categories: ["Animation", "Action", "Adventure"],image_url: "images/movie1.jpg",description:"The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins."},
    {id: 2, title: "Weapons", year: 2025, categories: ["Horror", "Thriller", "Drama", "Mystery"],image_url: "images/movie2.jpg",description:"When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance."},
    {id: 3, title: "Cars", year: 2006, categories: ["Animation","Action", "Comedy","Adventure"],image_url: "images/movie3.jpg",description:"On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn't everything in life."},
    {id: 4, title: "Avengers: Infinity War", year: 2018, categories:["Action","Superhero"],image_url: "images/movie4.jpg",description:"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."},
    {id: 5, title: "Teenage Mutant Ninja Turtles: Mutant Mayhem", year: 2023, categories:["Animation","Action","Adventure","Superhero"],image_url: "images/movie5.jpg",description:"The Turtle brothers work to earn the love of New York City while facing down an army of mutants."},
    {id: 6, title: "John Wick", year: 2014, categories:["Action","Drama"],image_url: "images/movie6.jpg",description:"John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge."},
    {id: 7, title: "Coraline", year: 2009, categories:["Animation","Horror"],image_url: "images/movie7.jpg",description:"Wandering her rambling old house in her boring new town, a young girl discovers a hidden door to a strangely idealized version of her life that seems too good to be true."},
    {id: 8, title: "The Hunger Games", year: 2012, categories:["Action","Adventure"],image_url: "images/movie8.jpg",description:"Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death."},
    {id: 9, title: "The Maze Runner", year: 2014, categories:["Action","Adventure","Thriller"],image_url: "images/movie9.jpg",description:"Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow runners for a shot at escape."},
    {id: 10, title: "Warfare", year: 2025, categories:["Action","Drama"],image_url: "images/movie10.jpg",description:"A platoon of Navy SEALs embark on a dangerous mission in Ramadi, Iraq, with the chaos and brotherhood of war retold through their memories of the event."},
    {id: 11, title: "The Dark Knight", year: 2008, categories:["Action","Thriller","Superhero","Drama"],image_url: "images/movie11.jpg",description:"When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness."},
    {id: 12, title: "The Batman", year: 2022, categories:["Action","Mystery","Thriller","Superhero","Drama"],image_url: "images/movie12.jpg",description:"When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the city's hidden corruption and question his family's involvement."},
    {id: 13, title: "Spider-Man: Into The Spider-Verse", year: 2018, categories:["Animation","Action","Adventure","Superhero"],image_url: "images/movie13.jpg",description:"Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities."},
    {id: 14, title: "KPop Demon Hunters", year: 2025, categories:["Animation","Action","Adventure","Comedy"], image_url: "images/movie14.jpg",description:"When K-pop superstars Rumi, Mira and Zoey aren't selling out stadiums or topping the Billboard charts, they're moonlighting as demon hunters to protect their fans from ever-present supernatural danger."},
    {id: 15, title: "Pixels", year: 2015, categories:["Adventure","Comedy"], image_url: "images/movies15.jpg",description:"Aliens find a time capsule with footage from a video game of the 1980s and consider it a declaration of war. A special team then tries to thwart the aliens who attack Earth as video game characters."},
];

//Make a list of categorys for the films
let categories = [
    {id:1, category: "Animation"},
    {id:2, category: "Action"},
    {id:3, category: "Adventure"},
    {id:4, category: "Horror"},
    {id:5, category: "Comedy"},
    {id:6, category: "Drama"},
    {id:7, category: "Superhero"},
    {id: 8, category: "Thriller"},
    {id:9, category: "Mystery"},
];

function displayMovies(movieList) {
    let allMovies = "";

    for (let i=0; i < movieList.length; i++){
        let movie = `
        <div class="movie-card" onclick="openMoviedetail(${movieList[i].id})">
            <h3>${movieList[i].title}</h3>
            <p>Year: ${movieList[i].year}</p>
            <p>Categories: ${movieList[i].categories.join(",")}</p>
            <img src="${movieList[i].image_url}" alt ="${movieList[i].title}">
            <p>${movieList[i].description}</p>
        </div>
        `;
    
    
        allMovies += movie;
    }
    return allMovies;
}

document.getElementById("movieList").innerHTML = displayMovies(movies);



function openMoviedetail(selectedMovieID){
    localStorage.setItem("selectedMovieID",selectedMovieID);
    window.open("movie-review.html", "_self");

}