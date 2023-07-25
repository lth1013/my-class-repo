//for..of is a method, introduced in ES2015, for iterating over "iterable collections".
//Finally, another really useful case for for..of is in iterating of NodeLists. 
//When we query the document for a group of elements, what we get returned is a NodeList, 
//not an Array. 

// another option
const songs = document.querySelectorAll("ul > li");
console.log("Song li", songs);
for (const song of songs) { //Nodelist
  song.classList.add("green");
}

// const songs = document.querySelector("#songs");
// console.log(songs.children);
// for (const song of songs.children) { //
//   song.classList.add("green");
// }

// const songs = document.querySelectorAll("#songs *");
// console.log("Song li", songs);
// for (const song of songs) { //Nodelist
//   song.classList.add("green");
// }

// const songs = document.querySelector("#songs").children;
// console.log("Song li", songs);
// for (const song of songs) { //Nodelist
//   song.classList.add("green");
// }

// another option
// const songs = document.querySelectorAll("ul > li");
// for(var i = 0; i < songs.length; i ++){
//  songs[i].classList.add("green");
// }


// another option
// const songs = document.querySelectorAll("ul > li");
// console.log(songs);
// songs.forEach(function(song){
//  song.classList.add("green");
// })



// another option
// const songsDiv = document.querySelectorAll("#songs");
// console.log(typeof songsDiv);
// songsDiv[0].classList.add("green");

// another option
// const songsDiv = document.querySelector("#songs");
// console.log(songsDiv);
// songsDiv.classList.add("green");


// another option
// const songsDiv = document.querySelectorAll("#songs");
// console.log("songsDiv", songsDiv)
// for (const song of songsDiv) { // map obj
//   song.classList.add("green");
// }

//===================

// const object = {name: "Asher", age: 2, nickName: "Beelzebub"};
// const keyArr = Object.keys(object);
// const valueArr = Object.values(object);
// console.log(keyArr );
// // ['name', 'age', 'nickName']
// for(let i = 0; i < keyArr.length; i++){
//   console.log(object[keyArr[i]]);
// }

// for (const key in object) {
//   console.log(`${key}: ${object[key]}`);
// }


//Side Note

var kidNames = ["Farley", "Asher", "Sage", "Snail Snail"];

function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    document.getElementById("buttons-view").textContent = "";
    // Looping through the array of Kids
    for (var i = 0; i < kidNames.length; i++) {
        var button = document.createElement("button");
        button.setAttribute("data-name", kidNames[i])
        button.textContent = kidNames[i];
        document.getElementById("buttons-view").appendChild(button);
    }
  }

  document.getElementById("buttons-view").addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.target.getAttribute("data-name"));
    console.log(this)
  });

  renderButtons()