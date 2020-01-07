import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';
import faker from 'faker';
class SongList extends Component {
    renderList(){
        return this.props.songs.map(song => {
            return(
                <div className="item" key="song.title">
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={()=>{this.props.selectSong(song)}}
                        >Select</button>
                    </div>
            <div className="ui avatar">{faker.image.avatar}</div>
                    <div className="content">
                        <div className="header">{song.title}</div>
                    </div>
                </div>
            );
        });
    }
    render(){
        return(
            <div className="ui middle aligned divided list">
                {this.renderList()}
            </div>
        );
    };
}

const mapStateToProps = (state) =>{
//mapStateToProps is a function to get the states
//and perform calculations on them. It is named that way
//by convention and can be 'getState' or 'shdvfiaks'
console.log(state.selectedSong);
return { songs : state.songs};

};

export default connect(mapStateToProps,
        { selectSong : selectSong }
    )(SongList);
//connect function returns a function
//for which the argument is Songlist
//and is used to connect to the providerq
//Lecture 149 - React with Redux by Stephen