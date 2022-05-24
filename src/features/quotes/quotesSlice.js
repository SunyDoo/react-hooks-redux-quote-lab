// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  };
};

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id,
  };
};

export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id,
  };
};

export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id,
  };
};

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (true) {
    case action.type === "quotes/add":
      return [...state, action.payload];
    case action.type === "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);
    case action.type === "quotes/upvote":
      return state.map((quote) => {
        if (quote.id !== action.payload) return quote;
        return { ...quote, votes: quote.votes + 1 };
      });
    case action.type === "quotes/downvote":
      return state.map((quote) => {
        if (quote.id !== action.payload) return quote;
        if (quote.votes === 0) return quote;
        return { ...quote, votes: quote.votes - 1 };
      });
    default:
      return state;
  }
}
