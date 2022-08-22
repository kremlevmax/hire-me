import React from "react";
import "./AboutPoster.css";
import me from "../../images/me.png";

const Poster = () => {
  return (
    <section className='poster'>
      <div className='about__poster'>
        <img className='poster__img' src={me} alt='Me' />
        <p className='poster__frontend'>Frontend</p>

        <p className='poster__css'>CSS</p>
        <p className='poster__react'>React</p>
        <p className='poster__html'>HTML</p>
        <p className='poster__nextjs'>NextJS</p>
        <p className='poster__sass'>SASS</p>
        <p className='poster__redux'>Redux</p>
        <p className='poster__graphql'>GraphQL</p>
        <p className='poster__git'>Git</p>
      </div>
    </section>
  );
};

export default Poster;
