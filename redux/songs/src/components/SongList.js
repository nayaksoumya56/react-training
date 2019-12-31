import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongList extends Component {
    render(){
        return(
            <div>
                <h4 className="ui container label"> Songlist</h4>
            </div>
        );
    };
}

const mapStateToProps = (state) =>{
//mapStateToProps is a function to get the states
//and perform calculations on them. It is named that way
//by convention and can be 'getState' or 'shdvfiaks'

return {songs : state.songs};

};

export default connect(mapStateToProps)(SongList);
//connect function returns a function
//for which the argument is Songlist
//and is used to connect to the provider
//Lecture 149 - React with Redux by Stephen