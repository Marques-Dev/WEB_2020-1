import React from 'react';

export default props =>
    <div>
        <h1>Casa {props.casa}</h1>

        {React.Children.map(props.children, personagem => {
            return React.cloneElement(personagem, { ...props });
        })}

    </div>