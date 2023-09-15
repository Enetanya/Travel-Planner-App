// RandomQuote.js (RandomQuote Component)

import React, { useState, useEffect } from 'react';
import { quotes} from './listArray';
 


const RandomQuote = () => {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * quotes.length);
      setRandomIndex(newIndex);
    }, 15000); // Change the interval (in milliseconds) for a new quote

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
