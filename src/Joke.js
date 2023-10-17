import React from "react";
import useCounter from "./Hooks/useCounter";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

// function Joke({ id, vote, votes, text }) {
  function Joke({text, id}) {
    const [ votes, like, unLike ] = useCounter();
    
    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={like}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={unLike}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
}

export default Joke;
