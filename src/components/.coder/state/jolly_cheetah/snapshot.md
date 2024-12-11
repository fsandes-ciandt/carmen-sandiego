# Context

All files complete source code.

## Project Structure

/
├── Debug/
│   ├── index.css
│   └── index.js
├── Game/
│   ├── Arrest/
│   │   ├── index.css
│   │   ├── index.js
│   │   └── prison-empty.jpg
│   ├── Buttons/
│   │   ├── crime.jpg
│   │   ├── depart.jpg
│   │   ├── hide.jpg
│   │   ├── hover.mp3
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── search.jpg
│   │   └── see.jpg
│   ├── ClueBubble/
│   │   ├── index.css
│   │   └── index.js
│   ├── Instructions/
│   │   ├── ButtonNext/
│   │   │   └── index.js
│   │   ├── EndCaseFail/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── EndCaseSuccess/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Investigation/
│   │   │   └── index.js
│   │   ├── Typewriter/
│   │   │   ├── index.css
│   │   │   ├── index.js
│   │   │   ├── sound-typewriter-2.mp3
│   │   │   └── typewriter.mp3
│   │   ├── User/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── bg-machine-text.jpg
│   │   ├── index.css
│   │   ├── index.js
│   │   └── machine-text.png
│   ├── Menu/
│   │   ├── Credits/
│   │   │   └── index.js
│   │   ├── Dossiers/
│   │   │   ├── dossier.png
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── index.css
│   │   ├── index.js
│   │   └── index.stories.js
│   ├── Modals/
│   │   ├── Clues/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Crime/
│   │   │   ├── compute.gif
│   │   │   ├── computer.jpg
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Destinations/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Map/
│   │   │   ├── index.css
│   │   │   ├── index.js
│   │   │   ├── map-2.jpg
│   │   │   └── map.jpg
│   │   └── Picture/
│   │       ├── index.css
│   │       └── index.js
│   ├── PlaceAndDate/
│   │   ├── clock-2.mp3
│   │   ├── index.css
│   │   └── index.js
│   ├── Vilain/
│   │   ├── index.css
│   │   └── index.js
│   ├── WrongDestination/
│   │   └── index.js
│   ├── index.css
│   └── index.js
└── GameData/
    └── Data/
        ├── Cases/
        │   └── index.js
        ├── Config/
        │   └── index.js
        └── Dossiers/
            └── index.js

## File Contents

### Debug/index.css
```
.pre {outline: 1px solid #ccc; padding: 5px; margin:20px 0px; }
.string { color: green; }
.number { color: darkorange; }
.boolean { color: blue; }
.null { color: magenta; }
.key { color: red; }
```

### Debug/index.js
```
import React, { Component } from 'react';
import {  Row, Col } from 'react-bootstrap';
import './index.css';

class Debug extends Component {
  constructor(props) {
    super(props);
    this.myPre = null;
    this.setMyPre = element => {
      this.myPre = element;
    }
  }

  render() {
    return (
      <Row>
        <Col>
          <div>
            <pre className="pre" ref={this.setMyPre}>
              {JSON.stringify(this.props.state, null, 2)}
            </pre>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Debug;
```

### Game/Arrest/index.css
```
/*.cs-suspicious-gif {
  position:absolute;
  bottom:140px;
  left:10px;
  width:140px;
  height:137px;
  animation-name: suspicious;
  animation-duration:1s;
  animation-iteration-count: 3;
}

@keyframes suspicious {
  0% { left:10px; }
  100% { left:450px; }
}*/

.cs-fail-message {
  color:#fff;
  margin:120px auto 0 auto;
  text-align: center;
}

/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-arrest {
    height:240px;
  }
  .cs-fail-message {
    margin-top:0;
  }
}
```

### Game/Arrest/index.js
```
import React, { Component } from 'react';
// import suspicious from './suspicious.gif';
// import arrest from './arrest.mp4';
// import jail from './prison-empty.jpg'
import './index.css';
// import { process } from 'ipaddr.js';

class Arrest extends Component {
  constructor(props) {
    super(props);
    this.myVideo = null;
    this.setMyVideo = element => {
      this.myVideo = element;
    }; 
  }

  componentDidMount() {
    const { onChangeStep } = this.props;
    if(this.myVideo) {
      this.myVideo.onended = function(e) {
        onChangeStep(23);
      };
    }
  }

  render(){
    const { warrant, Cases, lang, userCase } = this.props;
    let arrestOrFail = warrant === Cases[userCase][lang].thief ? 'arrest-compress.mp4' : 'fail-compress.mp4';
    return(
      <div>
        <video className="cs-arrest" width="662" autoPlay height="470" ref={this.setMyVideo}>
          <source src={`https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/arrest/${arrestOrFail}`} type="video/mp4"></source>
        </video>
      </div>
    )
  }
} 

export default Arrest;
```

### Game/Arrest/prison-empty.jpg (binary)

### Game/Buttons/crime.jpg (binary)

### Game/Buttons/depart.jpg (binary)

### Game/Buttons/hide.jpg (binary)

### Game/Buttons/hover.mp3 (binary)

### Game/Buttons/index.css
```
.cs-btn {
  display: inline-flex;
  padding:5px;
  background-color: #fff;
  border:1px solid #000;
  box-shadow:5px 5px #000;
  margin-right:10px;
  cursor:pointer;
}

.cs-btn-inner {
  width:137px;
  height:93px;
  padding:2px;
  background-size: contain;
  background-position: top left;
  background-repeat:no-repeat;
  border:1px solid #000;
}


.cs-btn:hover,
.cs-btn:focus {
  background-color: green;
}

.cs-btn-hide,
.cs-btn-depart-hide {
  background-color: green;
} 

.cs-btn-see .cs-btn-inner {
  background-image: url('see.jpg');
}

.cs-btn-hide .cs-btn-inner {
  background-image: url('hide.jpg');
}

.cs-btn-depart .cs-btn-inner {
  background-image: url('depart.jpg');
}

.cs-btn-search .cs-btn-inner {
  background-image: url('search.jpg');
}

.cs-btn-crime .cs-btn-inner {
  background-image: url('crime.jpg');
}

.cs-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.1);
  z-index: 1;
}

/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-btn {
    padding:1px;
    box-shadow:2px 2px #000;
    margin-right:7px;
  }
  .cs-btn-inner {
    width:90px;
    height:63px;
    padding: 1px;
  }
  .cs-btn-hidden-mobile {
    display:none;
  }
}
```

### Game/Buttons/index.js
```
import React, { Component } from 'react';
import './index.css';
import ModalDestinations from '../Modals/Destinations';
import ModalMap from '../Modals/Map';
import ModalClues from '../Modals/Clues';
import ModalCrime from '../Modals/Crime';
import soundHover from './hover.mp3';

class Buttons extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowModalDestinations: false,
      isShowModalDepart: false,
      isShowModalMap: false,
      isDepart: false,
      isShowModalClue: false,
      isShowModalCrime: false,
      hoverDestination: '',
      criminal: null,
      isPlane: false,
      markers: null
    }
    this.soundHover = null;
    this.setSoundHover = element => {
      this.soundHover = element;
    };
    this.goTo = this.goTo.bind(this);
  }

  // Hide All Modal
  hideAll = () => {
    this.setState({isDepart: false});
    this.setState({isShowModalDestinations: false});
    this.setState({isShowModalDepart: false});
    this.setState({isShowModalMap: false});
    this.setState({isShowModalClue: false});
    this.setState({isShowModalCrime: false});
    this.props.hideClue();
    this.props.hideCrime();
  }

  // Destinations
  showModalDestinations = () => {
    this.hideAll();
    this.setState({isDepart: false});
    this.setState({isShowModalDestinations: true});
  }
  hideModalDestinations = () => this.setState({isShowModalDestinations: false});

  // Départ : Modal Destinations + Map
  showModalDepart = () => {
    this.hideAll();
    this.setState({isDepart: true});
    this.setState({isShowModalMap: true});
    this.setState({isShowModalDepart: true});
  }
  hideModalDepart = () => {
    this.setState({isShowModalDepart: false});
    this.setState({isShowModalMap: false});
  }

  hoverTo = (destination) => this.setState({hoverDestination: destination });

  async goTo(destination) {
    // console.warn(this.state.markers)
    const depart = this.state.markers.filter(item => item.city === 'depart')[0];
    const arrivee = this.state.markers.filter(item => item.city === destination)[0];
    console.log(depart);
    console.log(arrivee);
    const distanceDepartArrivee = Math.trunc(Math.sqrt(Math.pow((arrivee.x - depart.x),2) + Math.pow((arrivee.y - depart.y),2)));
    console.log('distance entre le point de départ et '+ arrivee.city + ':' + distanceDepartArrivee);
    // Paris -> Oslo : 36, ~2h
    // Paris -> Reykjavik : 70, ~4h
    // Paris -> Tokyo : 330, ~10h
    let nbHours;
    if(distanceDepartArrivee < 30) {
      nbHours = 1;
    }
    if(distanceDepartArrivee < 40) {
      nbHours = 2;
    } else if(distanceDepartArrivee < 65) {
      nbHours = 3;
    } else if(distanceDepartArrivee < 90) {
      nbHours = 4;
    } else if(distanceDepartArrivee < 150) {
      nbHours = 5;
    } else if(distanceDepartArrivee < 200) {
      nbHours = 6;
    } else if(distanceDepartArrivee < 300) {
      nbHours = 7;
    } else if(distanceDepartArrivee < 400) {
      nbHours = 8;
    } else {
      nbHours = 9;
    }
    this.hideAll();
    this.setState({isPlane: true});
    this.props.changePlace(destination);
    this.setState({isShowModalMap: true});
    await this.props.changeDate(nbHours);
    this.setState({isPlane: false});
    this.setState({isShowModalMap: false});
    this.props.checkDestination(destination);
  } 

  changeMarkersDestinations = (markers) => this.setState({markers: markers})

  // Clues
  showModalClue = () => {
    this.hideAll();
    this.setState({isShowModalClue: true});
  }
  hideModalClue = () => this.setState({isShowModalClue: false})

  // Crime 
  showModalCrime = () => {
    this.hideAll();
    this.setState({isShowModalCrime: true});
  }

  hideModalCrime = () => {
    this.props.hideCrime();
    this.setState({isShowModalCrime: false})
  }

  render() {
    const { lang, Cases, viewClue, viewCrime, viewArrest, changeDate, userCase, userStep, isWrongDestination, tmpDestination, place, changeSex, changeHobby, changeHair, changeFeature, changeVehicule, sex, hair, hobby, vehicule, feature, changeWarrant } = this.props;
    const destinations = isWrongDestination ? [Cases[userCase][lang].steps[userStep].city.name] : Cases[userCase][lang].steps[userStep].destinations;
    const cityStart = isWrongDestination ? tmpDestination : Cases[userCase][lang].steps[userStep].city.name;
    const clues = isWrongDestination ? [] : Cases[userCase][lang].steps[userStep].clues;
    return (
      <div>
        {
          this.state.isShowModalDestinations || this.state.isShowModalDepart || this.state.isShowModalClue || this.state.isShowModalCrime || this.state.isShowModalMap
          ? <div className="cs-backdrop"></div>
          : ''
        }
        <div className="cs-btns">
          <div onMouseEnter={() => this.soundHover.play()} className={this.state.isShowModalDestinations ? 'cs-btn cs-btn-hidden-mobile cs-btn-hide ' : 'cs-btn cs-btn-see cs-btn-hidden-mobile'} onClick={this.showModalDestinations}>
            <div className="cs-btn-inner" ></div>
          </div>
          <div onMouseEnter={() => this.soundHover.play()} className={this.state.isShowModalDepart ? 'cs-btn cs-btn-depart cs-btn-depart-hide' : 'cs-btn cs-btn-depart  cs-btn-depart-show'} onClick={this.showModalDepart}>
            <div className="cs-btn-inner" ></div>
          </div>
          <div onMouseEnter={() => this.soundHover.play()} className={this.state.isShowModalClue ? 'cs-btn cs-btn-search cs-btn-hide' : 'cs-btn cs-btn-search cs-btn-see'} onClick={this.showModalClue}>
            <div className="cs-btn-inner"></div>
          </div>
          <div onMouseEnter={() => this.soundHover.play()} className={this.state.isShowModalCrime ? 'cs-btn cs-btn-crime cs-btn-hide' : 'cs-btn cs-btn-crime cs-btn-see'} onClick={this.showModalCrime}>
            <div className="cs-btn-inner"></div>
          </div>        
        </div>
        <div>
          <audio preload="auto" ref={this.setSoundHover} src={soundHover}> </audio>
        </div>
        {
          this.state.isShowModalDestinations
          ? <ModalDestinations lang={lang} depart={this.state.isDepart} destinations={destinations} hide={this.hideModalDestinations}></ModalDestinations>
          : ''
        }
        {
          this.state.isShowModalDepart
          ? <ModalDestinations goTo={this.goTo} hoverTo={this.hoverTo} lang={lang} depart={this.state.isDepart} destinations={destinations} hide={this.hideModalDepart}></ModalDestinations>
          : ''
        }
        {
          this.state.isShowModalMap && !isWrongDestination
          ? <ModalMap isPlane={this.state.isPlane} place={place} hoverDestination={this.state.hoverDestination} changeMarkersDestinations={this.changeMarkersDestinations} lang={lang} cityStart={cityStart} destinations={destinations}></ModalMap>
          : ''
        }
        {
          this.state.isShowModalMap && isWrongDestination
          ? <ModalMap isPlane={this.state.isPlane} place={place} hoverDestination={this.state.hoverDestination} changeMarkersDestinations={this.changeMarkersDestinations} lang={lang} cityStart={cityStart} destinations={destinations}></ModalMap>
          : ''
        }
        {
          this.state.isShowModalClue 
          ? <ModalClues  lang={lang} clues={clues} viewClue={viewClue} viewArrest={viewArrest} hideModalClue={this.hideModalClue} ></ModalClues>
          : ''
        }
        {
          this.state.isShowModalCrime
          ? <ModalCrime 
            lang={lang} 
            viewCrime={viewCrime} 
            changeDate={changeDate} 
            hideModalCrime={this.hideModalCrime} 
            changeSex={changeSex} 
            changeHobby={changeHobby} 
            changeHair={changeHair}  
            changeFeature={changeFeature}  
            changeVehicule={changeVehicule}
            changeWarrant={changeWarrant}
            sex={sex}
            hair={hair}
            hobby={hobby}
            feature={feature}
            vehicule={vehicule}

            ></ModalCrime>
          : ''
        }
      </div>
    );
  }
}

export default Buttons;
```

### Game/Buttons/search.jpg (binary)

### Game/Buttons/see.jpg (binary)

### Game/ClueBubble/index.css
```
.cs-bubble-wrapper {
  position:relative;
  width:100%;
  height:100%;
}

.cs-bubble-inner {
  position:absolute;
  z-index:2;
}

.cs-bubble {
  position: relative;
  background: #fff;
  border-radius: .4em;
  color:#000;
  margin:120px 60px 0 200px;
  padding:10px;
  bottom:0;
}

.cs-bubble:after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 55px solid transparent;
  border-right-color: #fdf9ff;
  border-left: 0;
  border-bottom: 0;
  margin-top: -27.5px;
  margin-left: -55px;
}

.cs-guy {
  margin-top:-100px;
  color:#fff;
  margin-left:20px;
} 

.cs-emoji {
  font-size:80px;
} 


/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-bubble-inner {
    position:static;
    margin-bottom:50px;
  }
  .cs-bubble {
    margin: 50px 60px 0 120px;
    padding: 2px 10px;
    font-size: 12px;
  }
  .cs-bubble:after {
    border: 30px solid transparent;
    border-right-color: #fdf9ff;
    border-left: 0;
    border-bottom: 0;
    margin-left: -30px;
  }
  .cs-guy {
    font-size:15px;
    margin-top: -75px;
  }
  .cs-emoji {
    font-size:70px;
  } 
  .cs-bubble-wrapper {
    height: auto;
  }
}
```

### Game/ClueBubble/index.js
```
import React, { Component } from 'react';
import Vilain from '../Vilain';
import './index.css';

class ClueBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVilainPlayed: false
    }
  }

  changeVilainPlayed = () => this.setState({isVilainPlayed: true})

  componentDidMount() {
    if(this.props.userStep === 0 || Object.keys(this.props.HISTORY[this.props.HISTORY.length-1]).length > 1) {
      this.changeVilainPlayed()
    }
  }

  render() {
    const { clue, userStep, Cases, userCase, lang, HISTORY } = this.props; 
    return(
      <div className="cs-bubble-wrapper">
        {
          userStep > 0 && Object.keys(HISTORY[HISTORY.length-1]).length === 2
          ? <Vilain changeVilainPlayed={this.changeVilainPlayed} userStep={userStep} userCase={userCase} Cases={Cases} lang={lang}></Vilain>
          : ''
        }
        {
          this.state.isVilainPlayed 
          ? <div className="cs-bubble-inner">
              <div className="cs-bubble">{clue.Clue}</div>
              <div className="cs-guy">
                {
                  clue.Guy.key === 'curator'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">👩</span>
                  : ''
                }
                {
                  clue.Guy.key === 'pilot'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">👨</span>
                  : ''
                }
                {
                  clue.Guy.key === 'soldier'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">💂</span>
                  : ''
                }
                {
                  clue.Guy.key === 'housedetective'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">🕵</span>
                  : ''
                }
                {
                  clue.Guy.key === 'privycouncillor'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">👩</span>
                  : ''
                }
                {
                  clue.Guy.key === 'bankguard'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">🧛‍♂️</span>
                  : ''
                }
                {
                  clue.Guy.key === 'referencelibrarian'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">🧟‍♀️</span>
                  : ''
                }
                {
                  clue.Guy.key === 'undersecretary'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">💁</span>
                  : ''
                }
                {
                  clue.Guy.key === 'sailorssnail'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">🐌</span>
                  : ''
                }
                {
                  clue.Guy.key === 'sailor'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">🧜‍♂️</span>
                  : ''
                }
                {
                  clue.Guy.key === 'palaceguard'
                  ? <span role="img" className="cs-emoji" aria-label="emoji">💂</span>
                  : ''
                }                   
                <br/>{clue.Guy.value}
              </div>
            </div> 
          : ''
        }
        
      </div>
    );
  }
}

export default ClueBubble;
```

### Game/Instructions/ButtonNext/index.js
```
import React, { Component } from 'react';

class ButtonNext extends Component {
  componentDidMount() {
    this.props.setScroll(); 
  }

  render() {
    const { onChangeStep, nextStep, step, mb, children } = this.props;
    return(
      <button disabled={step >= nextStep} className={mb} onClick={() => onChangeStep(nextStep)}>{children}</button>
    )  
  }
}

export default ButtonNext;
```

### Game/Instructions/EndCaseFail/index.css
```

```

### Game/Instructions/EndCaseFail/index.js
```
import React, { Component } from 'react';
import Typewriter from '../Typewriter';
import './index.css';

class EndCaseFail extends Component {
  render() {
    const {onChangeStep, step, Cases, userCase, lang, Config, isExpirationTime } = this.props;
    return (
      <div>

        <Typewriter mb={'mb-4'}  setScroll={this.props.setScroll} mystring={Config[lang].endSuccess.wait} step={step} changeStep={onChangeStep} > </Typewriter>
        {
          step > 22
          ?  <Typewriter mb={'mb-4'}  setScroll={this.props.setScroll} mystring={Config[lang].endFail.loser} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 23 && isExpirationTime
          ? <div>
              <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={Config[lang].endFail.expiration} step={step} changeStep={onChangeStep} > </Typewriter>
              <button onClick={() => this.props.restart()}>{Config[lang].buttons.restart}</button>  
             </div>
          : ''
        }
        {
          step > 23 && !isExpirationTime
          ? <div>
              <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Config[lang].endFail.noWarrant} ${Cases[userCase][lang].thief}`} step={step} changeStep={onChangeStep} > </Typewriter>
              <button onClick={() => this.props.restart()}>{Config[lang].buttons.restart}</button>  
             </div>
          : ''
        }
      </div>
    )
  }
}

export default EndCaseFail;
```

### Game/Instructions/EndCaseSuccess/index.css
```

```

### Game/Instructions/EndCaseSuccess/index.js
```
import React, { Component } from 'react';
import Typewriter from '../Typewriter';
import ButtonNext from '../ButtonNext';
import './index.css';

class EndCaseSuccess extends Component {
  render() {
    const {onChangeStep, step, Cases, userCase, lang, Config, user} = this.props;
    return (
      <div>
        <Typewriter mb={'mb-4'}  setScroll={this.props.setScroll} mystring={Config[lang].endSuccess.wait} step={step} changeStep={onChangeStep} > </Typewriter>
        {
          step > 22
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Config[lang].endSuccess.thanks1} ${Cases[userCase][lang].steps[0].city.name} ${Config[lang].endSuccess.thanks2} ${Cases[userCase][lang].thief}`} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 23
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Cases[userCase][lang].thief} ${Cases[userCase][lang].endSuccess.thanks3}`} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        } 
        {
          step > 24
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={Config[lang].endSuccess.thanks4} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }   
        {
          step > 25
          ? <ButtonNext mb={'mb-4'} setScroll={this.props.setScroll} onChangeStep={onChangeStep} nextStep={27}>{Config[lang].buttons.continue} </ButtonNext>
          : ''
        }
        {
          step > 26
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Config[lang].endSuccess.thanks5} ${user} ${Config[lang].endSuccess.thanks6}`} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        } 
        {
          step > 27
          ? <div>
              <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Config[lang].endSuccess.ready} ${user}`} step={step} changeStep={onChangeStep} > </Typewriter>
              <button style={{marginRight:'5px'}} disabled={step > 29} onClick={() => this.props.restart()}>{Config[lang].buttons.yes}</button>  
              <button disabled={step > 29} onClick={() => this.props.restart()}>{Config[lang].buttons.no}</button><br/><br/>
            </div>
          : ''
        }
      </div>
    )
  }
}

export default EndCaseSuccess;
```

### Game/Instructions/Investigation/index.js
```
import React, { Component } from 'react';
import Typewriter from '../Typewriter';
import ButtonNext from '../ButtonNext';

class Investigation extends Component {
  componentDidMount() {
    this.props.setScroll();
  }
  render() {
    const { setScroll, step, onChangeStep, user, userRank, Cases, lang, userCase, Config } = this.props;
    return (
      <div>
        <Typewriter mb={'mb-4'} setScroll={setScroll} mystring={Cases[userCase][lang].start[0]} step={step} changeStep={onChangeStep} > </Typewriter>
        {
          step > 10
          ? <Typewriter mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[1]} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 11
          ? <Typewriter mb={'mb-4'} setScroll={setScroll} mystring={Cases[userCase][lang].start[2]}   step={step} changeStep={onChangeStep}  > </Typewriter>
          : ''
        }
        {
          step > 12
          ? <ButtonNext mb={'mb-4'} step={step}  setScroll={setScroll} onChangeStep={onChangeStep} nextStep={14} >{Config[lang].buttons.continue} </ButtonNext>
          : ''
        }
        {
          step > 13
          ? <Typewriter mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[3]} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 14
          ? <Typewriter mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[4]}  step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 15
          ? <ButtonNext mb={'mb-4'} step={step}  setScroll={setScroll} onChangeStep={onChangeStep} nextStep={17} >{Config[lang].buttons.continue} </ButtonNext>
          : ''
        }
        {
          step > 16
          ? <Typewriter mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[5]} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
        step > 17
          ? <Typewriter mb={'mb-8'} setScroll={setScroll} mystring={`${Cases[userCase][lang].start[6]} ${userRank} ${user} `}  step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 18
          ? <ButtonNext mb={'mb-4'} step={step} setScroll={setScroll} onChangeStep={onChangeStep} nextStep={20} >{Config[lang].buttons.game} </ButtonNext>
          : ''
        }
      </div>
    );
  }
} 

export default Investigation;
```

### Game/Instructions/Typewriter/index.css
```

```

### Game/Instructions/Typewriter/index.js
```
import React, { Component } from 'react';
import './index.css';
import soundTypewriter from './typewriter.mp3';

class Typewriter extends Component {
  constructor(props){
    super(props);
    this.myDiv = null;
    this.mySound = null;
    this.typewriter = element => {
      this.myDiv = element;
    }; 
    this.setmySound = element => {
      this.mySound = element;
    };

    this.playSound = this.playSound.bind(this);
    this.pauseSound = this.pauseSound.bind(this);
  }

  playSound() {
    if(this.mySound && (this.mySound.duration === 0 || this.mySound.paused)){

      this.mySound.play().catch(function() {

       });
    }
  } 

  pauseSound() { 
    if(this.mySound){
      this.mySound.pause();
    }
  }

  typeWriter = (s, i=0) => {
    if (this.myDiv && i < s.length) {
      this.myDiv.innerHTML += s.charAt(i);
      i++;
      this.props.setScroll();
      this.playSound();
      setTimeout(() => this.typeWriter(s, i), 35);
    }
    else {
      this.pauseSound();
      if(this.props.changeStep){
        this.props.changeStep(parseInt(this.props.step)+1)
      } 
    }
  }

  componentDidMount() {
    if(this.myDiv && this.mySound) {
      setTimeout(() => this.typeWriter(this.props.mystring), 100);
    }
  }

  componentWillUnmount() {
    this.pauseSound();
  }

  render() {
    return (
      <div className={this.props.mb}>
        <audio autoPlay preload="auto" ref={this.setmySound} src={soundTypewriter}> </audio>
        <span ref={this.typewriter}></span>
      </div>
    );
  }
}

export default Typewriter;
```

### Game/Instructions/Typewriter/sound-typewriter-2.mp3 (binary)

### Game/Instructions/Typewriter/typewriter.mp3 (binary)

### Game/Instructions/User/index.css
```
.cs-input-name {
  margin-top:1rem;
}

.cs-input-name input {
  padding:0rem 2rem .1rem 1rem;
  width:250px;
  outline:none;
}

.cs-input-name input:focus {
  outline:none;
}

.cs-input-name input::placeholder {
  opacity:.3;
}

.cs-input-name button {

}

/*.cs-typewriter { 
  display: inline-block;
  border-right: .15em solid orange;  
  width:25em;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  -webkit-animation: type 5s steps(40, end);
  animation: type 5s steps(40, end);
}

/* The typing effect
@keyframes type {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect 
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}*/
```

### Game/Instructions/User/index.js
```
import React, { Component } from 'react';
import './index.css';
import Typewriter from '../Typewriter';
import ButtonNext from '../ButtonNext';

class Step1 extends Component {
  render() {
    const {onChangeStep, onChangeUser, step, isUserValid, user, Config, lang} = this.props;
    const userLang = Config[lang].user;
    return (
      <div>
        <Typewriter mb={'mb-0'} setScroll={this.props.setScroll} mystring={userLang.step1} step={step} changeStep={onChangeStep} ></Typewriter>
        {
          step > 1
          ? <Typewriter mb={'mb-0'} setScroll={this.props.setScroll} mystring={userLang.step2} step={step} changeStep={onChangeStep} ></Typewriter>
          : ''
        }
        {
          step > 2
          ? <div className="cs-input-name"><input placeholder="Your nickname" maxLength="20" type="text"  onChange={onChangeUser} disabled={step > 3} />
            <button disabled={!isUserValid || step > 3} onClick={() => onChangeStep(4)}>ok</button></div>
          : <b>{user}</b>  
        }
        <br/><br/>
      </div>
    );
  }  
}

class Step2 extends Component {
  componentDidMount() {
    this.props.setScroll(); // set Scroll
  }
  render() {
    const {onChangeStep, createUser, loadUser, step, Config, lang} = this.props;
    const userLang = Config[lang];
    return (
      <div>
        <Typewriter mb={'mb-0'} setScroll={this.props.setScroll} mystring={userLang.user.step4} step={step} changeStep={onChangeStep} ></Typewriter>
        {
          step > 4 
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={userLang.user.step5} step={step} changeStep={onChangeStep} ></Typewriter>
          : ''
        }   
        {
          step > 5
          ? <div>
              <button style={{marginRight:'5px'}} disabled={step > 6} onClick={createUser}>{userLang.buttons.yes}</button>  
              <button disabled={step > 6} onClick={loadUser}>{userLang.buttons.no}</button><br/><br/>
            </div>
          : ''
        }
      </div>
    );
  }
} 

class Step3 extends Component {
  componentDidMount() {
    this.props.setScroll();
  }

  render() {
    const {onChangeStep, step, isNewUser, user, userRank, Config, lang} = this.props;
    const userLang = Config[lang];
    return (
      <div >
        {
          isNewUser 
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring ={`${userLang.user.step7a}, ${user}`} step={step} changeStep={onChangeStep} ></Typewriter>
          : <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring ={`${userLang.user.step7b}, ${user}`} step={step} changeStep={onChangeStep} ></Typewriter>
        }
        {
          step > 7 
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring ={`${userLang.user.step8} ${userRank}`} step={step} changeStep={onChangeStep} ></Typewriter>
          : ''
        }
        {
          step > 8
          ? <ButtonNext step={step} mb={'mb-4'} setScroll={this.props.setScroll} onChangeStep={onChangeStep} nextStep={10} >{userLang.buttons.start} </ButtonNext>
          : ''
        }
      </div>
    );
  }
}

class User extends Component {
  render() {
    return (
      <div>
        <Step1 
          onChangeUser={this.props.onChangeUser} 
          onChangeStep={this.props.onChangeStep}
          step={this.props.step} 
          isUserValid={this.props.isUserValid}
          user={this.props.user}
          setScroll={this.props.setScroll}
          Config={this.props.Config}
          lang={this.props.lang}
        />
        {
          this.props.step > 3
          ?  <Step2 
              createUser={this.props.createUser} 
              loadUser={this.props.loadUser} 
              step={this.props.step} 
              onChangeStep={this.props.onChangeStep} 
              setScroll={this.props.setScroll}
              Config={this.props.Config}
              lang={this.props.lang}
            /> 
          : ''
        }
        {
          this.props.step > 6
          ? <Step3
              isNewUser={this.props.isNewUser}
              onChangeStep={this.props.onChangeStep}
              step={this.props.step} 
              user={this.props.user}
              userRank={this.props.userRank}
              setScroll={this.props.setScroll}
              Config={this.props.Config}
              lang={this.props.lang}
            />
          : ''
        }
      </div>
    );
  }
} 

export default User;
```

### Game/Instructions/bg-machine-text.jpg (binary)

### Game/Instructions/index.css
```
/* TEXT MACHINE INSTRUCTIONS : INPUT USER, START INVESTIGATION */
.cs-instructions {
  background-image: url('machine-text.png');
  background-size: contain;
  background-position: bottom left;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  height:512px;
} 

.cs-instructions-inner {
  background-color:#fff;
  background-image: url('bg-machine-text.jpg');
  background-size: contain;
  background-position: bottom left;
  background-repeat:repeat-y;
  font-size:13px;
  line-height:24px;
  padding:10px 30px 10px 30px;
  margin:10px 0 0 38px; 
  max-height:320px;
  min-height:320px;
  min-width: 390px;
  width:390px;
  max-width:390px;
  overflow-y:hidden;
  position: absolute;
  z-index: 2;
  bottom:190px;
}


/* Mobile */ 
@media only screen and (min-width: 600px) and (max-width: 991px){
  .cs-instructions {
    height:600px;
    background:none;
  }

  .cs-instructions-inner {
    max-height:450px;
    min-height:450px;
    width:auto;
    max-width:auto;
    min-width: 230px;
    font-size:11px;
    line-height:20px;
    margin:0px 0 0 3px;
    padding:1px 5px; 
    bottom:120px;
    background:#FFF;
  }
}

/* Middle screen */ 
@media only screen and (min-width: 992px) and (max-width: 1200px){
  .cs-instructions {
    height:600px;
    background:none;
  }

  .cs-instructions-inner {
    max-height:450px;
    min-height:450px;
    width:auto;
    max-width:auto;
    font-size:11px;
    line-height:20px;
    margin:0px 0 0 3px; 
    bottom:120px;
  }
}

/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-instructions {
    height:450px;
    background:none;
  }

  .cs-instructions-inner {
    max-height:280px;
    min-height:280px;
    min-width:300px;
    width:auto;
    max-width:auto;
    font-size:11px;
    line-height:20px;
    margin:0px 0 0 3px; 
    bottom:167px;
  }
}
```

### Game/Instructions/index.js
```
import React, { Component } from 'react';
import User from './User';
import Investigation from './Investigation';
import EndCaseSuccess from './EndCaseSuccess';
import EndCaseFail from './EndCaseFail';
import './index.css';

class Instructions extends Component {
  constructor(props){
    super(props);
    this.myDiv = null;
    this.instructions = element => {
      this.myDiv = element;
    };
    this.setScroll = this.setScroll.bind(this);
  }

  setScroll() {
    this.myDiv.scrollTo(0, this.myDiv.scrollHeight);
  }

  render(){
    return(
      <div className={(this.props.step !== 20) ? 'cs-instructions' : ''}>
        <div className="cs-instructions-inner" ref={this.instructions}>
          {
            this.props.step < 14
             ? <User 
                onChangeStep={this.props.onChangeStep}
                onChangeUser={this.props.onChangeUser}
                isUserValid={this.props.isUserValid}
                user={this.props.user}
                isNewUser={this.props.isNewUser}
                userRank={this.props.userRank}
                step={this.props.step}
                createUser={this.props.createUser}
                loadUser={this.props.loadUser}
                setScroll={this.setScroll}
                Config={this.props.Config}
                lang={this.props.lang}
              />
            : ''
          }
          {
          this.props.step > 9 && this.props.step < 20
            ? <Investigation 
              step={this.props.step}
              onChangeStep={this.props.onChangeStep}
              userRank={this.props.userRank}
              user={this.props.user}
              setScroll={this.setScroll}
              Config={this.props.Config}
              Cases={this.props.Cases}
              lang={this.props.lang}
              userCase={this.props.userCase} 
              userStep={this.props.userStep}
              />
            : ''
          }
          {
          this.props.step > 20 && this.props.warrant === this.props.Cases[this.props.userCase][this.props.lang].thief
            ? <EndCaseSuccess 
              step={this.props.step}
              onChangeStep={this.props.onChangeStep}
              setScroll={this.setScroll}
              Config={this.props.Config}
              Cases={this.props.Cases}
              lang={this.props.lang}
              userCase={this.props.userCase} 
              userStep={this.props.userStep}
              user={this.props.user}
              restart={this.props.restart}
              />
            : ''
          }
          {
          this.props.step > 20 && (this.props.warrant !== this.props.Cases[this.props.userCase][this.props.lang].thief || this.props.isExpirationTime)
            ? <EndCaseFail 
              step={this.props.step}
              onChangeStep={this.props.onChangeStep}
              setScroll={this.setScroll}
              Config={this.props.Config}
              Cases={this.props.Cases}
              lang={this.props.lang}
              userCase={this.props.userCase} 
              userStep={this.props.userStep}
              user={this.props.user}
              isExpirationTime={this.props.isExpirationTime}
              restart={this.props.restart}
              />
            : ''
          }
        </div>
      </div>
    );
  }
}
export default Instructions;
```

### Game/Instructions/machine-text.png (binary)

### Game/Menu/Credits/index.js
```
import React, { Component } from 'react';
import Config from '../../../GameData/Data/Config';
import '../Dossiers/index.css';

class ModalCredits extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      modalCreditsShow: false
    };
  }
  
  componentDidMount() {
    
  }

  render() {
    const { lang, hideModalCredits } = this.props;
    return(
      <div className="cs-modal-dossier" >
        <div className="cs-modal-dossier-inner">
          <header className="cs-modal-dossier-name">{Config[lang].credits.name}</header>
          <article>
            <div className="cs-modal-dossier-picture"><img src="https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/credits/pp.jpg" alt=""  /></div>
            <div className="cs-modal-dossier-infos">
            {Config[lang].credits.infos}
            </div>
          </article>
          <button className="cs-modal-dossier-close" type="button" onClick={() => hideModalCredits(true)}>{Config[lang].modals.close}</button>
        </div>
      </div>
    )
  }
} 

export default ModalCredits;
```

### Game/Menu/Dossiers/dossier.png (binary)

### Game/Menu/Dossiers/index.css
```
.cs-modal-dossier {
  position: absolute;
  z-index: 8;
  max-width: 800px;
  width:800px;
  margin: 0 auto;
  left: 50%;
  margin-left: -400px;
  top: 140px;
  max-height: 450px;
  height:450px;
  overflow: auto; 
  font-size:12px;
  background-image:url('dossier.png');
  background-repeat: no-repeat;
  background-size:contain; 
}

.cs-modal-dossier-inner {
  height: 400px;
  width: 786px;
  padding: 0px 10px 10px 30px;
  background-color: #fff;
  margin-top: 30px;
  margin-left: 2px;
}

.cs-modal-dossier-picture {
  float:left;
  margin-top:10px;
  margin-right:20px;
  margin-bottom:20px;
}

.cs-modal-dossier-picture img {
  height:0;
  width:0;
  box-shadow:5px 5px #000;
  border:1px solid #fff;
   -webkit-animation: pp .5s ease-in;
  -webkit-animation-fill-mode: forwards;
}

@-webkit-keyframes pp {
  0% {
    width: 100px;
    height: 100px;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}

.cs-modal-dossier-infos {
  padding:10px 0 0 0;
  font-size:17px;
}

.cs-modal-dossier-name {
  text-align: center;
  background: white;
  position: absolute;
  z-index: 100;
  width: 308px;
  height: 30px;
  top: 0px;
  right: 70px;
  position: absolute;
  padding-top: 7px;  
}
 
.cs-modal-dossier-close {
  position: absolute;
  bottom:40px;
  right:20px;

  z-index: 101;
}   

.cs-modal-dossier-infos div {
  margin-bottom:5px;
}
```

### Game/Menu/Dossiers/index.js
```
import React, { Component } from 'react';
import Dossiers from '../../../GameData/Data/Dossiers';
import Config from '../../../GameData/Data/Config';
import './index.css';

class ModalDossiers extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      modalDossierShow: false, 
      dossiers: Dossiers
    };
  }
  
  componentDidMount() {
    
  }

  render() {
    const { lang, hideModalDossier, lastOpenDossier } = this.props;
    const Dossier = this.state.dossiers.filter(dossier => dossier[lang].id === lastOpenDossier);
    const display = Object.keys(Dossier[0][lang]).map(key => {
        if(key !=="id" && key !== "Miscellaneous" && key !== "picture") {
          return <div key={key}><b>{key}: </b><span>{Dossier[0][lang][key]}</span></div>;
        }
        return true;
      }
    );
    return(
      <div className="cs-modal-dossier" >
        <div className="cs-modal-dossier-inner">
          <header className="cs-modal-dossier-name">{Dossier[0][lang].name}</header>
          <article>
            <div className="cs-modal-dossier-picture"><img src={`https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/Dossiers/${Dossier[0][lang].picture}`} alt=""  /></div>
            <div className="cs-modal-dossier-infos">
              {display}
            </div>
          </article>
          <button className="cs-modal-dossier-close" type="button" onClick={() => hideModalDossier(true)}>{Config[lang].modals.close}</button>
        </div>
      </div>
    )
  }
} 

export default ModalDossiers;
```

### Game/Menu/index.css
```
.cs-no-padding {
  padding:0;
}

.bg-light {
  background-color: #FFF !important;
}

.navbar-light .navbar-nav .nav-link {
  color: #000
}
```

### Game/Menu/index.js
```
// import React, { Component } from 'react';
import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ModalDossiers from './Dossiers';
import ModalCredits from './Credits';
import './index.css';

function Menu(props) {
  const [modalDossier, setModalDossier] = useState(true);
  const [modalCredits, setModalCredits] = useState(true);
  const [saveDone, setSaveDone] = useState(true)
  const [lastOpenDossier, setLastOpenDossier] = useState(null);
  const { lang, user, step, userRank, changeLang, Dossiers, Config, saveStateToLocalStorage, hydratestateFromLocalStorage } = props;
  const menu = Config[lang].menu;
  return(
    <div className="container cs-no-padding" >
      <Navbar bg="light" expand="lg">
        { /* <Navbar.Brand onClick={() => setHidden(true)}>Carmen Sandiego {user}</Navbar.Brand> } */ }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"> 
            <NavDropdown title={menu.entry1.name} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => window.location.reload()} >{menu.entry1.item2}</NavDropdown.Item>
              <NavDropdown.Item disabled={step < 20 ? true : false}  onClick={() => { setSaveDone(false);setTimeout(() => {saveStateToLocalStorage();setSaveDone(true); }, 2000); }} >{menu.entry1.item3}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setTimeout(() => hydratestateFromLocalStorage(), 2000)} >{menu.entry1.item4} </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setModalCredits(false) }>{menu.entry1.item1}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={menu.entry2.name} id="basic-nav-dropdown">
              {Dossiers.map(dossier =>
                <NavDropdown.Item key={dossier[lang].id} onClick={() => { setModalDossier(false); setLastOpenDossier(dossier[lang].id); }}>{dossier[lang].name}</NavDropdown.Item>
              )}
            </NavDropdown>
            <NavDropdown title="Options" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => changeLang('en') }>{menu.entry3.item1}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLang('fr') }>{menu.entry3.item2} </NavDropdown.Item>
              {/*<NavDropdown.Item onClick={() => changeLang('fr') }>{menu.entry3.item3} </NavDropdown.Item>*/}
            </NavDropdown>
            {/*<Nav.Link href="#link">?</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
        <span className="navbar-text">
          {!saveDone ? Config[lang].menu.save : ''} {userRank} {user}
        </span>
      </Navbar>
      {
        !modalDossier 
        ? <ModalDossiers lang={lang} hideModalDossier={setModalDossier} lastOpenDossier={lastOpenDossier}></ModalDossiers>
        : ''
      }
      {
        !modalCredits
        ? <ModalCredits lang={lang} hideModalCredits={setModalCredits} ></ModalCredits>
        : ''
      }
      
    </div>
  );
}

// class Menu extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       isShowModalDossier: false,
//       lastOpenDossier: null
//     }
//   }

//   showModalDossier = () => this.setState({isShowModalDossier: true})
//   hideModalDossier = () => this.setState({isShowModalDossier: false})
//   openModalDossier = (id) => {
//     this.setState({lastOpenDossier: id});
//     this.showModalDossier();
//   } 

//   render() {
//     const { lang, user, userRank, changeLang  } = this.props;
//     const menu = Config[lang].menu;
//     return(
//       <div className="container cs-no-padding" >
//         <Navbar bg="light" expand="lg">
//           {/*<Navbar.Brand href="#home">Carmen Sandiego {user}</Navbar.Brand>*/}
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <NavDropdown title={menu.entry1.name} id="basic-nav-dropdown">
//                 <NavDropdown.Item onClick={() => window.location.reload()} >{menu.entry1.item2}</NavDropdown.Item>
//                 <NavDropdown.Item  disabled >{menu.entry1.item3}</NavDropdown.Item>
//                 <NavDropdown.Item disabled  >{menu.entry1.item4}</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item onClick={() => alert('Julien Verkest 2019 - ReactJS')}>{menu.entry1.item1}</NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown title={menu.entry2.name} id="basic-nav-dropdown">
//                 {Dossiers.map(dossier =>
//                   <NavDropdown.Item key={dossier[lang].id} onClick={() => this.openModalDossier(dossier[lang].id)}>{dossier[lang].name}</NavDropdown.Item>
//                 )}
//               </NavDropdown>
//               <NavDropdown title="Config" id="basic-nav-dropdown">
//                 <NavDropdown.Item onClick={() => changeLang('en') }>{menu.entry3.item1}</NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => changeLang('fr') }>{menu.entry3.item2} </NavDropdown.Item>
//                 {/*<NavDropdown.Item onClick={() => changeLang('fr') }>{menu.entry3.item3} </NavDropdown.Item>*/}
//               </NavDropdown>
//               {/*<Nav.Link href="#link">?</Nav.Link>*/}
//             </Nav>
//           </Navbar.Collapse>
//           <span className="navbar-text">
//             {userRank} {user}
//           </span>
//         </Navbar>
//         {
//           this.state.isShowModalDossier 
//           ? <ModalDossiers lang={lang} hideModalDossier={this.hideModalDossier} lastOpenDossier={this.state.lastOpenDossier}></ModalDossiers>
//           : ''
//         }
        
//       </div>
//     );
//   }
// } 

export default Menu;
```

### Game/Menu/index.stories.js
```
import React from 'react';

import { storiesOf } from '@storybook/react';
import Dossiers from '../../GameData/Data//Dossiers';
import Config from '../../GameData/Data/Config';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Menu  from './';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

//  <Menu user={user} step={step} saveStateToLocalStorage={this.saveStateToLocalStorage} hydratestateFromLocalStorage={this.hydratestateFromLocalStorage}  Dossiers={Dossiers} Config={Config} lang={lang} changeLang={this.changeLang} userRank={userRank}></Menu>
        

storiesOf('Menu', module)
  .add('with text', () => <Menu Dossiers={Dossiers} Config={Config} lang="en" userRank="Rookie"></Menu>);
```

### Game/Modals/Clues/index.css
```
.cs-modal-clues {
  position: absolute;
  z-index: 6;
  max-width: 650px;
  width: 650px;
  margin: 0 auto;
  left: 50%;
  margin-left: -500px;
  top:150px;
  max-height: auto;
  height: auto;
  overflow: auto;
  background-color: #000;
  border: 5px solid #fff;
}

.cs-modal-clues-places > div {
  text-transform:uppercase;
  padding-bottom:2px;
  padding-top:2px;
  cursor:pointer;
}

.cs-modal-clues-places > div:hover {
  background:#fff;
  color:#000;
}

.cs-modal-clues-emoji {
  font-size:100px;
  margin-left:50px;
  padding-bottom: 25px;
  border-bottom:5px solid black;
    -webkit-transition: border-color .2s;
  -moz-transition: border-color .2s;
  -o-transition: border-color .2s;
  transition: border-color .2s;
}

.cs-modal-clues-places {
  margin-top:40px;
}

.cs-selected {
  border-bottom:5px solid #FFF;
}

/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-modal-clues {
    max-width: auto;
    width: 99%;
    top:-30px;
    margin-left:0;
    left:0;
  }
  .cs-modal-clues-emoji {
    font-size:70px;
    margin-left:20px;
  }
}
```

### Game/Modals/Clues/index.js
```
import React, { Component } from 'react';
import Config from '../../../GameData/Data/Config'; 
import './index.css';

class ModalClues extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      modalCluesShow: false,
      selectedItem: ''
    };
  }

  viewClue = (clue) => {
    this.props.hideModalClue();
    this.props.viewClue(clue);
  }

  viewArrest = () => {
    this.props.hideModalClue();
    this.props.viewArrest();
  }



  hov = (clue) => this.setState({selectedItem: clue});
  out = () => this.setState({selectedItem: ''});

  emoji = (place) => {
    let emoji;
    switch(place) {
    case 'museum': 
      emoji = '🏤';
      break;
    case 'airport': 
      emoji = '🛬';
      break;
    case 'hotel': 
      emoji = '🏨';
      break;
    case 'palace': 
      emoji = '🏯';
      break;
    case 'bank': 
      emoji = '🏦';
      break;
    case 'library': 
      emoji = '📘';
      break;
    case 'foreignministry': 
      emoji = '🏢';
      break;
    case 'riverfront': 
      emoji = '🚢';
      break;
    case 'harbor':
      emoji = '⚓️';
      break;
    default:
      emoji = '⛱' 
      break;
    }
    return emoji;
  }

  render() {
    const { lang, clues, hideModalClue } = this.props;

    return(
      <div className="cs-modal-clues" >
        <div className="cs-modal-clues-inner">
          <div className="cs-modal-clues-building">
          {clues.map((clue, index) => 
            <span key={index} onClick={() => clue.Clue === '' ? this.viewArrest() : this.viewClue(clue)} data-key={index} role="img" className={clue.Place.key === this.state.selectedItem ? "cs-modal-clues-emoji cs-selected" : "cs-modal-clues-emoji"} aria-label="emoji">{this.emoji(clue.Place.key)}</span>
          )} 
          </div>
          {
            clues.length === 0 ? <div className="cs-modal-clues-places">no clue here...</div> : ''
          }
          <div className="cs-modal-clues-places">
            {clues.map((clue, index) =>
              <div key={index} data-key={index} onMouseOver={() => this.hov(clue.Place.key)} onMouseOut={() => this.hov(clue.Place.key)} onClick={() => clue.Clue === '' ? this.viewArrest() : this.viewClue(clue)}>{clue.Place.value}</div>
            )}
          </div>
          <br/>
          <button className="cs-modal-clues-close" type="button" onClick={() => hideModalClue()}>{Config[lang].modals.close}</button><br/><br/>
        </div>
      </div>
    )
  }
}

export default ModalClues;
```

### Game/Modals/Crime/compute.gif (binary)

### Game/Modals/Crime/computer.jpg (binary)

### Game/Modals/Crime/index.css
```
.cs-crime {
  height:300px;
  position: absolute;
  z-index: 6;
  max-width: 417px;
  width: 417px;
  margin: 0 auto;
  right:120px;
  top:85px;
  height:391px;
  max-height: 391px;
  overflow: none;
  background-color: #000;
  background-size: contain;
  color:yellow;
}

.cs-crime-inner {
  display:none;
}

.cs-crime-inner.cs-crime-block {
  display:block
}

.cs-crime-form-item {
  text-align: left;
  margin: 2px 5px 0 55px;
}

.cs-crime-form-item:first-child {
  margin-top:20px;
}

.cs-crime-form-item label {
  margin-right:10px;
  width:125px;
  letter-spacing: -1px;
  text-transform: uppercase;
}

.cs-crime-form-item select {
  width: 185px;
  font-size:.9rem;
}

.cs-modal-crime-close {
  margin-left:10px;
}

.cs-crime-compute-gif {
  display:none;
  width: 117px;
  height: 19px;
  bottom: 117px;
  position: absolute;
  z-index:7;
  left: 151px;
}
.cs-crime-compute-gif.cs-crime-computing-gif {
  display:block;
}

/* list suspicious */
.cs-warrant {
  display:none;
  font-size:12px;
}

.cs-warrant.cs-warrant-block {
  display:block;
}

.cs-warrant-inner {
  margin: 25px 45px 0 45px;
}

/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-crime {
    max-width: auto;
    width: 99%;
    background-image:none !important;
    margin-left:0;
    left:0;
    top:0;
  }
  .cs-crime-form-item select {
    width: 170px;
  }
  .cs-crime-compute-gif {
    bottom: 124px;
    left: 146px;
    background-image:none !important;
  }
  .cs-modal-crime-compute,
  .cs-modal-crime-close {
    font-size:14px;
  }
  .cs-crime-form-item:first-child {
    margin-top:25px;
  }

  .cs-crime-form-item label {
    margin-right:10px;
    width:125px;
    letter-spacing: -1px;
    text-transform: uppercase;
  }

  .cs-crime-form-item select {
    width: 185px;
    font-size:.9rem;
  }
}
```

### Game/Modals/Crime/index.js
```
/* eslint no-eval: 0 */
import React, { Component } from 'react';
import Config from '../../../GameData/Data/Config';
import Dossiers from '../../../GameData/Data/Dossiers';
import computer from './computer.jpg';
import computeGif from './compute.gif';
// import warrant from './warrant.jpg';

import './index.css';

class Crime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideWarrant: true,
      sex: '',
      hobby: '',
      hair: '',
      feature: '',
      vehicule: '',
      suspicious: [],
      computing: false 
    } 
    
    this.handleChange = this.handleChange.bind(this);
    this.compute = this.compute.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = Array.from(event.target.selectedOptions, item => item.value)[0];
    this.setState({[name]: value});
  }

  async compute() {
    const { sex, hobby, hair, feature, vehicule } = this.state;
    if(sex !== '' || hobby !== '' || hair !== '' || feature !== '' || vehicule !== '') {
      await this.setState({computing: true});
      await this.props.changeDate(2);
      this.setState({hideWarrant: false});
      this.props.changeSex(sex);
      this.props.changeHobby(hobby);
      this.props.changeHair(hair);
      this.props.changeFeature(feature);
      this.props.changeVehicule(vehicule);
      const DossiersSexFilter = sex ? Dossiers.filter(item => item[this.props.lang].sex.toLowerCase() === sex.toLowerCase()) : Dossiers;
      const DossiersHobbyFilter = hobby ? DossiersSexFilter.filter(item => item[this.props.lang].hobby.toLowerCase().includes(hobby.toLowerCase())) : DossiersSexFilter;
      const DossiersHairFilter = hair ? DossiersHobbyFilter.filter(item => item[this.props.lang].hair.toLowerCase().includes(hair.toLowerCase())) : DossiersHobbyFilter;
      const DossiersFeatureFilter = feature ? DossiersHairFilter.filter(item => item[this.props.lang].feature.toLowerCase().includes(feature.toLowerCase())) : DossiersHairFilter;
      const DossiersVehiculeFilter = vehicule ? DossiersFeatureFilter.filter(item => item[this.props.lang].vehicule.toLowerCase().includes(vehicule.toLowerCase())) : DossiersFeatureFilter;
      const suspicious = [];
      DossiersVehiculeFilter.map((item, index) => 
        suspicious.push(item[this.props.lang])
      )
      this.setState({suspicious: suspicious});
      suspicious.length === 1 ? this.props.changeWarrant(this.state.suspicious[0].name) : this.props.changeWarrant('');
      await this.setState({computing: false});
    }
  }

  componentDidMount() {
    this.props.viewCrime();

    // init 
    const { sex, hobby, hair, feature, vehicule } = this.props;
    this.setState({sex: sex});
    this.setState({hobby: hobby});
    this.setState({hair: hair});
    this.setState({feature: feature});
    this.setState({vehicule: vehicule}); 
  }

  render(){
    const { lang, hideModalCrime } = this.props;
    const { sex, hobby, hair, feature, vehicule, computing } = this.state;
    const crimeOptions = Config[lang].crime;
    return(
      <div className="cs-crime" style={{backgroundImage:`url(${computer})`}}>
        <div className={computing ? 'cs-crime-compute-gif cs-crime-computing-gif' : 'cs-crime-compute-gif'} style={{backgroundImage:`url(${computeGif})`}}></div>
        <div className={this.state.hideWarrant ? 'cs-crime-inner cs-crime-block' : 'cs-crime-inner'} >
          <form  >   
          {crimeOptions.map((item, key) =>            
            <div key={key} className="cs-crime-form-item">
              <label>{crimeOptions[key].label}</label>
              <select name={crimeOptions[key].key} onChange={this.handleChange} value={eval(crimeOptions[key].key) !== '' ? eval(crimeOptions[key].key) : undefined}  >
                  <option key="0" value=""></option>
                {crimeOptions[key].options.map((item,idx) => 
                  <option key={idx} value={item.key} >{item.value}</option>
                )}
              </select>
            </div>
          )}
          </form>
          <button className="cs-modal-crime-compute" type="button"  onClick={() => this.compute()}>{Config[lang].modals.compute}</button>
          <button className="cs-modal-crime-close" type="button" onClick={() => hideModalCrime()}>{Config[lang].modals.close}</button>
        </div>
        <div className={this.state.hideWarrant ? 'cs-warrant' : 'cs-warrant cs-warrant-block'} >
          <div className="cs-warrant-inner">
              {
                this.state.suspicious.length > 1
                ? <div>{this.state.suspicious.length} {Config[lang].warrant.suspects} {this.state.suspicious.map((suspicious, i) => <div key={i}>{suspicious.name}</div>)}  </div>
                : ''
              } 
              { 
                this.state.suspicious.length === 0
                ? <div>{Config[lang].warrant.none}<br/>{Config[lang].warrant.nowarrant}</div>
                : ''
              }
              {
                this.state.suspicious.length === 1
                ? <div>
                    {Config[lang].warrant.arrestwarrant}<br/>
                    {Config[lang].warrant.arrest} {this.state.suspicious[0].name}
                    <br/><br/>
                    <img width="50" src={`https://julien-verkest.fr/carmen-sandiego-reactjs/assets/Dossiers/${this.state.suspicious[0].picture}`} alt=""  />
                  </div>
                : ''
              }
            <br/><br/><button onClick={() => this.setState({hideWarrant: true})}>{Config[lang].buttons.back}</button>
            <button className="cs-modal-crime-close" onClick={() => hideModalCrime()}>{Config[lang].modals.close}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Crime;
```

### Game/Modals/Destinations/index.css
```
.cs-modal-destinations {
  position: absolute;
  z-index: 6;
  max-width: 450px;
  width: 450px;
  margin: 0 auto;
  left: 50%;
  margin-left: -700px;
  top: 70px;
  max-height: auto;
  height: auto;
  overflow: auto;
  background-color: #000;
  border: 5px solid #fff;
}

.cs-modal-destinations-inner > div {
  text-transform:uppercase;
  padding-bottom:2px;
  padding-top:2px;
}
.cs-modal-destinations-inner > div.btn-depart {
  cursor:pointer;
}
.cs-modal-destinations-inner > div.btn-depart:hover {
  background:#fff;
  color:#000;
}

/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-modal-destinations {
    max-width: auto;
    width: 99%;
    top: 120px;
    margin-left:0;
    left:0;
  }
}
```

### Game/Modals/Destinations/index.js
```
import React, { Component } from 'react';
import Config from '../../../GameData/Data/Config';
import './index.css';

class ModalDestinations extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      modalDestinationsShow: false
    };
  }
    render() {
    const { lang, destinations, depart, hide, goTo, hoverTo } = this.props;
    return(
      <div className="cs-modal-destinations" >
        <div className="cs-modal-destinations-inner">
          {
            depart 
            ? destinations.map((item, index) =>
                <div className="btn-depart" key={index} onMouseOver={() => hoverTo(item)} onMouseOut={() => hoverTo('')} onClick={() => goTo(item) }>{item}</div>
              )
            : destinations.map((item, index) =>
                <div  key={index} >{item}</div>
              )
          }
          <br/>
          <button className="cs-modal-destinations-close" type="button" onClick={() => hide()}>{Config[lang].modals.close}</button><br/><br/>
        </div>
      </div>
    )
  }
}

export default ModalDestinations;
```

### Game/Modals/Map/index.css
```
.cs-modal-map {
  position: absolute;
  z-index: 6;
  max-width: 960px;
  width: 960px;
  margin: 0 auto;
  left: 50%;
  margin-left: -700px;
  min-height:339px;
  top: 250px;
  max-height: auto;
  height: auto;
  overflow:hidden;
  background-color: #FFF;
  border: 5px solid #FFF;
}

.cs-modal-map-inner > div {
  position: absolute;
  width:960px;
  height:339px;
  z-index: 7;
  font-size:11px;
  color: #FFF;
  text-shadow:1px 1px 5px #000;
  top: 0;
  left: 0;
}

.cs-modal-map-inner > div > div {
  position: absolute;
  z-index: 9;
  -webkit-transition: color .3s, font-size .3s;
  -moz-transition: color .3s, font-size .3s;
  -o-transition: color .3s, font-size .3s;
  transition: color .3s, font-size .3s;
}

.depart {
  color:yellow;

}

#hovDestination {
  font-weight:bold;
  font-size:20px;
  background-color: #000;
}

.cs-plane {
  display:none;
  font-size:50px;
}

.cs-plane.cs-active {
  animation-duration:3s;
  display:block;
  animation-name: plane;
  animation-direction: alternate;
  animation-iteration-count: 2;
}

@keyframes plane {
  from {
    left:0;
    bottom:0;
  }
}
 
.paris {
  bottom: 200px;
  left: 450px;
}

.cs-plane.cs-active.paris {
  animation-name: paris;
}

@keyframes paris {
  from {
    bottom: 200px;
    left: 450px;
  }
}

.tokyo {
  bottom:175px;
  left: 780px;
}

.cs-plane.cs-active.tokyo {
  animation-name: tokyo;
}

@keyframes tokyo {
  from {
    bottom:175px;
    left: 780px;
  }
}

.oslo {
  bottom: 230px;
  left: 470px;
}

.cs-plane.cs-active.oslo {
  animation-name: oslo;
}

@keyframes oslo {
  from {
    bottom: 230px;
    left: 470px;
  }
}

.reykjavik {
  bottom: 250px;
  left: 400px;
}

.cs-plane.cs-active.reykjavik {
  animation-name: reykjavik;
}

@keyframes reykjavik {
  from {
    bottom: 250px;
    left: 400px;
  }
}

.london {
  bottom: 210px;
  left: 430px;
}

.cs-plane.cs-active.london {
  animation-name: london;
}

@keyframes london {
  from {
    bottom: 210px;
    left: 430px;
  }
}

.baghdad {
  bottom: 150px;
  left: 550px;
}

.cs-plane.cs-active.baghdad {
  animation-name: baghdad;
}

@keyframes baghdad {
  from {
    bottom: 150px;
    left: 550px;
  }
}

.moscow {
  bottom: 220px;
  left: 530px;
}

.cs-plane.cs-active.moscow {
  animation-name: moscow;
}

@keyframes moscow {
  from {
    bottom: 220px;
    left: 530px;
  }
}

.bamako {
  bottom: 145px;
  left: 420px;
}

.cs-plane.cs-active.bamako {
  animation-name: bamako;
}

@keyframes bamako {
  from {
    bottom: 145px;
    left: 420px;
  }
}

.athens {
  bottom: 175px;
  left: 495px;
}

.cs-plane.cs-active.athens {
  animation-name: athens;
}

@keyframes athens {
  from {
    bottom: 175px;
    left: 495px;
  }
}

.cairo {
  bottom: 160px;
  left: 500px;
}

.cs-plane.cs-active.cairo {
  animation-name: cairo;
}

@keyframes cairo {
  from {
    bottom: 160px;
    left: 500px;
  }
}

.rome {
  bottom: 185px;
  left: 470px;
}

.cs-plane.cs-active.rome {
  animation-name: rome;
}

@keyframes rome {
  from {
    bottom: 185px;
    left: 470px;
  }
}

.colombo {
  bottom: 125px;
  left: 638px;
}

.cs-plane.cs-active.colombo {
  animation-name: colombo;
}

@keyframes colombo {
  from {
    bottom: 125px;
    left: 638px;
  }
}

.riode.janeiro {
  bottom: 75px;
  left: 315px;
}

.cs-plane.cs-active.riode.janeiro {
  animation-name: janeiro;
}

@keyframes janeiro {
  from {
    bottom: 75px;
    left: 315px;
  }
}


/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-modal-map {
    visibility: hidden;
  }
}
```

### Game/Modals/Map/index.js
```
import React, { Component } from 'react';
import worldmap from './map-2.jpg';
// import styled from 'styled-components'
import './index.css';


class ModalMap extends Component {
  constructor(...args) {
    super(...args);
    this.myDiv = null;
    this.state = { 
      modalMapShow: false,
      styleArrivee: {},
      animationName: '',
      xArrivee: 0,
      yArrivee: 0
    };
    this.mymap = element => {
      this.myDiv = element;
    }; 
  }

  // on renvoi un tableau d'objet { city:'Ville', x: positionX, y:positionY} des points de la carte
  componentDidMount() {
    let markers = [];
    let depart = {
      'city': 'depart',
      'x': this.myDiv.getElementsByClassName('depart')[0].offsetLeft,
      'y': 339 - this.myDiv.getElementsByClassName('depart')[0].offsetTop
    }

   // console.log('Depart:'+ depart)

    this.props.destinations.forEach((item, index) => {
      let marker = {
        'city': item,
        'x': this.myDiv.getElementsByClassName(item.toLowerCase().replace(' ', ''))[0].offsetLeft,
        'y':339 - this.myDiv.getElementsByClassName(item.toLowerCase().replace(' ', ''))[0].offsetTop
      };
      markers.push(marker)
    });
    markers.push(depart);
    this.props.changeMarkersDestinations(markers);
  }

  render() {
    const { cityStart, destinations, hoverDestination, isPlane } = this.props;
    const departClasses = `depart ${cityStart.toLowerCase().replace(' ', '')}`;
    // const planeClasses = isPlane ? `cs-plane cs-active ${cityStart.toLowerCase().replace(' ', '')}` : 'cs-plane';
    let xArrivee = 0;
    let yArrivee = 0;
     if(this.props.isPlane) {
      xArrivee = this.myDiv.getElementsByClassName(this.props.place.toLowerCase().replace(' ', ''))[0].offsetLeft;
      yArrivee = 339 - this.myDiv.getElementsByClassName(this.props.place.toLowerCase().replace(' ', ''))[0].offsetTop;
    }
    return(
      <div className="cs-modal-map" id="worldmap">
        <div className="cs-modal-map-inner">
          <img src={worldmap} alt="world map" />
          <div ref={this.mymap}>
            <div className={departClasses}>{cityStart}</div>
            {destinations.map((item, index) =>
              <div id={hoverDestination && hoverDestination.toLowerCase().replace(' ', '') === item.toLowerCase().replace(' ', '') ? 'hovDestination' : ''} className={item.toLowerCase().replace(' ', '')} key={index} >⦿{item}</div>
            )} 
            {
              isPlane
              ? <Plane cityStart={cityStart} isPlane={isPlane} xArrivee={xArrivee} yArrivee={yArrivee}></Plane>
              : ''
            }
          </div>
        </div>
      </div>
    )
  }
}

class Plane extends Component {
  render() {
    let style = {};
    if(this.props.isPlane) {
      style = {
        left:`${this.props.xArrivee}px`,
        bottom: `${this.props.yArrivee}px` 
      }
    }
    const { cityStart, isPlane } = this.props;
    const planeClasses = isPlane ? `cs-plane cs-active ${cityStart.toLowerCase().replace(' ', '')}` : 'cs-plane';
    return (
      <div className={planeClasses} style={style}>
        <span role="img" aria-label="emoji">✈️</span>
      </div>
    )
  }
}

export default ModalMap;
```

### Game/Modals/Map/map-2.jpg (binary)

### Game/Modals/Map/map.jpg (binary)

### Game/Modals/Picture/index.css
```
.cs-picture {
  width:465px;
}

/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-picture {
    width:100%;
  }
}
```

### Game/Modals/Picture/index.js
```
import React, { Component } from 'react';
import './index.css';

class Picture extends Component {
  render() {
    const { place } = this.props;
    const picture = "https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/Cities/" + place.toLowerCase().replace(" ","") + ".jpg";
    return (
      <div>
        <img src={picture} alt="" className="cs-picture" />
      </div>
    )
  }
}

export default Picture;
```

### Game/PlaceAndDate/clock-2.mp3 (binary)

### Game/PlaceAndDate/index.css
```
.cs-zone-1 {
  height:80px;
  color:#fff;
}

/* HEADQUARTERS */
.cs-zone-1 .cs-zone-inner {
  padding:7px 0 0 0;
}

.cs-place-date {
  text-align:center;
  font-weight: bold;
  font-size:18px;
  line-height:22px;
  letter-spacing:2px;
}

.cs-place {
  text-transform: uppercase;
  margin-top:5px;
}
```

### Game/PlaceAndDate/index.js
```
import React, { Component } from 'react';
import './index.css';

class PlaceAndDate extends Component {
  render(){
    const { place, mydate } = this.props;
    let myPlace = (mydate.getHours() > 22 || mydate.getHours() < 8) ? 'sleeping...' : place; 
    return (
      <div>
        <div className="cs-place" style={{textTransform:'uppercase'}}>{myPlace}</div>
        <div className="cs-date">{mydate.toLocaleDateString('en-US', { weekday: 'long', hour: 'numeric' })} </div>
      </div>
    );
  }
}

export default PlaceAndDate;
```

### Game/Vilain/index.css
```
.cs-vilain {
  height: 90%;
  width: 90%;
  margin: 2% 5%;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 0;
  opacity: .3;
}

.cs-hache {
  height: 90%;
  width: 90%;
  margin: 2% 5%;
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 0;
  opacity: .8;
}

/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-vilain,
  .cs-hache {
    opacity:1;
    top:0px;
    width:99%;
    height:200px;
    margin:0;
  }
  .cs-vilain video,
  .cs-hache video {
    width:100%;
    height:200px;
  }
}
```

### Game/Vilain/index.js
```
import React, { Component } from 'react';
// import hache from './hache.mp4';
// import vilain1 from './vilain-1.mp4';
// import vilain2 from './vilain-2.mp4';
// import vilain3 from './vilain-3.mp4';
import './index.css';

class Vilain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      vilain: null
    }
    this.myVideo = null;
    this.setMyVideo = element => {
      this.myVideo = element;
    }; 
  }

  componentDidMount() {
    const { userCase, userStep, Cases, lang } = this.props;
    const vilain1 = "https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/vilain/vilain-1-compress.mp4";
    const vilain2 = "https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/vilain/vilain-2-compress.mp4";
    const vilain3 = "https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/vilain/vilain-3-compress.mp4";
    const hache = "https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/vilain/hache-compress.mp4";
    const gun = "https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/vilain/gun-compress.mp4";
    let weapon = Math.floor(Math.random() * 2) + 1;
    weapon = weapon === 1 ? gun : hache; 
    if(userStep > 0 && userStep < Cases[userCase][lang].steps.length - 1) {
      if(userStep % 3 === 0) { 
        this.setState({vilain: vilain3});
      } else if(userStep % 2 === 0) { 
        this.setState({vilain: vilain2});
      }
      else {
        this.setState({vilain: vilain1});
      }
      
    } else if (this.state.display && Cases[userCase][lang].steps.length - 1 === userStep) {

      this.setState({vilain: weapon});
    }
    else {
      this.setState({vilain: vilain1});
    }

    if(this.myVideo) {
      let that = this;
      this.myVideo.onended = function(e) {
        that.displayFalse();
      };
    }
  }

  displayFalse = () => {
    this.props.changeVilainPlayed();
    this.setState({display: false});
  }

  render() {
    return(
      <div>
        {
          this.state.display
          ? <div className="cs-hache">
              <video width="600" autoPlay height="440" ref={this.setMyVideo}>
                  <source src={this.state.vilain} type="video/mp4"></source>
              </video>
            </div>
          : ''
        }
      </div>
    );
  }
}

export default Vilain;
```

### Game/WrongDestination/index.js
```
import React, { Component } from 'react';
import '../ClueBubble/index.css';

class WrongDestination extends Component {
  render() {
    const { clue } = this.props; 
    return(
      <div className="cs-bubble-wrapper">
        <div className="cs-bubble-inner">
          <div className="cs-bubble">{clue.Clue}</div>
            <div className="cs-guy">
              {
                clue.Guy.key === 'curator'
                ? <span role="img" className="cs-emoji" aria-label="emoji">🤷</span>
                : ''
              }
              <br/>{clue.Guy.value}
          </div>
        </div> 
      </div>
    );
  }
}

export default WrongDestination;
```

### Game/index.css
```
/*#cs {
  height:600px;
  max-height:600px;
  margin-top:10px;
}  */

.cs-zone {
  box-shadow:5px 5px #000;
  border:1px solid #000;
}

.cs-zone-inner {
  border:3px solid #FFF;
  background-color:#000;
  height:100%;
}

.cs-zone-1,
.cs-zone-4 {
  height:80px;
  color:#fff;
}

.cs-zone-4 {
  height:120px;
  color:#fff;
}


.cs-zone-2 {
  height:520px;
}

/* ZONE 3 BUBBLE + CRIME */
.cs-zone-3 {
  height:480px;
}

.cs-description {
  color:#fff;
  padding:20px;
  font-size:20px;
}

.row > div {
  padding-left:0;
  padding-right:1px;
}

/* ZONE 4 */
.cs-zone-4 .cs-zone-inner {
  text-align:center; 
  background-color:#fff;
}

.mb-8 {
  margin-bottom:20px;
}

.mb-4 {
  margin-bottom:10px;
}

.mb-0 {
  margin-bottom:0;
}

button {
  background-color: #f4fc67;
  box-shadow:2px 2px #000;
  border:1px solid #000;
  outline:none;
}

button:hover {
  box-shadow:5px 5px #000;
}

button:focus {
  outline:0 !important;
}

/* Mobile */ 
@media only screen and (max-width: 600px) {
  .cs-zone-2 {
    max-height: 300px;
  }

  /* ZONE 3 BUBBLE + CRIME */
  .cs-zone-3 {
    max-height:300px;
    height:300px;
  }
  .cs-description {
    color:#fff;
    padding:20px 10px;
    font-size:14px;
  }

  .cs-zone-4 {
    height:auto;
  }
}
```

### Game/index.js
```
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import Instructions from './Instructions';
import PlaceAndDate from './PlaceAndDate';
import Buttons from './Buttons';
import Debug from '../Debug';
// import moment from 'moment';
import Cases from '../GameData/Data/Cases';
import Config from '../GameData/Data/Config';
import Dossiers from '../GameData/Data/Dossiers';
import Picture from './Modals/Picture';
import ClueBubble from './ClueBubble';
import WrongDestination from './WrongDestination';
import Arrest from './Arrest';
import soundClock from './PlaceAndDate/clock-2.mp3';
import './index.css';

/* with moment 
const startDate = moment('2019-03-25 09');
const endDate = moment('2019-03-31 17');
*/

/* without momentJS
let startDate = new Date('March 25, 2019 09:00:00')
startDate.setHours(startDate2.getHours() + 2)
startDate.toLocaleDateString('en-US', { weekday: 'long', hour: 'numeric' });

let endDate = new Date('March 31, 2019 17:00:00')

*/

const startDate = new Date('March 25, 2019 09:00:00');
const nextDate = new Date('March 25, 2019 09:00:00');
const endDate = new Date('March 31, 2019 17:00:00');

const initialState = {
  user: 'tptp',
  userCase: 0, // First arg is the n° case Cases[0][this.state.lang].steps[0]
  userStep: 0, //  second arg n° step :  Cases[0][this.state.lang].steps[0]
  lang: 'en',
  isUserValid: false,
  isNewUser: true,
  userRank: 'Rookie',
  step: 20,
  place: 'Headquarters',
  mydate: startDate,
  nextdate: nextDate,
  isViewClue: false,
  isViewCrime: false,
  isViewArrest: false,
  isWrongDestination: false,
  tmpDestination: '',
  isExpirationTime: false,
  clue: '',
  warrant: null,
  sex: '',
  hobby: '',
  hair: '',
  feature: '',
  vehicule: '',
  HISTORY: []
};

class Interface extends Component {
  constructor(props){
    super(props);
    this.state = initialState

    this.mySoundClock = null;
    this.setMySoundClock = element => {
      this.mySoundClock = element;
    };
    this.playSoundClock = this.playSoundClock.bind(this);
    this.pauseSoundClock = this.pauseSoundClock.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeStep = this.onChangeStep.bind(this);
    this.createUser = this.createUser.bind(this);
    this.loadUser = this.loadUser.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.wait = this.wait.bind(this);
    this.viewClue = this.viewClue.bind(this);
  }

  componentDidMount() {
    this.onChangeStep(20);
  }

  /*
   ** USER STEPS 
  */
  onChangeUser(event) {
    if(event.target.value.length > 1) {
      this.setState({isUserValid: true})
    }
    this.setState({ user: event.target.value });
  }

  onChangeStep(step) {
    this.setState({ step: step });
    if(step === 20) {
      this.changePlace(Cases[this.state.userCase][this.state.lang].steps[this.state.userStep].city.name);
    }
  }

  createUser() {
    // TO DO createUSER in Database or IndexDB
    this.setState({ isNewUser: true });
    this.onChangeStep(7);
  }

  loadUser() {
    // TO DO check if user exists in Database or IndexDB
    this.setState({ isNewUser: false });
    this.onChangeStep(7);
  }

  // SOUND
  playSoundClock() {
    this.mySoundClock.play(); 
  } 

  pauseSoundClock() { 
    this.mySoundClock.pause(); 
  }

  /* 
   * GAME
  */
  async wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  // Display a clue consume 2 hours 
  async viewClue(clue) {
    await this.changeDate(2);
    await this.setState({ clue: clue});
    await this.setState({ isViewClue: true});

    // history
    let copyHISTORY = [...this.state.HISTORY];
    const name = clue.Place.key;
    copyHISTORY[this.state.HISTORY.length-1][name] = clue; 
    this.setState({HISTORY: copyHISTORY});
  }  

  // Display a clue consume 2 hours
  viewArrest = () => {
    this.setState({isViewArrest: true});
    this.onChangeStep(21);
  }

  // Hide Clue
  hideClue = () => this.setState({ isViewClue: false});

  // Display Crime
  viewCrime = () => this.setState({isViewCrime: true});
  changeSex = (sex) => this.setState({sex: sex});
  changeHair = (hair) => this.setState({hair: hair});
  changeHobby = (hobby) => this.setState({hobby: hobby});
  changeVehicule = (vehicule) => this.setState({vehicule: vehicule});
  changeFeature = (feature) => this.setState({feature: feature});

  // Hide Crime
  hideCrime = () => this.setState({isViewCrime: false});

  // Config Change lang
  changeLang = (lang) => this.setState({ lang: lang });
  
  // Change Place
  changePlace = (place) => {
    this.setState({ place: place});

    // history
    this.setState({HISTORY: [...this.state.HISTORY, { place } ]});
  } 

  async changeDate(hours) {
    // Sleeping // Add hours if > 10pm, case go on at 8am
    // const prevMyDate = moment(this.state.mydate);
    // const nextMyDate = moment(this.state.mydate).add(hours, 'hours');

    this.state.nextdate.setHours(this.state.mydate.getHours() + hours);
    this.setState({nextdate: this.state.nextdate})

    let speed = 500;
    if(this.state.nextdate.getHours() > 22 || (this.state.nextdate.getHours() < this.state.mydate.getHours())) {
      if(this.state.nextdate.getHours() === 23) {
        hours = hours + 9;
      }
      if(this.state.nextdate.getHours() === 24) {
        hours = hours + 8;
      }
      if(this.state.nextdate.getHours() < this.state.mydate.getHours()) {
       hours = hours + 8 - this.state.nextdate.getHours();
      }
      speed = 200;
    }

    // Add hours 
    for (let i=1;i<=hours;i++) {
      this.playSoundClock();
      await this.wait(speed);
      await this.setState({ mydate: new Date(this.state.mydate.setHours(this.state.mydate.getHours() + 1)) }); 
      this.checkExpirationDate();
      this.pauseSoundClock();
    }
  } 

  checkExpirationDate = () => {
    // if(moment(this.state.mydate).isAfter(endDate)) {
    if(this.state.mydate.getTime() > endDate.getTime()) {
      this.onChangeStep(21);
      this.setState({ isExpirationTime: true});
    }
  }

  // Change Warrant
  changeWarrant = (warrant) => this.setState({warrant: warrant});

  // Check destination
  checkDestination = (destination) => {
    if(this.state.isWrongDestination) {
      this.setState({isWrongDestination: false});
      this.setState({tmpDestination: ''});
    }
    else if(Cases[this.state.userCase][this.state.lang].steps[this.state.userStep + 1].city.name === destination) {
      this.nextDestination();
    } else {
      this.setState({isWrongDestination: true});
      this.setState({tmpDestination: destination});
    }
  }

  nextDestination = () => this.setState({userStep: this.state.userStep + 1});

  nextCase = () => this.setState({userCase: this.state.userCase + 1});

  // Restart to step 20
  restart = () => {
    const { user } = this.state;
    this.setState(initialState);
    this.setState({HISTORY: []});
    this.setState({userStep:0});
    this.setState({user: user});
    this.setState({step: 20});
    this.changePlace(Cases[this.state.userCase][this.state.lang].steps[0].city.name);
  }

  saveStateToLocalStorage = (nme) => {
    let mySave = 'mysave';
    localStorage.setItem(mySave, JSON.stringify(this.state));
  }

  hydratestateFromLocalStorage = () => {
    if (localStorage.hasOwnProperty('mysave')) {
      let value = JSON.parse(localStorage.getItem('mysave'));
      value.mydate = new Date(value.mydate)
      value.nextdate = new Date(value.nextdate)
      this.setState(value)
    }
  }

  render() {
    const { user, lang, isUserValid, isNewUser, userRank, step, mydate, place, isViewClue, clue, userCase, userStep, isWrongDestination, tmpDestination, isExpirationTime, isViewCrime, isViewArrest, sex, hair, vehicule, feature, hobby, warrant, HISTORY } = this.state
    return (
      <div>
        <Menu user={user} step={step} saveStateToLocalStorage={this.saveStateToLocalStorage} hydratestateFromLocalStorage={this.hydratestateFromLocalStorage}  Dossiers={Dossiers} Config={Config} lang={lang} changeLang={this.changeLang} userRank={userRank}></Menu>
        <Container>
          <Row id="cs">
            <Col md="5">
              <section className="cs-zone cs-zone-1 cs-place-date">
                <div className="cs-zone-inner">
                  <PlaceAndDate place={place} mydate={mydate} lang={lang} Cases={step === 20 ? Cases : ''}></PlaceAndDate>
                </div>
              </section>
              <section className="cs-zone cs-zone-2">
                <div className="cs-zone-inner" >
                  {
                    step !== 20
                    ?  <Instructions 
                          onChangeStep={this.onChangeStep}
                          onChangeUser={this.onChangeUser}
                          isUserValid={isUserValid}
                          user={user}
                          isNewUser={isNewUser}
                          userRank={userRank}
                          step={step}
                          createUser={this.createUser}
                          loadUser={this.loadUser}
                          Cases={Cases}
                          lang={lang}
                          userCase={userCase}
                          userStep={userStep}
                          Config={Config}
                          warrant={warrant}
                          isExpirationTime={isExpirationTime}
                          restart={this.restart}
                        >
                        </Instructions>
                    : ''
                  }
                  {
                    step === 20 
                    ? <Picture place={place} ></Picture>
                    : ''
                  }
                </div>
              </section>
            </Col>
            <Col md="7">
              <section className="cs-zone cs-zone-3">
                <div className="cs-zone-inner">
                {
                  isViewArrest
                  ? <Arrest warrant={warrant} Cases={Cases} lang={lang}  userCase={userCase} userStep={userStep} onChangeStep={this.onChangeStep}></Arrest>
                  : ''
                }

                {
                  isViewClue
                  ? <ClueBubble clue={clue} HISTORY={HISTORY} Cases={Cases} lang={lang} userCase={userCase} userStep={userStep}></ClueBubble>
                  : ''
                }
                {
                  isWrongDestination
                  ? <WrongDestination clue={{Guy:{key:'curator'},Clue: 'Whoops! 404 not found error. I think you\'re are lost.' }}></WrongDestination>
                  : ''
                }
                {
                  !isViewClue && !isViewCrime && !isWrongDestination && !isViewArrest && step === 20
                  ? <div>
                      <div className="cs-description">
                        {Cases[userCase][lang].steps[userStep].city.description}
                      </div>
                    </div>
                  : ''
                }
                </div>
              </section>
              <section className="cs-zone cs-zone-4">
                <div className="cs-zone-inner">
                  {
                    step === 20 
                    ? <Buttons 
                       userCase={userCase} 
                       userStep={userStep}
                       isWrongDestination={isWrongDestination}
                       tmpDestination={tmpDestination}
                       place={place}
                       lang={lang} 
                       Cases={Cases} 
                       sex={sex}
                       hair={hair}
                       hobby={hobby}
                       vehicule={vehicule}
                       feature={feature}
                       checkDestination={this.checkDestination}
                       changePlace={this.changePlace} 
                       changeDate={this.changeDate} 
                       viewClue={this.viewClue} 
                       hideClue={this.hideClue} 
                       viewCrime={this.viewCrime}
                       hideCrime={this.hideCrime}
                       viewArrest={this.viewArrest}
                       changeSex={this.changeSex} 
                       changeHobby={this.changeHobby} 
                       changeHair={this.changeHair}  
                       changeFeature={this.changeFeature}  
                       changeVehicule={this.changeVehicule} 
                       changeWarrant={this.changeWarrant} 
                       >
                       </Buttons> 
                    : ''
                  }
                </div>
              </section>
            </Col>
          </Row>
          {
 
          <Row>
            <Col>
              <Debug state={this.state} ></Debug>
            </Col>
          </Row>

          }
          <audio  
            ref={this.setMySoundClock}
            src={soundClock}>
          </audio>
        </Container>
      </div>
    );
  }
}

export default Interface;
```

### GameData/Data/Cases/index.js
```
/*
   List of cases
*/
const Cases = [
  {
    "en": {
      "start":[
        "****** FLASH ******", 
        "National treasure stolen from Paris.",
        "The treasure has been identified as the elevator from the Eiffel Tower.",
        "Female suspect reported at the scene of the crime.",
        "Your assignement: Track the thief from Paris to her hideout and arrested her!",
        "You must apprehend the thief by Sunday, 5 pm.",
        "Good luck ! "
      ],
      "steps": [
        {
          "city": {
            "name": "Paris",
            "description": "France, with a population of about 55 millions, is famous for its food, wine, fashion and art.",
            "img": "paris.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "museum",
                "value": "Museum"
              },
              "Guy": {
                "key": "curator",
                "value": "Curator"
              },
              "Clue": "Sources tell me she asked questions about Shinto rituals."
            },
            {
              "Place": {
                "key": "airport",
                "value": "Airport"
              },
              "Guy": {
                "key": "pilot",
                "value": "Pilot"
              },
              "Clue": "I saw the person you're looking for and she left in a plane with a red and white flag on its wing. She asked about the recent tennis match."
            },
            {
              "Place": {
                "key": "palace",
                "value": "Palace"
              },
              "Guy": {
                "key": "soldier",
                "value": "Soldier"
              },
              "Clue": "All I know is that she asked for a biography of Emperor Jimmu."
            }
          ],
          "destinations": ["Oslo","Tokyo","Reykjavik"]
        },
        {
          "city": {
            "name": "Tokyo",
            "description": "Tokyo, the capital of Japan, is overlooked by Mount Fuji, one of Japan's most famous sights",
            "img": "tokyo.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "hotel",
                "value": "Hotel"
              },
              "Guy": {
                "key": "housedetective",
                "value": "House detective"
              },
              "Clue": "I heard she wanted to know if she could take a steamer down the Tigris River."
            },
            {
              "Place": {
                "key": "airport",
                "value": "Airport"
              },
              "Guy": {
                "key": "pilot",
                "value": "Pilot"
              },
              "Clue": "My sources tell me she said she had a job waiting for her at an oil field."
            },
            {
              "Place": {
                "key": "palace",
                "value": "Palace"
              },
              "Guy": {
                "key": "privycouncillor",
                "value": "Privy Councillor"
              },
              "Clue": "The person you're looking for was here and she was disappointed when she found no books about the Assyrians."
            }
          ],
          "destinations": ["Bamako","Baghdad","Moscow"]
        },
        {
          "city": {
            "name": "Baghdad",
            "description": "In ancient times, Iraq was known as Mesopotamia. Modern-day Iraq is bordered by the nations of Jordan, Syria, Turkey, Iran, Kuwait and Saoudi Arabia.",
            "img": "baghdad.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "bank",
                "value": "Bank"
              },
              "Guy": {
                "key": "bankguard",
                "value": "Bank guard"
              },
              "Clue": "I heard she changed her money to pounds she was driving a limo."
            },
            {
              "Place": {
                "key": "library",
                "value": "Library"
              },
              "Guy": {
                "key": "referencelibrarian",
                "value": "Reference librarian"
              },
              "Clue": "I heard she left in a vehicle flying a red, white and black flag. I noticed a tattoo on her arm."
            },
            {
              "Place": {
                "key": "foreignministry",
                "value": "Foreign Ministry"
              },
              "Guy":{
                "key":"undersecretary",
                "value":"Under secretary"
              },
              "Clue": "a suspicious was here and she said she was interested by pyramids."
            }
          ],
          "destinations": ["Athens","Cairo","Rio de Janeiro"]
        },
        {
          "city": {
            "name": "Cairo",
            "description": "Cairo, located at the mouth of the Nile River, is the largest city in African.",
            "img": "cairo.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "museum",
                "value": "Museum"
              },
              "Guy": {
                "key": "curator",
                "value": "Gardien"
              },
              "Clue": "A reliable source told me she wanted study Saxon manuscripts."
            },
            {
              "Place": {
                "key": "riverfront",
                "value": "Riverfront"
              },
              "Guy": {
                "key": "sailorssnail",
                "value": "Sailor's snail"
              },
              "Clue": "My sources tell me she left in a tugboat flying a red, white and blue flag."
            },
            {
              "Place": {
                "key": "palace",
                "value": "Palace"
              },
              "Guy": {
                "key": "palaceguard",
                "value": "Palace guard"
              },
              "Clue": "The person you're looking for was here and she said she wanted to find out what made Big Ben tick."
            }
          ],
          "destinations": ["London","Colombo","Rome"]
        },
        {
          "city": {
            "name": "London",
            "description": "London, with a population of more than 6,5 million, is the largest city in the United Kingdom. One of its many landmarks is the Big Ben clock tower.",
            "img": "london.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "hotel",
                "value": "Hotel"
              },
              "Guy": {
                "key": "housedetective",
                "value": "House detective"
              },
              "Clue": "All I know is that something suspicious is going on in town."
            },
            {
              "Place": {
                "key": "harbor",
                "value": "Harbor"
              },
              "Guy": {
                "key": "sailor",
                "value": "Sailor"
              },
              "Clue": "All I know is that something suspicious is going on in town."
            },
            {
              "Place": {
                "key": "foreignministry",
                "value": "Foreign Ministry"
              },
              "Guy": {
                "key": "palaceguard",
                "value": "Palace guard"
              },
              "Clue": ""
            }
          ],
          "destinations": []
        }
      ],
      "thief": "Dazzle Annie Nonker",
      "endSuccess": {
        "thanks3": "had the loot, the elevator from the Eiffel Tower, which will be returned to the grateful residents of Paris."
      }
    },
    "fr": {
      "start":[
        "****** FLASH ******", 
        "Trésor national dérobé à Paris",
        "Le trésor a été identifié en haut de l'ascenseur de la Tour Eiffel.",
        "Un suspect de sexe féminin a été vu sur la scène du crime.",
        "Votre mission: Traquer la voleuse de Paris et l'arrêter !",
        "Vous avez jusqu'à dimanche 17h.",
        "Bonne chance ! "
      ],
      "steps": [
        {
          "city": {
            "name": "Paris",
            "description": "La France, avec une population de 55 millions d'habitants, est célèbre pour sa gastronomie, ses vins, sa mode et ses arts.",
            "img": "paris.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "museum",
                "value": "Musée"
              },
              "Guy": {
                "key": "curator",
                "value": "Gardien"
              },
              "Clue": "Des sources m'ont raconté qu'elle posait des questions sur les rituels Shinto."
            },
            {
              "Place": {
                "key": "airport",
                "value": "Aéroport"
              },
              "Guy": {
                "key": "pilot",
                "value": "Pilote"
              },
              "Clue": "J'ai vu la personne que vous cherchez et elle est partie à bord d'un avion avec un drapeau rouge et blanc sur son aile. Elle a posé des questions sur le dernier match de tennis."
            },
            {
              "Place": {
                "key": "palace",
                "value": "Palace"
              },
              "Guy": {
                "key": "soldier",
                "value": "Soldat"
              },
              "Clue": "Tout ce que je sais c'est qu'elle voulait lire une biographie de l'Empereur Jimmu."
            }
          ],
          "destinations": ["Oslo","Tokyo","Reykjavik"]
        },
        {
          "city": {
            "name": "Tokyo",
            "description": "Tokyo, la capitale du Japon, est surplombé par le mont Fuji, une des plus belles vues du Japon.",
            "img": "tokyo.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "hotel",
                "value": "Hôtel"
              },
              "Guy": {
                "key": "housedetective",
                "value": "Détective privé"
              },
              "Clue": "J'ai cru comprendre qu'elle voulait savoir si elle pouvait naviguer sur le Tigre."
            },
            {
              "Place": {
                "key": "airport",
                "value": "Aéroport"
              },
              "Guy": {
                "key": "pilot",
                "value": "Pilote"
              },
              "Clue": "Mes indics m'ont dit qu'elle avait un boulot en attente autour d'un puits de pétrole."
            },
            {
              "Place": {
                "key": "palace",
                "value": "Palace"
              },
              "Guy": {
                "key": "privycouncillor",
                "value": "Conseiller privé"
              },
              "Clue": "La personne que vous cherchez est passée ici et elle était déçue quand elle a découvert qu'il n'y avait aucun livre sur les Assyriens."
            }
          ],
          "destinations": ["Bamako","Baghdad","Moscow"]
        },
        {
          "city": {
            "name": "Baghdad",
            "description": "Il fut un temps, l'Irak s'appelait la Mésopotamie. Aujourd'hui, l'Irak est entouré par la Jordanie, la Syrie, la Turquie, l'Iran, le Koweit and l'Arabie Saoudite.",
            "img": "baghdad.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "bank",
                "value": "Banque"
              },
              "Guy": {
                "key": "bankguard",
                "value": "Conseiller bancaire"
              },
              "Clue": "J'ai entendu qu'elle changeait sa monnaie en pounds et qu'elle conduisait une limousine."
            },
            {
              "Place": {
                "key": "library",
                "value": "Bibliothèque"
              },
              "Guy": {
                "key": "referencelibrarian",
                "value": "Bibliothécaire"
              },
              "Clue": "Elle a quitté un véhicule avec un drapeau rouge, blanc et noir. J'ai remarqué un tatouage sur son bras."
            },
            {
              "Place": {
                "key": "foreignministry",
                "value": "Ministre des affaires étrangères"
              },
              "Guy": {
                "key": "undersecretary",
                "value": "Sous-secrétaire"
              },
              "Clue": "Une personne suspecte est passée par ici et elle disait qu'elle était intérssée par les pyramides."
            }
          ],
          "destinations": ["Athens","Cairo","Rio de Janeiro"]
        },
        {
          "city": {
            "name": "Cairo",
            "description": "Le Caire, situé à l'embouchure du Nil est une des plus grandes villes africaines.",
            "img": "cairo.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "museum",
                "value": "Musée"
              },
              "Guy": {
                "key": "curator",
                "value": "Gardien"
              },
              "Clue": "Une source sûre m'a raconté qu'elle voulait étudier des manuscrits saxons."
            },
            {
              "Place": {
                "key": "riverfront",
                "value": "Front de mer"
              },
              "Guy": {
                "key": "sailorssnail",
                "value": "Escargot marin"
              },
              "Clue": "Mes indics m'ont raconté qu'elle quittait un avion avec un drapeau rouge blanc et bleu."
            },
            {
              "Place": {
                "key": "palace",
                "value": "Palace"
              },
              "Guy": {
                "key": "palaceguard",
                "value": "Palace guard"
              },
              "Clue": "La personne que vous cherchez était ici et elle voulait visiter la tour Big Ben."
            }
          ],
          "destinations": ["London","Colombo","Rome"]
        },
        {
          "city": {
            "name": "London",
            "description": "Londre, avec une population de 6,5 millions d'habitants, est la plus grande ville du Royaume-Uni. Sa tour la plus connue a pour nom Big Ben.",
            "img": "london.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "hotel",
                "value": "Hôtel"
              },
              "Guy": {
                "key": "housedetective",
                "value": "Détective privé"
              },
              "Clue": "Tout ce que je sais c'est qu'il se passe quelque chose de louche en ville."
            },
            {
              "Place": {
                "key": "harbor",
                "value": "Port"
              },
              "Guy": {
                "key": "sailor",
                "value": "Marin"
              },
              "Clue": "Tout ce que je sais c'est qu'il se passe quelque chose de louche en ville."
            },
            {
              "Place": {
                "key":"foreignministry",
                "value": "Ministre des affaires étrangères"
              },
              "Guy": {
                "key": "palaceguard",
                "value": "Garde du palace"
              },
              "Clue": ""
            }
          ],
          "destinations": []
        }
      ],
      "thief": "Dazzle Annie Nonker",
      "endSuccess": {
        "thanks3": "a le butin, the elevator from the Eiffel Tower, which will be returned to the grateful residents of Paris."
      }
    }
  }
];

export default Cases;
```

### GameData/Data/Config/index.js
```
const Config = {
  "en":{
    "user": {
      "step1": "Detective at keyword",
      "step2": "please identify yourself:",
      "step4": "There is no record of your name on Interpol files.",
      "step5": "Are you new here?",
      "step7a": "You have been identified",
      "step7b": "We load your personal information",
      "step8": "Your current rank is"
    },
    "menu": {
      "entry1": { 
        "name":"Game",
        "item1": "About this game",
        "item2": "New",
        "item3": "Save", 
        "item4": "Restore"
      },
      "entry2": {
        "name": "Dossiers"
      },
      "entry3": {
        "name": "Options",
        "item1": "Set lang to en (default)",
        "item2": "Set lang to fr",
        "item3": "Sound on/off"
      },
      "save": "Save successful! ",
      "restore": "Save loaded! "
    },
    "buttons": {
      "start": "Press the button to start the investigation",
      "continue": "Press the button to continue",
      "game": "Press the button to start the game",
      "yes": "Yes",
      "no": "No",
      "back": "Back",
      "restart": "Restart"
    },
    "modals": {
      "close": "CLOSE",
      "compute": "COMPUTE"
    },
    "crime": [
      {
        "key": "sex",
        "label": "Sex",
        "options": [
          {"key":"female", "value": "Female"},
          {"key":"male","value":"Male"}
        ]
      },
      {
        "key": "hobby",
        "label": "Hobby",
        "options": [
          {"key":"climber","value":"Climber"},
          {"key":"croquet","value":"Croquet"},
          {"key":"tennis","value":"Tennis"},
          {"key":"fitness","value":"Fitness aerobic"}
        ]
      },
      {
        "key": "hair",
        "label": "Hair",
        "options": [
          {"key":"brown","value":"Brown"},
          {"key":"blond","value":"Blond"},
          {"key":"black","value":"Black"},
          {"key":"red","value":"Red"}
        ]
      },
      {
        "key": "feature",
        "label": "Feature",
        "options": [
          {"key":"tattoo","value":"Tattoo"},
          {"key":"diamond","value":"Diamond"},
          {"key":"ring","value":"Ring"}
        ]
      },
      {
        "key": "vehicule",
        "label": "Vehicule",
        "options": [
          {"key":"limousine","value":"Limousine"},
          {"key":"motorcycle","value":"Motorcycle"},
          {"key":"decapotable","value":"Decapotable"}
        ]
      }
    ],
    "warrant": {
      "arrest": "You now have a warrant to arrest",
      "arrestwarrant": "**** WARRANT ****",
      "none": "The information provided eliminates all possible suspects!",
      "nowarrant": "No warrant has been issued.",
      "suspects" : " suspects found:"
    },
    "endSuccess": {
      "wait": "oh wait a minute...",
      "thanks1": "Thanks to your help, the",
      "thanks2": "police have apprehended",
      "thanks4": "We here at Interpol thank you to for your good work on this case.",
      "thanks5": "Good job,",
      "thanks6": "you have earned a promotion.",
      "ready": "Ready for your next case ?"
    },
    "endFail": {
      "loser": "LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER!  ",
      "timeOut": "Expiration time",
      "noWarrant": "You have no warrant to arrest "
    },
    "credits": {
      "name": "Julien Verkest",
      "infos": " 2019 all rights reserved"
    } 
  },
  "fr":{
    "user": {
      "step1": "Détective au clavier",
      "step2": "Veuillez vous identifier :",
      "step4": "Aucune trace de votre nom dans les fichiers d'Interpol.",
      "step5": "Êtes-vous nouveau ici ?",
      "step7a": "Vous avez été identifié",
      "step7b": "Nous chargeons vos informations personnelles",
      "step8": "Votre grade actuel est"
    },
    "menu": {
      "entry1": { 
        "name":"Jeu",
        "item1": "Crédits du jeu",
        "item2": "Nouveau",
        "item3": "Enregistrer", 
        "item4": "Restaurer"
      },
      "entry2": {
        "name": "Dossiers"
      },
      "entry3": {
        "name": "Options",
        "item1": "Passer la langue en anglais",
        "item2": "Passer la langue en français (x)",
        "item3": "Activer / désactiver le son"
      },
      "save": "Sauvegarde effectuée ! "
    },
    "buttons": {
      "start": "Appuyer sur le bouton pour commencer l'enquête",
      "continue": "Appuyer sur le bouton pour continuer",
      "game": "Appuyer sur le bouton pour démarrer l'enquête",
      "yes": "Oui",
      "no": "Non",
      "back": "Retour",
      "restart": "Recommencer"
    },
    "modals": {
      "close": "FERMER",
      "compute": "ANALYSER"
    },
    "crime": [
      {
        "key": "sex",
        "label": "Sexe",
        "options": [
          {"key":"femme", "value": "Femme"},
          {"key":"homme","value":"Homme"}
        ]
      },
      {
        "key": "hobby",
        "label": "Hobby",
        "options": [
          {"key":"grimpeur","value":"Grimpeur"},
          {"key":"croquet","value":"Croquet"},
          {"key":"tennis","value":"Tennis"},
          {"key":"fitness","value":"Fitness"}
        ]
      },
      {
        "key": "hair",
        "label": "Cheveux",
        "options": [
          {"key":"chatain","value":"Chatain"},
          {"key":"blond","value":"Blond(e)"},
          {"key":"noir","value":"Noir(e)"},
          {"key":"rou","value":"Roux(sse)"}
        ]
      },
      {
        "key": "feature",
        "label": "Signe",
        "options": [
          {"key":"tatouage","value":"Tatouage"},
          {"key":"diamant","value":"Diamant"},
          {"key":"bague","value":"Bague"}
        ]
      },
      {
        "key": "vehicule",
        "label": "Véhicule",
        "options": [
          {"key":"limousine","value":"Limousine"},
          {"key":"moto","value":"Moto"},
          {"key":"decapotable","value":"Décapotable"}
        ]
      }
    ],
    "warrant": {
      "arrest": "Vous avez maintenant un mandat pour arrêter",
      "arrestwarrant": "**** MANDAT D'ARRÊT ****",
      "none": "Les informations saisies éliminent tous les suspects",
      "nowarrant": "Aucun mandat d'arrêt délivré.",
      "suspects" : " suspects trouvés :"
    },
    "endSuccess": {
      "wait": "oh attendez 1 seconde...",
      "thanks1": "Merci pour votre aide, la",
      "thanks2": "police a arrêté",
      "thanks4": "Interpol vous remercie pour votre travail sur cette enquête ",
      "thanks5": "Beau boulot,",
      "thanks6": "Vous avez mérité une promotion "
    },
    "endFail": {
      "loser": "Mauvais ! Nul ! Perdant ! Victime ! LOSER ! Mauvais policier ",
      "timeOut": "Temps écoulé",
      "noWarrant": "Vous n'avez pas de mandat d'arrêt"
    },
    "credits": {
      "name": "Julien Verkest",
      "infos": "Avril 2019 tous droits réservés"
    } 
  },
};

export default Config;
```

### GameData/Data/Dossiers/index.js
```
/*
   List of criminals
   http://www.lemonamiga.com/games/docs.php?id=1773
*/
const Dossiers = [
  {
    "en": {
      "id": "1",
      "name": "Carmen Sandiego", 
      "sex": "Female",
      "Occupation":  "A former spy for the Intelligence Service of Monaco",
      "Miscellaneous":  "Carmen Sandiego (known to the inner circle as 'Buffy') is reported to be an agent, double agent, triple agent and quadruple agent for so many countries that even she has forgotten which one she is working for.  The auburn-haired founder of the Villains' International Legion of Evil (V.I.L.E.) has recruited the most cunning and resourceful band of thieves in history.  During her years as a Monacan secret agent, she generally posed as a tennis pro and always travelled to and from the matches in her 1939 Packard convertible.  Carmen has a fondness for tacos and never appears in public without her famous ruby necklace 'The Moon of Moldavia.'",
      "hair": "Red",
      "hobby": "Tennis",
      "vehicule": "1939 Packard convertible Decapotable",
      "feature": "never appears in public without her famous ruby necklace",
      "Other": "Great fondness of tacos",
      "picture": "carmen-sandiego.jpg"
    },
    "fr": {      
      "id": "1",
      "name": "Carmen Sandiego", 
      "sex": "Femme",
      "Occupation":  "Ancienne espion pour the Intelligence Service of Monaco",
      "Miscellaneous":  "Carmen Sandiego (known to the inner circle as 'Buffy') is reported to be an agent, double agent, triple agent and quadruple agent for so many countries that even she has forgotten which one she is working for.  The auburn-haired founder of the Villains' International Legion of Evil (V.I.L.E.) has recruited the most cunning and resourceful band of thieves in history.  During her years as a Monacan secret agent, she generally posed as a tennis pro and always travelled to and from the matches in her 1939 Packard convertible.  Carmen has a fondness for tacos and never appears in public without her famous ruby necklace 'The Moon of Moldavia.'",
      "hair": "Roux(sse)",
      "hobby": "Tennis",
      "vehicule": "1939 Packard convertible Decapotable",
      "feature": "never appears in public without her famous ruby necklace",
      "Other": "Great fondness of tacos",
      "picture": "carmen-sandiego.jpg"}
  },
  {
    "en": {
      "id": "2",
      "name": "Merey LaRoc", 
      "sex": "Female",
      "Occupation":  "Ms. LaRoc is a freelance aerobic dancer",
      "Miscellaneous":  "For the past five years, this brunette beauty has been travelling around the world with a mobile health spa to conduct exercise classes for the extremely wealthy.  Rumor has it that this is merely a cover for her criminal activities.  When she isn't pilfering the treasures of the world, Merey can usually be found participating in the good life.  A world class mountain climber, she has a mania for fancy jewelry and spicy foods.  Her favourite mode of travel is in the back of a fancy limousine where she can relax and plot her next job.",
      "hair": "Black",
      "hobby": "Climber",
      "vehicule": "Limousine",
      "feature": "Jewelry",
      "Other": "Spicy Foods",
      "picture": "merey-laroc.jpg"
    },
    "fr": {      
      "id": "2",
      "name": "Merey LaRoc", 
      "sex": "Femme",
      "Occupation":  "Ms. LaRoc is a freelance aerobic dancer",
      "Miscellaneous":  "For the past five years, this brunette beauty has been travelling around the world with a mobile health spa to conduct exercise classes for the extremely wealthy.  Rumor has it that this is merely a cover for her criminal activities.  When she isn't pilfering the treasures of the world, Merey can usually be found participating in the good life.  A world class mountain climber, she has a mania for fancy jewelry and spicy foods.  Her favourite mode of travel is in the back of a fancy limousine where she can relax and plot her next job.",
      "hair": "Noir(e)",
      "hobby": "Climber",
      "vehicule": "Limousine",
      "feature": "Diamant",
      "Other": "Nourriture épicée",
      "picture": "merey-laroc.jpg"
    }
  },
  {
    "en": {
      "id": "3",
      "name": "Dazzle Annie Nonker", 
      "sex": "Female",
      "Occupation":  "Proprietress of the toughest yogurt bar east of Suez.",
      "Miscellaneous":  "Born sole heir to the fortune of the shoelack king, Baron Franz von Nonker, Annie was quickly disinherited when she ran off with a Croation tennis pro.  Cast adrift when she failed to make the cut for the Davis Cup mixed doubles, she was forced to live only by her wits and the paltry $3,000,000 she had been able to save out of her allowance.  With this modest windfall and her innate grit, the blond bombshell was able to open Chez Acidophilus.  Frequented by the dregs of humanity, Chez Acidoplilus has become the headquarters for V.I.L.E.  Annie is rumored to have a tattoo and craving for shellfish.  She is known to drive a Bugatti limousine.",
      "hair": "Blond",
      "hobby": "Tennis",
      "vehicule": "Limousine",
      "feature": "Tattoo",
      "Other": "Craving for shellfish",
      "picture": "dazzle-annie.jpg"
    },
    "fr": {
      "id": "3",
      "name": "Dazzle Annie Nonker", 
      "sex": "Femme",
      "Occupation":  "Proprietress of the toughest yogurt bar east of Suez.",
      "Miscellaneous":  "Born sole heir to the fortune of the shoelack king, Baron Franz von Nonker, Annie was quickly disinherited when she ran off with a Croation tennis pro.  Cast adrift when she failed to make the cut for the Davis Cup mixed doubles, she was forced to live only by her wits and the paltry $3,000,000 she had been able to save out of her allowance.  With this modest windfall and her innate grit, the blond bombshell was able to open Chez Acidophilus.  Frequented by the dregs of humanity, Chez Acidoplilus has become the headquarters for V.I.L.E.  Annie is rumored to have a tattoo and craving for shellfish.  She is known to drive a Bugatti limousine.",
      "hair": "Blond(e)",
      "hobby": "Tennis",
      "vehicule": "Limousine",
      "feature": "Tatouage",
      "Other": "Craving for shellfish",
      "picture": "dazzle-annie.jpg"
    }
  },
  {
    "en": {
      "id": "4",
      "name": "Lady Agatha Wayland", 
      "sex": "Female",
      "Occupation":  "A colorful character with a predilection for sensible shoes, Lady Agatha is a reader of mystery stories set in upper-class English drawing rooms.",
      "Miscellaneous":  "Lady Agatha has no ability at solving murder cases but is very interested in amassing great wealth.  A compulsive lawbreaker, she loves to exceed the speed lmit in her Denghby super-chauvinist speedster. Red tresses streaming in the open air, she drives through the countryside looking for great Mexican restaurants.  An avid sportswoman, Lady Agatha has been know to pick up a few extra dollars on weekends trouncing unsuspecting locals or the local tennis courts.  She is reported to have a diamond ring the size of a small grapefruit stolen from the Royal Treasury of Graustark.",
      "hair": "Red",
      "hobby": "Tennis",
      "vehicule": "Denghby super-chauvinist speedster",
      "feature": "Diamond ring",
      "Other": "Mexican restaurants",
      "picture": "lady-agatha-wayland.jpg"
    },
    "fr": {
      "id": "4",
      "name": "Lady Agatha Wayland", 
      "sex": "Femme",
      "Occupation":  "A colorful character with a predilection for sensible shoes, Lady Agatha is a reader of mystery stories set in upper-class English drawing rooms.",
      "Miscellaneous":  "Lady Agatha has no ability at solving murder cases but is very interested in amassing great wealth.  A compulsive lawbreaker, she loves to exceed the speed lmit in her Denghby super-chauvinist speedster. Red tresses streaming in the open air, she drives through the countryside looking for great Mexican restaurants.  An avid sportswoman, Lady Agatha has been know to pick up a few extra dollars on weekends trouncing unsuspecting locals or the local tennis courts.  She is reported to have a diamond ring the size of a small grapefruit stolen from the Royal Treasury of Graustark.",
      "hair": "Roux(sse)",
      "hobby": "Tennis",
      "vehicule": "Denghby super-chauvinist speedster",
      "feature": "Bague",
      "Other": "Mexican restaurants",
      "picture": "lady-agatha-wayland.jpg"
    }
  },
  {
    "en": {
      "id": "5",
      "name": "Len Red Bulk", 
      "sex": "Male",
      "Occupation":  "Ex-professional hockey player and compulsive gambler, Len was barred for life from playing when he was caught trying to bribe himself.",
      "Miscellaneous":  "Bitter and unemployed, Bulk was forced to turn to crime in order to support his gambling habit.  He swears he will quit just as soon as he winds the big one. Because of an unfortunate habit of blocking toom many shots with his head, Len will occasionally think he is a Big Horn sheep and begin climbing the nearest peak.  Cannot fit into any car that has a top, loves seafood and tries to impress strangers by showing them the tattoo of a mermain on the thumb of his right hand.",
      "hair": "Red",
      "hobby": "Climber",
      "vehicule": "Decapotable",
      "feature": "Tattoo",
      "Other": "Seefood",
      "picture": "len-bulk.jpg"
    },
    "fr": {
      "id": "5",
      "name": "Len Red Bulk", 
      "sex": "Homme",
      "Occupation":  "Ex-professional hockey player and compulsive gambler, Len was barred for life from playing when he was caught trying to bribe himself.",
      "Miscellaneous":  "Bitter and unemployed, Bulk was forced to turn to crime in order to support his gambling habit.  He swears he will quit just as soon as he winds the big one. Because of an unfortunate habit of blocking toom many shots with his head, Len will occasionally think he is a Big Horn sheep and begin climbing the nearest peak.  Cannot fit into any car that has a top, loves seafood and tries to impress strangers by showing them the tattoo of a mermain on the thumb of his right hand.",
      "hair": "Roux(sse)",
      "hobby": "Grimpeur",
      "vehicule": "Decapotable",
      "feature": "Tatouage",
      "Other": "Seefood",
      "picture": "len-bulk.jpg"
    }
  },
  {
    "en": {
      "id": "6",
      "name": "Scar Graynolt", 
      "sex": "Male",
      "Occupation":  "Scar plays the role of a mild-mannered folk guitarist, while in reality, he is a complete plug-ugly.",
      "Miscellaneous":  "Graynolt made a fortune selling reflective headbands to Scandinavian basketball teams to allow them to play outdoor games for the first time during the winter months.  A super athlete, Scar plays killer croquet for money.  One of his prize possessions if a five-carat pinky ring he won from Ihor Ihorovitch in a marathon match that lasted three days.  Rarely seen in public, he rides around in a limousine with shaded windows with his trusted man-servant, a 6'8 sherpa, as his only companion.  He is said to have red hair.",
      "hair": "Red",
      "hobby": "Croquet",
      "vehicule": "Limousine",
      "feature": "Pinky ring",
      "Other": "folk guitarist",
      "picture": "scar-graynolt.jpg"
    },
    "fr": {
      "id": "6",
      "name": "Scar Graynolt", 
      "sex": "Homme",
      "Occupation":  "Scar plays the role of a mild-mannered folk guitarist, while in reality, he is a complete plug-ugly.",
      "Miscellaneous":  "Graynolt made a fortune selling reflective headbands to Scandinavian basketball teams to allow them to play outdoor games for the first time during the winter months.  A super athlete, Scar plays killer croquet for money.  One of his prize possessions if a five-carat pinky ring he won from Ihor Ihorovitch in a marathon match that lasted three days.  Rarely seen in public, he rides around in a limousine with shaded windows with his trusted man-servant, a 6'8 sherpa, as his only companion.  He is said to have red hair.",
      "hair": "Roux(sse)",
      "hobby": "Croquet",
      "vehicule": "Limousine",
      "feature": "Bague",
      "Other": "folk guitarist",
      "picture": "scar-graynolt.jpg"
    }
  },
  {
    "en": {
      "id": "7",
      "name": "Nick Brunch", 
      "sex": "Male",
      "Occupation":  "Hard-boiled ex-private eye, ear, and nose and throat.",
      "Miscellaneous":  "The only things that interest Nick are fast cars and faster women.  He'll never turn down a caper that permits him to live in the fast lane.  An avid mountain climber, Brunch was last seen roaring through an Alpine village on his Kamikaze-1250 motorcycle.  He generally wears a soiled trenchcoat, snap-brimmed fedora and sports a Dick Tracy Crimefighter's ring on his left hand.  A close friend of Scar Graynolt, they share a common interest in Mexican Food.  Brunch has black hair, brown eyes and a seedy mustache.",
      "hair": "Black",
      "hobby": "Climber",
      "vehicule": "Kamikaze-1250 motorcycle",
      "feature": "Dick Tracy Crimefighter's ring on his left hand. Brown eyes and a seedy mustache",
      "Other": "Mexican food",
      "picture": "nick-brunch.jpg"
    },
    "fr": {
      "id": "7",
      "name": "Nick Brunch", 
      "sex": "Homme",
      "Occupation":  "Hard-boiled ex-private eye, ear, and nose and throat.",
      "Miscellaneous":  "The only things that interest Nick are fast cars and faster women.  He'll never turn down a caper that permits him to live in the fast lane.  An avid mountain climber, Brunch was last seen roaring through an Alpine village on his Kamikaze-1250 motorcycle.  He generally wears a soiled trenchcoat, snap-brimmed fedora and sports a Dick Tracy Crimefighter's ring on his left hand.  A close friend of Scar Graynolt, they share a common interest in Mexican Food.  Brunch has black hair, brown eyes and a seedy mustache.",
      "hair": "Noir(e)",
      "hobby": "Grimpeur",
      "vehicule": "Moto",
      "feature": "Bague",
      "Other": "Mexican food",
      "picture": "nick-brunch.jpg"
    }
  },
  {
    "en": {
      "id": "8",
      "name": "Fast Eddie B.", 
      "sex": "Male",
      "Occupation":  "A world class croquet player, he always carries his custom-made set of mallets in the trunk of his convertible.",
      "Miscellaneous":  "Gentleman thief and society cat burglar, Fast Eddie mixes easily with the jet set and can usually be found at one of People Magazine's top 10 play-grounds for the rich. Impeccably groomed at all times, he once fought a duel with a waiter in his favorite Mexican restaurant who spilled a drop of hot sauce on his white linen suit.  His most famous crime was the theft of a damask tablecloth.  Posing as a waiter, Fast Eddie removed it from the table during a state dinner for the Ambassador without spilling a deop or breaking a plate.  In fact, the theft wasn't even noticed until dessert was served.  This raven-haired criminal master-mind always leaves a diamond stickpin at the scene of the crime as his trademark.",
      "hair": "Black",
      "hobby": "Croquet",
      "vehicule": "",
      "feature": "Diamond",
      "Other": "Mexican food",
      "picture": "fast-eddie-b.jpg"
    },
    "fr": {
      "id": "8",
      "name": "Fast Eddie B.", 
      "sex": "Homme",
      "Occupation":  "A world class croquet player, he always carries his custom-made set of mallets in the trunk of his convertible.",
      "Miscellaneous":  "Gentleman thief and society cat burglar, Fast Eddie mixes easily with the jet set and can usually be found at one of People Magazine's top 10 play-grounds for the rich. Impeccably groomed at all times, he once fought a duel with a waiter in his favorite Mexican restaurant who spilled a drop of hot sauce on his white linen suit.  His most famous crime was the theft of a damask tablecloth.  Posing as a waiter, Fast Eddie removed it from the table during a state dinner for the Ambassador without spilling a deop or breaking a plate.  In fact, the theft wasn't even noticed until dessert was served.  This raven-haired criminal master-mind always leaves a diamond stickpin at the scene of the crime as his trademark.",
      "hair": "Noir(e)",
      "hobby": "Croquet",
      "vehicule": "Moto",
      "feature": "Diamant",
      "Other": "Mexican food",
      "picture": "fast-eddie-b.jpg"
    }
  }, 
  {
    "en": {
      "id": "9",
      "name": "Ihor Ihorovitch", 
      "sex": "Male",
      "Occupation":  "Pretender to the Czarist throne and a lot of other things, too.  Ihorovitch has an amazing ability to disappear from sight for varying amounts of time.",
      "Miscellaneous":  "He seems to have a great fascination for very large marsupials.  A likeable brute, Ihorovitch provides an additional hand for the mob's nefarious activities.  Blond and sporting a strange Ukranian tattoo, he has been known to eat the contents of an entire lobster tank by himself.  Ihorovitch has a color television set installed in his limousine so he doesn't have to miss the Saturday morning cartoon shows.",
      "hair": "Blond",
      "hobby": "Croquet",
      "vehicule": "Limousine",
      "feature": "strange Ukranian Tattoo",
      "Other": "Lobster Seefood",
      "picture": "ihor-ihorovitch.jpg"
    },
    "fr": {
      "id": "9",
      "name": "Ihor Ihorovitch", 
      "sex": "Homme",
      "Occupation":  "Pretender to the Czarist throne and a lot of other things, too.  Ihorovitch has an amazing ability to disappear from sight for varying amounts of time.",
      "Miscellaneous":  "He seems to have a great fascination for very large marsupials.  A likeable brute, Ihorovitch provides an additional hand for the mob's nefarious activities.  Blond and sporting a strange Ukranian tattoo, he has been known to eat the contents of an entire lobster tank by himself.  Ihorovitch has a color television set installed in his limousine so he doesn't have to miss the Saturday morning cartoon shows.",
      "hair": "Blond(e)",
      "hobby": "Croquet",
      "vehicule": "Limousine",
      "feature": "Tatouage ukrainien",
      "Other": "Lobster Seefood",
      "picture": "ihor-ihorovitch.jpg"}
  },
  {
    "en": {
      "id": "10",
      "name": "Katherine Boom-Boom Drib", 
      "sex": "Female",
      "Occupation":  "Three-time winner of the Trans-Siberian motorcyle race. Drib is the official hostess for V.I.L.E.",
      "Miscellaneous":  "The brunette beauty - a one-time centerfold for Popular Mechanics magazine - is a fanatic about health and fitness.  Although she has never actually attended a meeting, she is a charter member of Merey LaRoc's aerobic class.  A gourmet cook specializing in seafood dishes, she is also fascinated with the concept of mountain climbing.  She has a tattoo of an eagle on her left bicep.",
      "hair": "Black",
      "hobby": "Fitness aerobic",
      "vehicule": "Motorcyle",
      "feature": "Tattoo of an eagle oner left bicep",
      "Other": "Seefood",
      "picture": "katherine-boom-boom-drib.jpg"
    },
    "fr": {
      "id": "10",
      "name": "Katherine Boom-Boom Drib", 
      "sex": "Femme",
      "Occupation":  "Three-time winner of the Trans-Siberian motorcyle race. Drib is the official hostess for V.I.L.E.",
      "Miscellaneous":  "The brunette beauty - a one-time centerfold for Popular Mechanics magazine - is a fanatic about health and fitness.  Although she has never actually attended a meeting, she is a charter member of Merey LaRoc's aerobic class.  A gourmet cook specializing in seafood dishes, she is also fascinated with the concept of mountain climbing.  She has a tattoo of an eagle on her left bicep.",
      "hair": "Noir(e)",
      "hobby": "Fitness aerobic",
      "vehicule": "Moto",
      "feature": "Tatouage",
      "Other": "Seefood",
      "picture": "katherine-boom-boom-drib.jpg"
    }
  },
];

export default Dossiers;
```

# Instructions

No need to analyze anything right now. 
Just wait for questions.
