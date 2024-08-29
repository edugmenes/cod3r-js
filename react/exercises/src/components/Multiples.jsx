import React from 'react';

const GoodAfternoon = props => (
    <h1>Good afternoon {props.name}!</h1>
)

const GoodNight = props => (
    <h1>Good night {props.name}!</h1>
)

export { GoodAfternoon, GoodNight };
export default { GoodAfternoon, GoodNight };