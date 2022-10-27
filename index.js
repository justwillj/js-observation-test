numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Fisher-Yates shuffle
const shuffleButtons = (array) => {
    let currentIndex = array.length, randomNumber;
    
    while(currentIndex != 0){
        randomNumber = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomNumber]] = [array[randomNumber], array[currentIndex]];
    }
    return array;
}



console.log(shuffleArray(numArray));