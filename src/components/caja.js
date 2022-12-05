import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import {useLocalStorage} from '../pages/useLocalStorage';

function Caja() {
    const [times, setTime] = useLocalStorage('times',0)
    const [text, setText] = useLocalStorage('text','')
    return(
        
    <Fragment>

        <textarea
            onChange={e => setText(e.target.vlue)}
            value={text}
            placeholder="Que esta pasando?"
            />
        <button onClick={() => setTime(times+1)}>Twitear</button>
        <span>{times} veces twitteado</span>
    </Fragment>
    );
}

/*
const rootElement = document.getElementById("root");
ReactDOM.render(<Caja/>,rootElement); */

export default Caja;