import React from 'react'
import './Home.css'
import todoappImg from '../img/todoAppClone.png'
import whatsappClone from '../img/whatsappClone.png'
import linkImg from '../img/link.svg'
import spinLoadingImg from '../img/spin-loading.png'
import githubImg from '../img/github.svg';
import instagramSvg from '../img/instagram.svg'
import myImg from '../img/my-img.jpg'
import toggleBtnImg from '../img/toggleBtn.png'
import netflixImg from '../img/netflixImg.png'
function Home() {
    
  return (
    <div className='home'>
      <div className='bio-area'>
        <div className='profile-img'>
            <img className='img' src={myImg} alt='profile-img' />
        </div>
        <div className='bio'>
            <h1>I' am </h1>
            <h1 className='name'>Danuka Thimira</h1>
            <div className='description'>
                <p>🧒 I am Student</p>
                <p>👩‍💻 I am learning programming and web developing</p>
                <p>🏢 I am also work on projects</p>
            </div>
        </div> 
        </div>
        <div className='skills-section'>
        <p id='skill-txt'>HTML</p>
        <div class="container">
        <div class="skills html"><h5 style={{marginLeft: '10px'}}>40%</h5></div>
         </div>

        <p id='skill-txt'>CSS</p>
        <div class="container">
        <div class="skills css"><h5 style={{marginLeft: '10px'}}>40%</h5></div>
        </div>

        <p id='skill-txt'>JavaScript</p>
        <div class="container">
        <div class="skills js"><h5 style={{marginLeft: '10px'}}>30%</h5></div>
        </div>

        <p id='skill-txt'>ReactJS</p>
        <div class="container">
        <div class="skills reactJs"><h5 style={{marginLeft: '10px'}}>40%</h5></div>
        </div>
        </div>


        <div className='project-section'>
          <h1 className='portfolio-txt'>My Portfolio</h1>
          <div className='first-row'>
          <div className='whatsapp-clone'>
            <img className='whatsapp-clone-img' src={whatsappClone} alt='whatsappClone' />
            <div className='links'>
              <h4>WhatsApp Clone</h4>
              <a href='https://github.com/DanukaThimira/whatsapp-clone'><img src={githubImg} alt='github-icon'/></a>
              <a href='https://whatsapp-clone-c6958.web.app/'><img src={linkImg} alt='github-icon'/></a>
            </div>
          </div>
          <div className='todo-app'>
            <img className='todo-app-img' src={todoappImg} alt='whatsappClone' />
            <div className='links'>
            <h4>Todo App</h4>
              <a href='https://github.com/DanukaThimira/todo-app-with-app'><img src={githubImg} alt='github-icon'/></a>
              <a href='https://todo-app-with-firebase-ef939.web.app/'><img src={linkImg} alt='github-icon'/></a>
            </div>
            </div>
          </div>
          <div className='second-row'>
          <div className='spin-loading'>
            <img className='spin-loading-img' src={spinLoadingImg} alt='whatsappClone' />
            <div className='links'>
            <h4>Spin Loading</h4>
              <a href='https://github.com/DanukaThimira/spin-loading.github.io'><img src={githubImg} alt='github-icon'/></a>
              <a href='#'><img src={linkImg} alt='github-icon'/></a>
            </div>
          </div>
          <div className='netflix-clone'>
            <img className='netflix-clone-img' src={toggleBtnImg} alt='whatsappClone' />
            <div className='links'>
              <h4>Toggle Button Animation</h4>
              <a href='https://github.com/DanukaThimira/toggle-button-animation'><img src={githubImg} alt='github-icon'/></a>
              <a href='#'><img src={linkImg} alt='github-icon'/></a>
            </div>
            </div>
          </div>

          <div className='third-row'>
          <div className='app'>
            <img className='app-img' src={netflixImg} alt='whatsappClone' />
            <div className='links'>
            <h4>Netflix Clone</h4>
              <a href='https://github.com/DanukaThimira/netflix-clone'><img src={githubImg} alt='github-icon'/></a>
              <a href='#'><img src={linkImg} alt='github-icon'/></a>
            </div>
          </div>
          {/* <div className='app-second'>
            <img className='app-second-img' src={whatsappClone} alt='whatsappClone' />
            <div className='links'>
            <h4>WhatsApp Clone</h4>
              <a href='#'><img src={githubImg} alt='github-icon'/></a>
              <a href='#'><img src={linkImg} alt='github-icon'/></a>
            </div>
          </div> */}
          </div>
        </div>
        <div className='footer'>
          <div className='social-links'>
          <a href='https://github.com/DanukaThimira'><img src={githubImg} alt='github-icon'/></a>
          <a href='#'><img src={instagramSvg} alt='github-icon'/></a>
          <p> Contact : gamingvlab@gmail.com</p>
          </div>
        </div>
    </div>
  )
}

export default Home