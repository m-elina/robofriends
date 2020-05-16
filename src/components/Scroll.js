import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children} {/* wir definieren, was mit den children von Scroll passieren soll */}
        </div>
    );
};

export default Scroll;