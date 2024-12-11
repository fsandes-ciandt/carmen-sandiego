import React, { Component } from 'react';
import Config from '../../GameData/Data/Config';
import './index.css';

class PlaceAndDate extends Component {
  render(){
    const { place, mydate, lang } = this.props;
    let myPlace = (mydate.getHours() > 22 || mydate.getHours() < 8) ? Config[lang].labels.sleeping : place; 
    let dateString = mydate.toLocaleDateString(lang, { weekday: 'long' });
    
    // Format the time string based on language
    let timeString;
    if (lang.startsWith('en')) {
      // For English, use AM/PM format
      timeString = mydate.toLocaleTimeString(lang, { hour: 'numeric', hour12: true });
    } else {
      // For other languages, use 24-hour format with 'h'
      timeString = mydate.toLocaleTimeString(lang, { hour: 'numeric', hour12: false });
      // Add 'h' if it's not already there (some locales might include it)
      if (!timeString.includes('h')) {
        timeString += 'h';
      }
    }

    return (
      <div>
        <div className="cs-place" style={{textTransform:'uppercase'}}>{myPlace}</div>
        <div className="cs-date">{dateString}, {timeString}</div>
      </div>
    );
  }
}

export default PlaceAndDate;