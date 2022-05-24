import React from "react";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

function QuoteCard({ quote }) {
  const { id, content, author, votes } = quote;
  const dispatch = useDispatch();
  function handleClick(event) {
    switch (true) {
      case event.target.name === "remove":
        dispatch(removeQuote(id));
        break;
      case event.target.name === "upvote":
        dispatch(upvoteQuote(id));
        break;
      case event.target.name === "downvote":
        dispatch(downvoteQuote(id));
        break;
    }
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{content}</p>
            <footer>
              - author <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-primary"
              name="upvote"
              onClick={handleClick}
            >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              name="downvote"
              onClick={handleClick}
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
              name="remove"
              onClick={handleClick}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {votes}</div>
        </div>
      </div>
    </div>
  );
}
export default QuoteCard;
