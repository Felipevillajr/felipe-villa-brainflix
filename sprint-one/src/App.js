import './App.css';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Video from './Components/Videos';
import VideoDes from './Components/VideoDescrib';
import Comments from './Components/Comments';
import VideoQue from './Components/VideoQue'




function App() {
  return (
    <>
    <Header></Header>
    <Video></Video>
    <VideoDes></VideoDes>
    <Comments></Comments>
    <VideoQue></VideoQue>
    <Footer></Footer>
    </>
  );
}

export default App;
