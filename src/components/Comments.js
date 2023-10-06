import React, { useState } from "react";

function Comments({comments}) {
  const [commentStatus, setCommentStatus] = useState(false);
  const commentContent =
      <span>
      <h3>{comments.length} Comments</h3>
      <p><b>{comments[0].user}</b></p>
        <p>{comments[0].comment}</p>
      <p><b>{comments[1].user}</b></p>
      <p>{comments[1].comment}</p>

      </span>

  const toggleComments = () => {
    setCommentStatus((status) => !status)
  }

  return (
    <div>
      <button onClick={toggleComments}>{commentStatus ? "Hide Comments" : "Show Comments"}</button>
      {commentStatus ? commentContent : null}
    </div>
  )
}

export default Comments;
