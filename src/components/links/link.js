import React from 'react';
import './link.scss';
import { ReactComponent as CaretDown } from './../../caret-down.svg';
import { ReactComponent as CaretUp } from './../../caret-up.svg';

export default function Link({ link }) {
    return (
        <div className="link">
            <div className="votes">
                <button>
                    <CaretUp />
                </button>
                <div className="count">{link.votesCount}</div>
                <button>
                    <CaretDown />
                </button>
            </div>
            <img className="link-image" src={link.image} alt={link.title} />
            <div className="details">
                <h4>
                    <a href="#">{link.title}</a>
                </h4>
                <div className="date">submitted at {link.date} by
                    <span className="user">{link.username}</span>
                </div>
                <div className="num-of-comments">{link.comments.length} comments</div>
            </div>
        </div>
    );
}
