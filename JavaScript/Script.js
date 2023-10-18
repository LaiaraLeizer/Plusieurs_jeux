let key = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7a9f276c83msh3ec3bc3303ae41ep106a2cjsn8f9adc729f67",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

let recebeElement = document.querySelector("#recebe");
let conteudo = document.querySelector(".conteudo");
let busca = document.querySelector("input[type='search']");

async function getallgames() {
  let response = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    key
  );
  let games = await response.json();

  let container = document.querySelector(".conteudos");
  let inputSearch = document.querySelector("input[type='search']");

  let items = [];

  inputSearch.oninput = () => {
    container.innerHTML = "";
    items
      .filter((item) =>
        item.title.toLowerCase().includes(inputSearch.value.toLowerCase())
      )
      .forEach((item) => addHTML(item));
  };

  function addHTML(user) {
    let section = document.createElement("section");
    let title = document.createElement("h1");
    let thumbnail = document.createElement("img");
    let short_description = document.createElement("h2");
    let publisher = document.createElement("p");
    let platform = document.createElement("p");
    let genre = document.createElement("p");
    let game_url = document.createElement("p");
    let developer = document.createElement("p");
    let release_date = document.createElement("h6");

    title.innerHTML = user.title;
    thumbnail.src = user.thumbnail;
    short_description.innerHTML = user.short_description;
    publisher.innerHTML = user.publisher;
    platform.innerHTML = user.platform;
    genre.innerHTML = user.genre;
    game_url.innerHTML = user.game_url;
    developer.innerHTML = user.developer;
    release_date.innerHTML = user.release_date;

    section.appendChild(title);
    section.appendChild(thumbnail);
    section.appendChild(short_description);
    section.appendChild(developer);
    section.appendChild(publisher);
    section.appendChild(genre);
    section.appendChild(platform);
    section.appendChild(game_url);
    section.appendChild(release_date);

    container.append(section);
  }

  games.forEach((user) => {
    addHTML(user);
    items.push(user);
  });
}

getallgames();

// let key = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '7a9f276c83msh3ec3bc3303ae41ep106a2cjsn8f9adc729f67',
//     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//   }
// };

// let games = document.querySelector(".jogos");
// let recebe = document.querySelector("#recebe");
// let search = document.querySelector("input[type='search']");
// let conteudo = document.querySelector(".conteudo");//pega apenas um dos jogos do "conteudos"

// async function pegueosjogos()
// {
//   let api = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games');
//   let response = await api.json;

// }
