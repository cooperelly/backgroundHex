clickBtn = document.querySelector("button");
clickBtn.addEventListener("click", getHexColor);

//Creating an array with all the possible HEX Elements.
hexElements = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'f'];
function getHexColor() {
  //Setting the variable # after which looped elements will be added
  let hexColor = "#";
  //Looping 6 times through 6 random elements from an array. 
  for (let i = 0; i < 6; i++) {
    //Getting a random element(From array Hex Elements at position of [randomnumber]) and +=(adding) it each of the 6 times to the variable hexColor
    hexColor += hexElements[Math.floor(Math.random() * hexElements.length)];
    //Changin the background color and h1 value
    document.body.style.backgroundColor = hexColor;
    document.querySelector('h1').innerHTML = `This HEX Color ID is ${hexColor}`;
  };
};

