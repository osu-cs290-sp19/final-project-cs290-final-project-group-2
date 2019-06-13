allUsers = [];

window.onload = function() {
    var userElemsCollection = document.getElementsByClassName('user-stats');
    for (var i = 0; i < userElemsCollection.length; i++) {
      allUsers.push(parseUserElem(userElemsCollection[i]));
    }

    var searchButton = document.getElementById('navbar-user-button');
    if (searchButton) {
      searchButton.addEventListener('click', doSearchUpdate);
    }

    var searchInput = document.getElementById('navbar-user-input');
    if (searchInput) {
      searchInput.addEventListener('input', doSearchUpdate);
    }
}

function insertNewUser(name, solves) {
    var statsContainer = document.getElementsByClassName("stats-container")[0];
    var userLink = document.createElement("a");
    userLink.setAttribute("href","/stats/" + name);
    statsContainer.appendChild(userLink);

    var userDiv = document.createElement("div");
    userDiv.classList.add("user-stats");
    userLink.appendChild(userDiv);

    var userName = document.createElement("h2");
    userName.textContent = name;
    userDiv.appendChild(userName);

    var userSolves = document.createElement("p");
    userSolves.textContent = solves;
    userDiv.appendChild(userSolves);
}

// Searching functionality adapted from code by Robin Hess
function userMatchesSearchQuery(user, searchQuery) {
  if (!searchQuery) {
    return true;
  }

  searchQuery = searchQuery.trim().toLowerCase();
  return (user.name).toLowerCase().indexOf(searchQuery) >= 0;
}

function doSearchUpdate() {
  var searchQuery = document.getElementById('navbar-user-input').value;

  var userContainer = document.querySelector('.stats-container');
  if (userContainer) {
    while (userContainer.lastChild) {
      userContainer.removeChild(userContainer.lastChild);
    }
  }

  allUsers.forEach(function (user) {
    if (userMatchesSearchQuery(user, searchQuery)) {
      insertNewUser(user.name, user.solves);
    }
  });
}

function parseUserElem(userElem) {
  var user = {};

  var userTextElem = userElem.querySelector('h2');
  user.name = userTextElem.textContent.trim();

  var solvesElem = userElem.querySelector('p');
  user.solves = solvesElem.textContent.trim();

  return user;
}
