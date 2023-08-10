import  {Tweet} from './Tweet.js';
import avatar from './image/avatar.png';
import photo_post from './image/photo_post.png';

const info = {
  author: {
    name: "Satoshi Nakamoto",
    photo: {avatar},
    nickname: "@nakamoto"
  },
  content: "What is blockchain? And how it works.",
  image: {photo_post},
  date: "2023-08-05",
}

function App () {
  return (
    <div className="App">
      <Tweet
        author={info.author}
        content={info.content}
        image={info.image}
        date={info.date}
      />
    </div>
  )
}

export default App;