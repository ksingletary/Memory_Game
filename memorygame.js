const gameContainer = document.getElementById("game");

  const COLORS = [
      {
        name: '1',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc9cz_lyHWA-JwslMNUl0LtdtXY7kJzKWO3ss2hWuAYvvUi26VmUOa6dnukYbrEE0LxTOhdwY_lAgob1yHsTzzqNe1Bz6YEINkQo_3SfBkY_H3rIju4=w1920-h1080"
      },
      {
        name: '2',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc8AnzlPBbJ3e1e1p7At-f9D1XN4PpgYg-KQQgazcJoCR1VQ81PfcB1lsZSdlEaraLhOEwPJt7P5C1UQuPX2akN1LljspYP8SWMjmsqwVJRV6GeIZf0=w1920-h1080"
      },
      {
        name: '3',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc856_KI31a-H_T_KR74SPuo3CJw5t8TMYRrIpeOM200Z0TrPcvjrDKjw0KfmO5ipMgF5DhPA9RZixfZalUF9frAO1sh85XS7VPrDlJJl0oYF3F2fMw=w1920-h1080"
      },
      {
        name: '4',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc_uH0o4eP-6Esv3v3nrilCmXonR3p17FPY4FJB6TxPSWU0mk8DN7cSWnWgFdYTX43GDicqSkEXP5e30vyj2ACe7CAPCfIP9RtxUZVGuH1b64Ywchm0=w1920-h1080"
      },
      {
        name: '5',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc-HjJGLzX91BZORL8CuNEA-0EpiomM0B8cHFvpqGR7JhPmOnQ9fZz1JAwHZC4GzMQfQvG34Yf3vcSuHiHRL5u2LcF4fGorTS-1_zeibHxDAk7ZjFmQ=w1920-h1080"
      },
      {
        name: '6',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc9H8EHjDR3OSbc7mJOJ-fMVuEjqCEiXEJszSTjc1UE_gsy2p6Wsm-Z7mfS9R8EpBU4e4QFhvZvjbG8bLUUV8oDXZWdbDSd4yfHd0VXKI00MMnMCayM=w1920-h1080"
      },
      {
        name: '7',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc-HV4t0e0szaRYoOC2wGpRlJQSKMhkPqims4EurcJJ8GpdKihwUzHVHqhhzFh6hGL_kEjbrSTnSvBy0d-YM4FgNa2pVi8bJrdMTrQB8TaRD7PDrBrg=w1920-h1080"
      },
      {
        name: '8',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc8FodWXuClY5CO-r03V09cPIFlG8DMLCYDy7y-wrwo8kVOLXA8jEAgA79B7lUTkVjcOyWBbbZ3SsgS7ufKpgU8T2wr5zoaHufmvySBm8CFv7fIp0fE=w1920-h1080"
      },
      {
        name: '1',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc9cz_lyHWA-JwslMNUl0LtdtXY7kJzKWO3ss2hWuAYvvUi26VmUOa6dnukYbrEE0LxTOhdwY_lAgob1yHsTzzqNe1Bz6YEINkQo_3SfBkY_H3rIju4=w1920-h1080"
      },
      {
        name: '2',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc8AnzlPBbJ3e1e1p7At-f9D1XN4PpgYg-KQQgazcJoCR1VQ81PfcB1lsZSdlEaraLhOEwPJt7P5C1UQuPX2akN1LljspYP8SWMjmsqwVJRV6GeIZf0=w1920-h1080"
      },
      {
        name: '3',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc856_KI31a-H_T_KR74SPuo3CJw5t8TMYRrIpeOM200Z0TrPcvjrDKjw0KfmO5ipMgF5DhPA9RZixfZalUF9frAO1sh85XS7VPrDlJJl0oYF3F2fMw=w1920-h1080"
      },
      {
        name: '4',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc_uH0o4eP-6Esv3v3nrilCmXonR3p17FPY4FJB6TxPSWU0mk8DN7cSWnWgFdYTX43GDicqSkEXP5e30vyj2ACe7CAPCfIP9RtxUZVGuH1b64Ywchm0=w1920-h1080"
      },
      {
        name: '5',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc-HjJGLzX91BZORL8CuNEA-0EpiomM0B8cHFvpqGR7JhPmOnQ9fZz1JAwHZC4GzMQfQvG34Yf3vcSuHiHRL5u2LcF4fGorTS-1_zeibHxDAk7ZjFmQ=w1920-h1080"
      },
      {
        name: '6',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc9H8EHjDR3OSbc7mJOJ-fMVuEjqCEiXEJszSTjc1UE_gsy2p6Wsm-Z7mfS9R8EpBU4e4QFhvZvjbG8bLUUV8oDXZWdbDSd4yfHd0VXKI00MMnMCayM=w1920-h1080"
      },
      {
        name: '7',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc-HV4t0e0szaRYoOC2wGpRlJQSKMhkPqims4EurcJJ8GpdKihwUzHVHqhhzFh6hGL_kEjbrSTnSvBy0d-YM4FgNa2pVi8bJrdMTrQB8TaRD7PDrBrg=w1920-h1080"
      },
      {
        name: '8',
        img:"https://lh3.googleusercontent.com/pw/AIL4fc8FodWXuClY5CO-r03V09cPIFlG8DMLCYDy7y-wrwo8kVOLXA8jEAgA79B7lUTkVjcOyWBbbZ3SsgS7ufKpgU8T2wr5zoaHufmvySBm8CFv7fIp0fE=w1920-h1080"
      }
  ]

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

shuffle(COLORS);

const result = document.getElementById('score')

const placeholder = "https://lh3.googleusercontent.com/pw/AIL4fc_5WxFQzyzMi9U2sFk5el787IWEfINhbr1EvW408N9mRGvqAXP5AcZ5SQ7DGuwF-uqfLTdNNcO4x7xZLxyj3nsyyJ9Jw_GrZPrfvVNAdzxzthDbVys=w1920-h1080"
const blank = "https://lh3.googleusercontent.com/pw/AIL4fc_IJfRGGm1dyNlHHHQBxqVEWAlut1CzD92XAblztVOe__CvupbgQH72BV45SpCL2uoZp06K7p3MGwLOLVocOj_u8T2-xtH-68Ee40U2xYhmV2sQEIk=w1920-h1080"

let cardsClicked = []
let cardsClickedId = []
let cardsMatched = []

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors() {
    for (let i = 0; i < COLORS.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', placeholder);
        card.setAttribute('data-id', i);
        card.addEventListener('click', handleCardClick);
        gameContainer.appendChild(card);
    }
}

// TODO: Implement this function!
function handleCardClick(event) {
    let cardId = this.getAttribute('data-id');

    cardsClicked.push(COLORS[cardId].name)
    cardsClickedId.push(cardId);

    this.setAttribute('src', COLORS[cardId].img);
    if (cardsClicked.length === 2){
        setTimeout(checkForMatch, 500)
    }
    
    console.log("you just clicked", event.target);
}


function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const firstCard = cardsClickedId[0];
    const secondCard = cardsClickedId[1];

    if (firstCard === secondCard) {
        cards[firstCard].setAttribute('src', placeholder)
        cards[secondCard].setAttribute('src', placeholder)
        alert('You have clicked the same image!')
    }
    else if (cardsClicked[0] === cardsClicked[1]) {
        cards[firstCard].setAttribute('src', blank)
        cards[secondCard].setAttribute('src', blank)
        cards[firstCard].removeEventListener('click', handleCardClick)
        cards[secondCard].removeEventListener('click', handleCardClick)
        cardsMatched.push(cardsClicked)
    } 
    else {
        setTimeout(() => {
            cards[firstCard].setAttribute('src', placeholder)
            cards[secondCard].setAttribute('src', placeholder)
        }, 300)
    }
    cardsClicked = []
    cardsClickedId = []
    result.textContent = cardsMatched.length
    if  (cardsMatched.length === COLORS.length/2) {
        alert('Congratulations! You found them all!');
    }
}
// when the DOM loads

createDivsForColors();

let myBtn = document.querySelector('button');
myBtn.addEventListener('click', function(e){
    window.location.reload();
})


