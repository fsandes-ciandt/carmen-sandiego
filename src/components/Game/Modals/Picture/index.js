import React from 'react';
import './index.css';

import parisImage from '../../../../assets/cities/paris.png';
import baghdadImage from '../../../../assets/cities/baghdad.png';
import bamakoImage from '../../../../assets/cities/bamako.png';
import cairoImage from '../../../../assets/cities/cairo.png';
import londonImage from '../../../../assets/cities/london.png';
import moscowImage from '../../../../assets/cities/moscow.png';
import osloImage from '../../../../assets/cities/oslo.png';
import reykjavikImage from '../../../../assets/cities/reykjavik.png';
import riodejaneiroImage from '../../../../assets/cities/riodejaneiro.png';
import tokyoImage from '../../../../assets/cities/tokyo.png';

const imageMap = {
  paris: parisImage,
  baghdad: baghdadImage,
  bamako: bamakoImage,
  cairo: cairoImage,
  london: londonImage,
  moscow: moscowImage,
  oslo: osloImage,
  reykjavik: reykjavikImage,
  riodejaneiro: riodejaneiroImage,
  tokyo: tokyoImage,
};

const Picture = ({ place }) => {
  const normalizedPlace = place.toLowerCase().replace(/\s+/g, "");

  // Seleciona a imagem correta ou usa uma imagem padrão se não encontrada
  const image = imageMap[normalizedPlace] || imageMap.default;

  return (
    <div>
      <img src={image} alt={place} className="cs-picture" />
    </div>
  );
};

export default Picture;