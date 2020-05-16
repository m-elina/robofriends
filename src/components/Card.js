// die Component für unsere einzelnen Roboter-Cards
import React from 'react';

// Angelegt als Funktion, man könnte aber auch eine class machen
const Card = ({name, email, id}) => { /*Kombination der von robots.js, index.js und Card.js, {} weil wir hier Destructuring betreiben*/
        return (
            <div className='tc bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5'> {/*className statt class, weil class hier bereits reserviert ist, einfügen der css-Properties aus tachyons*/}
                <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> {/* Template Strings (Curly Bracket und umgekehrte Anführungszeichen), um die jeweilgen inhalten aus den Objekten im robots.js-Array zu nutzen */}
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
}

// immer exportieren, was in index importiert wird (default für einen return)
export default Card; 
