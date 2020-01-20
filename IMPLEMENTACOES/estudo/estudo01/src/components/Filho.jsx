import React from 'react';

export default props => 
    <div>
        <button onClick={()=>props.notificarPai('...Tudo bom?')}>
            Oi Pai!
        </button>
    </div>