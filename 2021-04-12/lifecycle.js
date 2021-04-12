//Lifecycle

//Class component with LifeCycle
class Product extends React.Component {

    constructor( ){
        console.log('constructor');
    }

    render( ){
        console.log('render');
        return (
            <div className = "Box">
                <h1>Apple</h1>
                <p>Price: 100</p>
            </div>
        );
    }

    componentDidMount( ){
        console.log('componentDidMount');
    }

    componentDidUpdate( ){
        console.log('componentDidUpdate');
    }

    componentWillUnmount( ){
        console.log('componentWillUnmount');
    }
}

const View1 = ( props ) => {

    React.useEffect( ( ) => {
        console.log('Runs Everytime');
    } );

    React.useEffect( ( ) => {
        console.log('Runs when component is mounted');
    }, [] );

    React.useEffect( ( ) => {
        console.log('Runs when props/state is updated!');
    }, [props.title] );

    React.useEffect( ( ) => {
        console.log('Runs when props/state is updated!');
    }, [props.desc] );

    React.useEffect( ( ) => {
        return ( ) => console.log('Runs when component is unmounted');
    } );

    return (
        <div className="App">
            <div className="Box">
                <h1>Apple</h1>
                <p>Price: 100</p>
            </div>
        </div>
    );
}


class App1 extends React.Component {

    constructor( ) {
        super( ); //We have to use super(); in this constructor because
        //React.Component is already bringing a constructor
        console.log('constructor');
    }

    render( ) {

        console.log( 'render' );
        
        return (
            <div className = "App">
                <div className = "Box">
                    <h1>Apple</h1>
                    <p>Price: 100</p>
                </div>
            </div>
        );
    }

    componentDidMount( ){
        console.log('componentDidMount');
    }

    componentDidUpdate( ){
        console.log('componentDidUpdate');
    }

    componentWillUnmount( ){
        console.log('componentWillUnmount');
    }
}

ReactDOM.render( <App1/>, document.getElementById('root'));