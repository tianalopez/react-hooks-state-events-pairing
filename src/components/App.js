import video from "../data/video.js";
import React, {useState} from "react";
import Videoinfo from "./Videoinfo.js";
import Vote from "./Vote.js";
import Comments from "./Comments.js";

function App() {
  const [videoData, setVideoData] = useState(video);
  const [upVote, setUpVote] = useState(video.upvotes)
  const [downVote, setDownVote] = useState(video.downvotes);


  const onIncreaseVote = () => {
    setUpVote((vote) => vote + 1)
  }

  const onDecreaseVote = () => {
    setDownVote((vote) => vote + 1)
  }


  return (
    <div className="App">
      <Videoinfo {...videoData} />
      <Vote upvote={upVote} downvote={downVote} increaseVote={onIncreaseVote} decreaseVote={onDecreaseVote}/>
      <Comments {...videoData}/>
    </div>
  );
}

export default App;
