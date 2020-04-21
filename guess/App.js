// Author: Lauren Lofton
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import StartGameScreen from './screens/StartGameScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return ( 
    <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setDataLoaded(true)} 
      onError={(err) => console.log(err)} />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setRandomNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setRandomNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (randomNumber && guessRounds <= 0) {
    content =  <GameScreen randomNumber={randomNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} randomNumber={randomNumber} onRestart={configureNewGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess My Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
  
});