// RandomQuote.js (RandomQuote Component)

import React, { useState, useEffect } from 'react';
import { quotes} from './listArray';
 


const RandomQuote = () => {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * quotes.length);
      setRandomIndex(newIndex);
    }, 20000); // determines the interval (in milliseconds) between quotes

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3 className='quote'>Random Quotes</h3>
      <p><i>{quotes[randomIndex]}</i></p>
    </div>
  );
};

export default RandomQuote;
