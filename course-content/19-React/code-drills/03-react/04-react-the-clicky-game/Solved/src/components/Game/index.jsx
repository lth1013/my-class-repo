import { useState } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import img1 from "../../assets/images/beth.png";
import img2 from "../../assets/images/birdperson.png";
import img3 from "../../assets/images/evilmorty.png";
import img4 from "../../assets/images/gianthead.png";
import img5 from "../../assets/images/goldenford.png";
import img6 from "../../assets/images/jerry.png";
import img7 from "../../assets/images/jessica.png";
import img8 from "../../assets/images/meeseeks.png";
import img9 from "../../assets/images/morty.png";
import img10 from "../../assets/images/mr.png";
import img11 from "../../assets/images/rick.png";
import img12 from "../../assets/images/summer.png";

const Game = () => {

  const [gameState, setGameState ] = useState( {
    data: [
      {
        "id": 1,
        "image": img1,
        "clicked": false
      },
      {
        "id": 2,
        "image": img2,
        "clicked": false
      },
      {
        "id": 3,
        "image": img3,
        "clicked": false
      },
      {
        "id": 4,
        "image": img4,
        "clicked": false
      },
      {
        "id": 5,
        "image": img5,
        "clicked": false
      },
      {
        "id": 6,
        "image": img6,
        "clicked": false
      },
      {
        "id": 7,
        "image": img7,
        "clicked": false
      },
      {
        "id": 8,
        "image": img8,
        "clicked": false
      },
      {
        "id": 9,
        "image": img9,
        "clicked": false
      },
      {
        "id": 10,
        "image": img10,
        "clicked": false
      },
      {
        "id": 11,
        "image": img11,
        "clicked": false
      },
      {
        "id": 12,
        "image": img12,
        "clicked": false
      }
    ],
    score: 0,
    topScore: 0
  });

  const  componentDidMount =()=> {
   setGameState({  data: shuffleData(gameState.data) });
  }

  const handleCorrectGuess = newData => {
    const { topScore, score } = gameState;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    setGameState({
      data: shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  const handleIncorrectGuess = data => {
    setGameState({
      data: resetData(data),
      score: 0
    });
  };

  const resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return shuffleData(resetData);
  };

  const shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  const handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = gameState.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? handleCorrectGuess(newData)
      : handleIncorrectGuess(newData);
  };
    return (
      <div>
        <Nav score={gameState.score} topScore={gameState.topScore} />
        <Header />
        <Container>
          {gameState.data.map(item => (
            <ClickItem
              key={item.id}
              id={item.id}
              shake={gameState.score && gameState.topScore}
              handleClick={handleItemClick}
              image={item.image}
            />
          ))}
        </Container>
        <Footer />
      </div>
    );

}

export default Game;
