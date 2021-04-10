import React from 'react';
import Hero from '../../Hero/Hero';
import InputComment from '../../InputComment/InputComment';
import DefaultComments from '../../DefaultComments/DefaultComments';
import mainVideos from '../../../data/video-details.json';
import sideVideos from '../../../data/videos.json';
import SideVideos from '../../SideVideos/SideVideos'
import MainVideo from "../../MainVideo/MainVideo"
import '../../SideVideos/SideVideos.scss'
import './Home.scss'
import {Link} from "react-router-dom"
import axios from 'axios';


class Home extends React.Component {
  state = {
    mainVideo: {},
    nextVideos: [],
  }

  componentDidMount() {
    let APIKey = "?api_key=51253446-3783-4af2-b6fe-0482bc5ecb07"
    let APIUrl = "https://project-2-api.herokuapp.com"
    let endPoint = "/videos"
    axios.get(APIUrl + endPoint + APIKey)
      .then(res => {
        console.log(res.data);
        this.setState({ nextVideos: res.data})
      })
      .then (res => {
        const videoId = this.props.videoId ? this.props.videoId : this.state.nextVideos[0].id
        axios.get(APIUrl + endPoint + "/" + videoId + APIKey)
        .then(res => {
          console.log (res)
          this.setState ({mainVideo: res.data})
        })
      })
  }

  render() {
    console.log(this.state.mainVideo)
    return (
      <div className="app">
        <MainVideo video={this.state.mainVideo.image} />
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
                  .map((video) => <Link key={video.id} to={`/videos/${video.id}`}>
                  <SideVideos
                    image={video.image}
                    title={video.title}
                    channel={video.channel}
                    id={video.id} />
                    </Link>)
              }
            </section>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;