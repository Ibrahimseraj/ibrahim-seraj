import React from 'react';
import ibrahim from '../images/ibrahim.jpeg';
import hello from '../images/hello.jfif';
import './UI.css';
import sendEmail from './SendEmail';
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpSquareFill } from "react-icons/bs";
import memorygame from '../images/memorygame.png';
import ropasi from '../images/rock-paper-sissor.png';



function UI() {  
  return (
    <section id='UI'>
        <div className='nav' id='nav'>
            <div className='linkes'>
                <a href='#contact' className='click'>contact</a>
                <a href='#projects' className='click'>projects</a>
                <a href='#skills' className='click'>skills</a>
                <a href='#about' className='click'>about</a>
            </div>
            <h1>Ibrahim</h1>
        </div>
         <div className='home'>
          <div className='home-info'>
            <h4>Hey there, I'm</h4>
            <h1>Ibrahim Seraj</h1>
            <h3>Front-End Developer</h3>
          </div>
          <div>
            <img src={hello} alt='my-vr-emoje' className='ibrahim' />
          </div>
         </div>
         <h1 className='about-me' id='about'>About ME</h1>
         <div className='about'>
          <h3>
            Hey! I'm Ibrahim Seraj.
            <br />
            A junior front-end developer.
            <br />
            learning new things is something i enjoy.
            <br />
            I know many languges &
            <br />
            frameworks in the front-end
            <br />
            and
            <br />
            I'm looking forward to learn the
            <br />
            back-end side.
            <br />
            In my free time i'm really
            <br />
            intersted about history &
            <br />
            playing games. 
          </h3>
          <div className='ibrahim'>
            <img src={ibrahim} alt="ibrahim's-bimoje" />
          </div>
         </div>
         <h1 className='skill' id='skills'>skills</h1>
         <div className='skills'>
          <div className='html'><SiHtml5 /><p>HTML</p></div>
          <div className='css'><FaCss3Alt /><p>CSS</p></div>
          <div className='sass'><FaSass /><p>Sass</p></div>
          <div className='bootstrap'><SiBootstrap /><p>Bootstrap</p></div>
          <div className='javascript'><SiJavascript /><p>Javascript</p></div>
          <div className='react'><GrReactjs /><p>React</p></div>
         </div>
         <h1 className='project' id='projects'>Projects</h1>
         <div className='projects'>
            <div className='memorygame'>
                <h1>Memory Game</h1>
                <img src={memorygame} alt='my-memorygame-project' />
                <div className='teck'>
                <SiHtml5 className='html1' />
                <FaCss3Alt className='css1' />
                <SiJavascript className='javascript1' />
                </div>
                <div className='memorygame-links'>
                    <div><h3 className='livesite'><a href='https://ibrahimseraj.github.io/memory-game/' target='_blank' rel="noreferrer">Live Site</a></h3></div>
                    <h3>|</h3>
                    <div><h3 className='projectsgithup'><a href='https://github.com/Ibrahimseraj/memory-game' target='_blank' rel="noreferrer">Githup repo</a></h3></div>
                </div>
                <div className='r-p-s'>
                  <h1>rock-paper-sissor</h1>
                  <img src={ropasi} alt='my-rock-paper-sissor-game-project' />
                  <div className='teck2'>
                    <SiHtml5 className='html2' />
                    <FaCss3Alt className='css2' />
                    <SiJavascript className='javascript2' />
                  </div>
                  <div className='r-p-s-links'>
                    <div><h3 className='livesite'><a href='https://ibrahimseraj.github.io/rock-paper-sissor/' target='_blank' rel="noreferrer">Live Site</a></h3></div>
                    <h3>|</h3>
                    <div><h3 className='projectsgithup'><a href='https://github.com/Ibrahimseraj/rock-paper-sissor' target='_blank' rel="noreferrer">Githup repo</a></h3></div>
                  </div>
                </div>
            </div>
         </div>
         <h1 className='contact' id='contact'>Contact</h1>
         <div className='contacts'>
          <form className='form' onSubmit={sendEmail}>
            <label>name:</label>
            <input type='text' name='name' className='input' />
            <label>Email:</label>
            <input type='email' name='user_email' className='input' />
            <label>Message:</label>
            <textarea name='message' rows='4' className='input' />
            <input type='submit' className='submit' value='Send' />
          </form>
          <div className='info'>
            <p>Feel free to contact me to chat about anything!</p>
          </div>
          <div className='githupandlinkedin'>
            <a href='https://www.linkedin.com/in/ibrahim-mohammed-a50603228/' target='_blank' rel="noreferrer"><BsLinkedin className='linkedin' /></a>
            <a href='https://github.com/Ibrahimseraj' target='_blank' rel="noreferrer"><BsGithub className='githup' /></a>
          </div>
         </div>
         <footer className='developer'>
          <a href='#nav'><BsArrowUpSquareFill /></a>
          <p>© 2022 | Developed and designed by Ibrahim Seraj</p>
         </footer>
    </section>
  )
}


export default UI;