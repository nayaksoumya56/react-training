//reducers
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Highest in the room', duration: '4:05'},
        {title: 'Lying together', duration: '3:55'},
        {title: 'Mask Off', duration: '4:53'},
        {title: 'City Slums' , duration: '2:26'},
        {title: 'Amplifier', duration: '3:26'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});