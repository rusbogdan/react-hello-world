import React, { useRef } from 'react';

function Hydrated()
{
    const divRef = useRef(null);

    function onPress(event) {
        console.log('hydrated');
        divRef.current.innerHTML = '<h1>hydrated</h1>';
    }

    return (
      <div ref={divRef} onClick={onPress}><h1>hydrate me</h1></div>
    );
}

export default Hydrated;