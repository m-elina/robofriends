import React from 'react';

// Parameter der Funktion aus App.js
const Searchbox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange={searchChange} /* event, listening to anytime the input changes, gibt das event in der Console wieder */
            />
        </div>
    );
}

export default Searchbox;