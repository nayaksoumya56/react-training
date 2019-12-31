//reducers
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'haha', duration: '4:05'},
        {title: 'hihi', duration: '3:55'},
        {title: 'hehe', duration: '4:53'},
        {title: 'hoho', duration: '2:26'},
        {title: 'hoho', duration: '45:26'}
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