import React from 'react';
import Hero from '../../Hero/Hero';
import InputComment from '../../InputComment/InputComment';
import DefaultComments from '../../DefaultComments/DefaultComments';
import mainVideos from '../../../data/video-details.json';
import sideVideos from '../../../data/videos.json';
import SideVideos from '../../SideVideos/SideVideos'
import '../../SideVideos/SideVideos.scss'
import './Home.scss'


class App extends React.Component {
  state = {
    mainVideo: mainVideos[0],
    nextVideos: sideVideos,
  }

  updateVideo = (videoId) => {
    this.setState({
      mainVideo: mainVideos.find(video => video.id === videoId),
      nextVideos: sideVideos,
    })
  };

  render = () => {
    console.log(this.state.mainVideo)
    return (
      <div className="app">
        <div className='app__bottomComponents'>
          <div className='app__commentsComponent'>
            <Hero video={this.state.mainVideo} />
            <InputComment />
            <DefaultComments mainVideo={this.state.mainVideo} />
          </div>
          <div>
            <section className='sideVideos'>
              <h2 className='sideVideos__title'>Next Videos</h2>
              {
                this.state.nextVideos
                  .filter(video => video.id !== this.state.mainVideo.id)
                  .map((video) => <SideVideos
                    key={video.id}
                    image={video.image}
                    title={video.title}
                    channel={video.channel}
                    id={video.id}
                    updateVideo={this.updateVideo} />)
              }
            </section>
          </div>
        </div>
      </div>
    );
  }

}

export default App;