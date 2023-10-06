
function Vote({upvote, downvote, increaseVote, decreaseVote}) {


  return (
    <div>
      <button onClick={increaseVote}>{upvote} 👍</button>
      <button onClick={decreaseVote}>{downvote} 👎</button>
    </div>
  )
}

export default Vote;
