const YoutubeVideo = () => {
  return (
    <div className="sm:my-5 mx-5 my-7 sm:mx-24">
      <div className="sm:w-auto sm:h-96">
        <iframe
          src="https://www.youtube.com/embed/c-6Dm22bvA8"
          title="YouTube video player"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVideo;
