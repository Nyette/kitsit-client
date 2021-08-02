export const initialGame = {
  error: null,
  running: false,
  paused: false,
  fetching: false,
  cat: null,
};

const gameReducer = (game, action) => {
  switch (action.type) {
    case "CATCH_ERROR":
      return {
        ...game,
        error: action.data,
      };
    case "PLAY":
      return {
        ...game,
        running: true,
      };
    case "START_FETCH":
      return {
        ...game,
        fetching: true,
      };
    case "END_FETCH":
      return {
        ...game,
        fetching: false,
        cat: action.data,
      };
    case "PAUSE":
      return {
        ...game,
        paused: true,
      };
    case "RESUME":
      return {
        ...game,
        paused: false,
      };
    case "SAVE":
      return {
        ...game,
        cat: action.data,
      };
    case "EXIT":
      return initialGame;
    default:
      return game;
  }
};

export default gameReducer;
