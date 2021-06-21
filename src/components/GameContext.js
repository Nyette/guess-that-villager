import { createContext } from "react";

const GameContext = createContext();

export default GameContext;

export const initialGame = {
  error: null,
  language: "USen",
  selectedOption: null,
  isRunning: false,
  isFetching: false,
  villager: null,
  guess: "",
  guessWasSubmitted: false,
  guessWasCorrect: null,
  music: null,
  score: 0,
  timeLeft: 10
};

export const gameReducer = (game, action) => {
  switch (action.type) {
    case "SHOW_SETTINGS":
      return {
        ...game,
        selectedOption: "Settings"
      };
    case "CHANGE_LANGUAGE":
      return {
        ...game,
        language: action.data
      };
    case "START_GAME":
      return {
        ...game,
        selectedOption: "Play",
        isRunning: true
      };
    case "START_FETCH":
      return {
        ...game,
        isFetching: true,
        villager: null
      };
    case "END_FETCH":
      return {
        ...game,
        isFetching: false,
        villager: action.data
      };
    case "DECREASE_TIME_LEFT":
      return {
        ...game,
        timeLeft: game.timeLeft - 1
      };
    case "CHANGE_GUESS":
      return {
        ...game,
        guess: action.data
      };
    case "SUBMIT_GUESS":
      return {
        ...game,
        guessWasSubmitted: true,
        timeLeft: 0
      };
    case "CHECK_GUESS":
      return {
        ...game,
        guessWasCorrect: action.data
      };
    case "INCREASE_SCORE":
      return {
        ...game,
        score: game.score + 1
      };
    case "START_NEXT_ROUND":
      return {
        ...game,
        guess: "",
        guessWasSubmitted: false,
        guessWasCorrect: null,
        timeLeft: 10
      };
    case "REPLAY":
      return {
        ...initialGame,
        selectedOption: "Play",
        isRunning: true
      };
    case "RETURN_TO_MAIN_MENU":
      return initialGame;
    default:
      return game;
  }
}