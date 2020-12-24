import React from 'react';
import './QuoteCard.css';

const QuoteCard = (props) => {  
    return (
      <figure className="QuoteCard">
        <img src={props.quote[0].image} alt={props.quote[0].character} />
        <figcaption>
          <blockquote>{props.quote[0].quote}</blockquote>
          <p>
            <cite>{props.quote[0].character}</cite>            
          </p>
        </figcaption>
      </figure>
    );
}


export default QuoteCard;
