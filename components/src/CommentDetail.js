import React from 'react';
import faker from 'faker';

export const CommentDetail = (props) => {
    console.log(props);
    return  (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avatar" />
            </a>
            <div className="content">
                <a className="author" href="/">
                    { props.author }
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo.date} at {props.timeAgo.time}</span>
                </div>
                <div className="text">
                    { props.comment }
                </div>
            </div>
        </div>
    );
};