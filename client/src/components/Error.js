import React from 'react';

// Renders error messages
const Error = (props) => {
    return (
        <div className="error-message">
            {props.auth.Message}
        </div>
    );
};

export default Error;