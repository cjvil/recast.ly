var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => <VideoListEntry video={video} click={props.click} key={video.id.videoId} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

// in App.js, for every video in our call for Video List, we want to add a video to child divs

//inside video-list class, run mao

// <div><h5><em>videoListEntry</em> view goes here</h5></div>