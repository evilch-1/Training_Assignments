/* 
file: components.js
Author: Edgar Vilchis

Date of creation: April 7th, 2021
Last modified: April 12th, 2021

Main purpose: Explore React interacting with JS and HTML/CSS

*/

//React components

//Functional component
//props = {name: 'Apple', price: '100', children: ''}

const Card = (props) => {
    return (
        <div className="Box">
            <h1 onClick={ () => props.clicked('function')}> {props.name} </h1>
            <p> Price: {props.price} </p>
            {/* <p> {props.children} </p> */}
        </div>
        
    );
}

const Boton = () => {
    return (
        <div className="EditBoton">
            <button class="ui button">
                Hi, I'm again here!
        </button>
        <button class="ui button">
                Hi, I'm again here Too!
        </button>
        
        </div>
        
    );
}

const Boton2 = () => {
    return (
        <div class="ui buttons">
        <button class="ui button">Cancel</button>
        <div class="or"></div>
        <button class="ui positive button">Save</button>
        </div>
    )
}

const Grid1 = () => {
    return (
        <div class="ui grid">
                <div class="four wide column"> Hola </div>
                <div class="four wide column"> Prueba</div>
                <div class="four wide column"> PruebaDos </div>
                <div class="four wide column"> PruebaTres </div>
                <div class="two wide column"> Derecha</div>
                <div class="eight wide column"> Derecha</div>
                <div class="six wide column"> Derecha </div>
            </div>
    )
}
//console.log(Card);

//class component
class Card1 extends React.Component {

    render() {
        return (
            <div className="Box">
                <h1 onClick={ () => this.props.clicked('class')}> {this.props.name} </h1>
                <p> Price: {this.props.price} </p>

                <button class="ui button">
                Hi, I'm here!
                </button>

            </div>
        );
    }
}

// let app = (
//     <div>
//         <Card1 name="Apple" price="100"/>
//         <Card1 name="Orange" price="60"/>
//     </div>
// )

// let app = (
//     <div>
//         <Card name="Apple" price="100">
//             <Card name="Orange" price="60" />
//         </Card>

//         <Card1 name = "Exploring more components" price = "Free :P"/>
//         <Boton />

//         <Grid1/>

//         <Boton2/>
//     </div>
// )

class App extends React.Component {

    someMethod ( arg ) {
        console.log('App someMethod called!', arg);
    }

    render ( ) {
        return (
            <div className="App">
                <Card name="Apple" price="100" clicked = {this.someMethod}/>
                <Card1 name="Orange" price="60" clicked = {this.someMethod}/>
            </div>
        );
    }
}

//The onClicked method can be used in both const and class objects
//but, in const is declared as it goes with onClicked={props.clicked}
//in the class it needs to be onClicked={this.props.clicked}

//Also, we are able to make what to say on the onClicked object
//inside of each card
//That's the magic of using an "arg" inside the someMethod declaration

ReactDOM.render( <App/>, document.getElementById('root'));
//Before when "app" was a let, it was declared just as app
//Now as a class, it needs to be <App/>
