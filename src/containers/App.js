import React from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots.js'; brauchen wir nicht mehr /* weitere Component für den Inhalt der Cards importieren, {} weil Component mehrere Bestandteile hat*/
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';



class App extends React.Component {
    constructor() {
        super()
        // state beinhaltet alles, was sich verändern soll, und es lebt in der App Component
            this.state = {
                robots: [],
                searchfield: ''
            }
    }

    // fügt die Roboter aus robots.js in den Array oben ein
    componentDidMount() { 
        fetch('https://jsonplaceholder.typicode.com/users') /* The Fetch API provides an interface for fetching resources, wir fetchen die user, fetch is a method of the windows object */
        .then(response => response.json()) /* wir bekommen einen response */
        .then(users => this.setState({robots: users})); /* dann bekommen wir die user, welche wir mit state updaten */
    }

    // Function, damit immer, wenn sich was in Searchbox-Input verändert, bekommen wir ein event und console.log wird getriggert
    onSearchChange = (event) => { /* wir müssen hieraus eine Funktion machen, damit sich "this" auf App bezieht, weil wir hier eine eigene Methode zu einem COmponent gemacht haben */
        // mit der nächsten Zeile wird der gesuchte Inhalt in der Console gefiltert (in der Console, weil wir unten console.log(filteredRobots) haben)
        this.setState({searchfield: event.target.value}) /* target.value: should give us the value of the search term, also gibt den Inhalt des Suchfelds in der Console wieder*/
        // console.log(filteredRobots);
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length) { /* als Fallback, wenn es zu lange lädt, bedeutet, wenn länge der Robots gleich 0, also kein Roboter geladen */
            return <h1>Loading</h1>
        } else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/> {/* function wird mit Searchbox verknüpft, "this" weil function ein object ist */}
                <Scroll> {/* wir wollen, dass die CardList scrollbar ist, sodass die Searchbar sticky ist */}
                    {/* wenn CardList nicht geladen werden, dann kommt die Fehlermeldung */}
                    <ErrorBoundry> 
                        <CardList robots={filteredRobots}/> {/* jetzt wird robots nicht von ganz oben aufgerufen, sondern auch aus state, filteredRobots kann nun mit den robots.js kommunizieren */}
                    </ErrorBoundry>
                </Scroll>          
            </div>
        );
        }
    }
}

export default App;