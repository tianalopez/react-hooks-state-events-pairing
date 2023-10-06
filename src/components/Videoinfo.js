
function Videoinfo({title, views, createdAt, embedUrl}) {
  return(
    <div>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h1>{title}</h1>
      <h4>{views} Views | Uploaded {createdAt}</h4>
    </div>
  )
}

export default Videoinfo;
