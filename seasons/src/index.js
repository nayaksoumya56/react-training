import React from 'react';
import ReactDOM from 'react-dom';
import { SeasonDisplay } from './SeasonDisplay';
import { Spinner } from './Spinner';
import './index.css';

class App extends React.Component {

    // constructor(props){
    //     super(props);

    //     this.state = { lat: null , errorMsg: '' };
    // }

    //USING THIS DECLARATION FOR STATE
    state = { lat: null , errorMsg: '' };


    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),//Success Callback
            err => this.setState({ errorMsg : err.message })            //FAILED CALLBACK
        );
    }

    render(){
        if(this.state.errorMsg && !this.state.lat){
        return <div className="text">Error: <span>{ this.state.errorMsg }</span></div>
        }
        if (this.state.lat && !this.state.errorMsg){
        return  <SeasonDisplay lat= {this.state.lat} />
        }
        return <div><Spinner message="Please accept location permission!"/></div>
    }
};

ReactDOM.render ( <App />, document.getElementById('root') );