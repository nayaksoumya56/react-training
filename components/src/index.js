import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import { CommentDetail } from './CommentDetail';
import { ApprovalCard } from './ApporvalCard';

function getFakeDate(){
    return {time:faker.date.past().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit',hour12:true}).toUpperCase(),
            date: faker.date.past().toDateString()
        }
}
function getFakeName(){
    return faker.name.firstName();
}
function getFakeComment(){
    return faker.hacker.phrase();
}


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author={getFakeName()} timeAgo={getFakeDate()} comment={getFakeComment()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={getFakeName()} timeAgo={getFakeDate()} comment={getFakeComment()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={getFakeName()} timeAgo={getFakeDate()} comment={getFakeComment()}/>
            </ApprovalCard>
            {/* <ApprovalCard>
                <CommentDetail author={getFakeName()} timeAgo={getFakeDate()} comment={getFakeComment()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={getFakeName()} timeAgo={getFakeDate()} comment={getFakeComment()}/>
            </ApprovalCard> */}
        </div>
    );
};

ReactDOM.render( <App />, document.getElementById('root'));