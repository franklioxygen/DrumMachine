# Drum Beat Sequencer


### Demo:

https://franklioxygen.github.io/DrumMachine/

<img alt="Screen Shot 2022-04-05 at 11 35 51 PM" src="https://user-images.githubusercontent.com/2637636/161890890-fdc552f9-5b78-48d2-8e95-874fea93344b.png">

#### start service command:

npm install

npm run build

npm start

#### test:

npm test

#### deploy on gh-page:

npm run deploy

#### view in:

http://localhost:3000/

This is a drum beat sequencer built with React.

It has 8 instrument tracks and 16 columns.

User can play/pause, stop the sequencer. User also can use keyboard control:

SPACE:play/pause  
ESCAPE: stop  
R: clear bars

Slider can adjust volume and bpm speed real-time.

For minimize lagging, audios are in public folder and preloaded by playAudio.js.
