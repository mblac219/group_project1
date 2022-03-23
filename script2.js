// Global Variables
let sbmtBttn = document.getElementById('bookBttn')
var bookBox= document.getElementById("book-title");
var drinkTitle= document.getElementById("cocktail-name");
let welcomeUser = document.getElementById('welcomeUser')



//Push new user welcome message into title
function welcomeNewUser(){
  
  var nameOfUser = JSON.parse(localStorage.getItem("user"));
  welcomeUser.textContent = `Hello ${nameOfUser.userName}!`;
  welcomeUser.setAttribute('style', 'color:white');

 
}

 welcomeNewUser()

// Function for random book generator
function getApi() {
  
  const selectInput = document.getElementById("format-input").value;
  // Tells user they need to choose a genre
  if (!selectInput) {
    
    alert('You need to pick Genre!')
    
  }   else {
    
  }

    // calls Book Api
  var requestUrl = 'http://openlibrary.org/search.json?subject='+ selectInput;
  console.log('requestUrl',requestUrl)
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // generates random book
    var randomBookSelected = data.docs[(Math.floor(Math.random() * data.docs.length))];
    var randomBooksTitle = randomBookSelected.title;
    // displays chosen book
    var listItem = document.createElement('li');
    listItem.textContent = randomBooksTitle;
    listItem.setAttribute('style', 'color:white');
    console.log(listItem)
    bookBox.appendChild(listItem)
    
    // saves book to local storage
    localStorage.setItem("notPotato", JSON.stringify(randomBooksTitle))
    
    getApi2()
      });
    }
    
    // function for random Cocktail
    function getApi2(){
  const cocktailInput = document.getElementById("cocktail-input").value

   // Tells user they need to choose a type of cocktail
  if (!cocktailInput) {
    
    alert('You need to pick Cocktail Base!')
    
  }   


  // calls cocktail Api
  fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + cocktailInput)
  .then(function(choice){
    return choice.json();
  })
  .then( function(data){
   
    // generates random cocktail
    var randomDrinkSelected = data.drinks[(Math.floor(Math.random() * data.drinks.length))];
    var randomDrinkName = randomDrinkSelected.strDrink;

    //puts list into "your cocktail is"
    let drinkList = document.createElement('li');
    drinkList.textContent = randomDrinkName
    drinkList.setAttribute('style', 'color:white');
    drinkTitle.appendChild(drinkList)
    // saves cocktail storage
    localStorage.setItem("notPotato2", JSON.stringify(randomDrinkName))
  
    storage()
    
    })
  }
  // resets for new selection
function reset(){
    bookBox.innerText = ''
    drinkTitle.innerText = ''
  }
  
  sbmtBttn.addEventListener('click', function(event){
      event.preventDefault()
      
      reset()
      
      getApi()
      
    })
    // shows user previous choices
    function storage(){
      
      const displayHistory =document.getElementById('resultHistory')
      let bListHistory =  document.createElement('li')
      let dListHistory = document.createElement('li')
     
      var bookHistory= JSON.parse(localStorage.getItem("notPotato"));
      bListHistory.textContent =`Book: ${bookHistory}` ;
      bListHistory.setAttribute('style', 'color:white');
      
      var drinkHistory = JSON.parse(localStorage.getItem("notPotato2"));
      dListHistory.textContent = `Drink: ${drinkHistory}`;
      dListHistory.setAttribute('style', 'color:white');
      
      displayHistory.appendChild(bListHistory)
      displayHistory.appendChild(dListHistory)


    }