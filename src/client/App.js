import React, { Component } from 'react';
import './app.css';
import Vex from 'vexflow';

import ReactImage from './react.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = { username: null, note1: null, note2: null, div_score: null, primero:null};

  init_score(){
    console.log("init_score");

    const VF = Vex.Flow;
    this.div_score = document.getElementById('score');
    const renderer = new VF.Renderer(this.div_score, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(800, 300);

    const context = renderer.getContext();
    context.setFont('Arial', 10);
    const stave = new VF.Stave(10, 40, 400);
    // Create a voice in 4/4 and add the notes from above
    var voice = new VF.Voice({num_beats: 4, beat_value: 4});

    notes = ["c/4","d/4","e/4","f/4","g/4","a/4","b/4","c/5"]
    //random
    const idx1 = Math.floor(Math.random() * notes.length);
    const idx2 = Math.floor(Math.random() * notes.length);

    this.note1 = notes[idx1];
    this.note2 = notes[idx2];
    stave.addClef("treble").addTimeSignature("4/4");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    var notes = [
      // A quarter-note C.
      new VF.StaveNote({clef: "treble", keys: [this.note1], duration: "h" }),

      // A quarter-note D.
      new VF.StaveNote({clef: "treble", keys: [this.note2], duration: "h" }),
    ];
    voice.addTickables(notes);
    // Format and justify the notes to 350 pixels (50 pixels left for key and time signatures).
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 350);

    // Render voice
    voice.draw(context, stave);
  }

  play_tuning_fork() {
    var audio = new Audio('la440.wav');
    audio.play();
  }

  capture_audio() {

  }

  start(){
    // modify the state, this will automatically recall render() below.
    this.init_score();
    this.play_tuning_fork()

    this.setTimeout(capture_audio, 4000);


  }

  handleClick(e) {
    this.start()
  }







  dotsBlinker(){
    this.primero = document.getElementById("p1")

  }



  render() {
    const { username } = this.state;
    return (
      <div>
        <div className="container">
          <h1 className="display-1">eSing</h1>
          <div className="row">
            <div className="col-4">
              <button type="button" className="btn btn-outline-primary" onClick={this.handleClick}>Start</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">

            </div>
            <div id="score" className="col-9">

            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="blink_me">Metro: 60</div>
            </div>
            <div id="p0" className="col-2" >
              <div className="blink_me">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-circle-fill" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              </div>
            </div>
            <div  id="p1" className="col-1">
              <div className="blink_me">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
              </div>
            </div>
            <div id="p2" className="col-1">
              <div className="blink_me">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
              </div>
            </div>
            <div id="p3" className="col-1">
              <div className="blink_me">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
              </div>
            </div>
            <div id="p4" className="col-1">
              <div className="blink_me">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <p>Output/feedback </p>
            </div>
            <div className="col-9">
              <p className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
