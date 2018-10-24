import React from 'react';
import './registration.scss';

export default function Registration({ username, usernameChanged, createUser }) {
    return (
        <div className="registration">
            <input
                type="text"
                className="username"
                value={username}
                onChange={usernameChanged}
                placeholder="Enter username"
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        createUser()
                    }
                }}
            />
            <button
                onClick={createUser}
                className="submit">
                Create user
            </button>
        </div>
    );
}
