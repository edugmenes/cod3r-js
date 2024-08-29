import React, { Fragment } from 'react';

// Props is the propreties passed to this component:
export default props => (
    // This tag is used to wrap internal elements.
    <Fragment> 
        <h1>Good morning {props.name}!</h1>
        <h2>See you soon!</h2>
    </Fragment>
);

// export default props => [
//     // Elements inside an array: Warning => it should have a key
//     <h1 key="h1">Good morning {props.name}!</h1>,
//     <h2 key="h2">See you soon!</h2>
// ];