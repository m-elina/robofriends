import React from 'react';
import Card from './Card'; /* jetzt wird hier Card verwendet und muss importiert werden */

const CardList = ({robots}) => { /* Muss robots als prop akzeptieren, wenn man es unten verwendet */
    return (
        <div>
                {/* das war ursprüngliche Variante, jetzt Lösung mit Loop unten */}
                {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/> {/*alle Components von oben müssen hier untern verwendet werden*/}
                {/* <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/> */} {/*wir fügen zu jeder Card die Roboter hinzu*/}
                {/* <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/> */}
        
        {
        // Loop durch jedes Item aus dem robots.js Array
        // Loops in React benötigen einen key, um zu funktionieren, in unserem Fall nehmen wir i als Index (in curly brackets, weil es Javascript ist) 
        robots.map((user, i) => {
            return (
                <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                    />
            );
        })
        } 
        </div>
    );
}

export default CardList;