let express = require('express');
const fs = require('fs');
let app = express();
const uuid = require('uuid');
const cors = require('cors');
app.use(cors());
app.use(express.json());
const videoInfo = require('./data/video-details.json')

//pulling the array of videos with all the info
const port = 8080;
function getVideos() {
  const data = fs.readFileSync('./data/video-details.json')
  return JSON.parse(data)
}
let videos = getVideos()
app.get('/videos', function (req, res) {

  let nextVideos = videos.map((video) => {
    return {
      description: video.description,
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    }
  })
  res.status(200).send(nextVideos)

});
app.get('/videos/:id', function (req, res) {
  let videoArr = getVideos()
  const video = videoArr.find((video) =>
    video.id === req.params.id)
  res.status(200).send(video)
});

app.get('*', (req, res) => {
  res.send(`path error`)

})

app.post('/videos', (req, res) => {
  const { title, image, channel, description } = req.body
  videos.push({
    id: uuid.v4(),
    title: title,
    image: image,
    channel: 'Fink',
    description: description,
    timestamp: Date.now(),
    views: 0,
    likes: 0,
  });
  fs.writeFileSync('./data/video-details.json', JSON.stringify(videos));
  res.json(videoInfo)
})

app.listen(port, () => console.log(`$express listening on port ${port}`)
)