// Sample data of 20 movies (replace with real data if needed)
const movies = [
  {
    title: "Avengers: Endgame",
    genre: "action",
    image: "images/avengers.jpg",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    rating: "8.4"
  },
  {
    title: "Black Panther",
    genre: "action",
    image: "images/blackpanther.jpg",
    trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    rating: "7.3"
  },
  {
    title: "Coco",
    genre: "animation",
    image: "images/coco.jpg",
    trailer: "https://www.youtube.com/watch?v=Rvr68u6k5sI",
    rating: "8.4"
  },
  {
    title: "Deadpool",
    genre: "comedy",
    image: "images/deadpool.jpg",
    trailer: "https://www.youtube.com/watch?v=ONHBaC-pfsk",
    rating: "8.0"
  },
  {
    title: "Eternals",
    genre: "action",
    image: "images/eternals.jpg",
    trailer: "https://www.youtube.com/watch?v=x_me3xsvDgk",
    rating: "6.3"
  },
  {
    title: "Frozen II",
    genre: "animation",
    image: "images/frozen2.jpg",
    trailer: "https://www.youtube.com/watch?v=bwzLiQZDw2I",
    rating: "6.8"
  },
  {
    title: "Guardians of the Galaxy",
    genre: "action",
    image: "images/guardians.jpg",
    trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA",
    rating: "8.0"
  },
  {
    title: "Home Alone",
    genre: "comedy",
    image: "images/homealone.jpg",
    trailer: "https://www.youtube.com/watch?v=jEDaVHmw7r4",
    rating: "7.6"
  },
  {
    title: "Inside Out",
    genre: "animation",
    image: "images/insideout.jpg",
    trailer: "https://www.youtube.com/watch?v=seMwpP0yeu4",
    rating: "8.1"
  },
  {
    title: "Joker",
    genre: "drama",
    image: "images/joker.jpg",
    trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
    rating: "8.5"
  },
  {
    title: "Kung Fu Panda",
    genre: "animation",
    image: "images/kungfu.jpg",
    trailer: "https://www.youtube.com/watch?v=_inKs4eeHiI",
    rating: "7.6"
  },
  {
    title: "Luca",
    genre: "animation",
    image: "images/luca.jpg",
    trailer: "https://www.youtube.com/watch?v=mYfJxlgR2jw",
    rating: "7.4"
  },
  {
    title: "Moana",
    genre: "animation",
    image: "images/moana.jpg",
    trailer: "https://www.youtube.com/watch?v=LKFuXETZUsI",
    rating: "7.6"
  },
  {
    title: "No Time to Die",
    genre: "action",
    image: "images/notime.jpg",
    trailer: "https://www.youtube.com/watch?v=BIhNsAtPbPI",
    rating: "7.3"
  },
  {
    title: "Onward",
    genre: "animation",
    image: "images/onward.jpg",
    trailer: "https://www.youtube.com/watch?v=gn5QmllRCn4",
    rating: "7.4"
  },
  {
    title: "Paddington 2",
    genre: "comedy",
    image: "images/paddington2.jpg",
    trailer: "https://www.youtube.com/watch?v=52x5HJ9H8DM",
    rating: "7.8"
  },
  {
    title: "Ratatouille",
    genre: "animation",
    image: "images/ratatouille.jpg",
    trailer: "https://www.youtube.com/watch?v=NgsQ8mVkN8w",
    rating: "8.1"
  },
  {
    title: "Spider-Man: No Way Home",
    genre: "action",
    image: "images/spiderman.jpg",
    trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
    rating: "8.2"
  },
  {
    title: "Toy Story 4",
    genre: "animation",
    image: "images/toystory4.jpg",
    trailer: "https://www.youtube.com/watch?v=wmiIUN-7qhE",
    rating: "7.7"
  },
  {
    title: "Zootopia",
    genre: "animation",
    image: "images/zootopia.jpg",
    trailer: "https://www.youtube.com/watch?v=jWM0ct-OLsM",
    rating: "8.0"
  }
];

let currentPage = 1;
const moviesPerPage = 6;

const movieGrid = document.getElementById("movie-grid");
const searchInput = document.getElementById("searchInput");
const pagination = document.getElementById("pagination");
const themeToggle = document.getElementById("toggle-theme");

function displayMovies(moviesToDisplay) {
  movieGrid.innerHTML = "";

  const start = (currentPage - 1) * moviesPerPage;
  const end = start + moviesPerPage;
  const paginatedMovies = moviesToDisplay.slice(start, end);

  paginatedMovies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p class="rating">⭐ ${movie.rating}</p>
      <a href="${movie.trailer}" target="_blank">Watch Trailer</a>
    `;

    movieGrid.appendChild(movieCard);
  });

  displayPagination(moviesToDisplay.length);
}

function displayPagination(totalMovies) {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.className = "page-btn";
    if (i === currentPage) pageBtn.classList.add("active");
    pageBtn.textContent = i;

    pageBtn.addEventListener("click", () => {
      currentPage = i;
      applyFilters();
    });

    pagination.appendChild(pageBtn);
  }
}

function applyFilters() {
  const searchText = searchInput.value.toLowerCase();
  const activeBtn = document.querySelector(".filter-btn.active");
  const selectedGenre = activeBtn ? activeBtn.dataset.genre : "all";

  const filtered = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchText);
    const matchesGenre =
      selectedGenre === "all" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  displayMovies(filtered);
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentPage = 1;
    applyFilters();
  });
});

searchInput.addEventListener("input", () => {
  currentPage = 1;
  applyFilters();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode")
    ? "Dark Mode"
    : "Light Mode";
});

window.onload = () => {
  applyFilters();
};
