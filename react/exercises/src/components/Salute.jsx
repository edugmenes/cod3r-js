import React, { Component } from 'react'

// Class component:
export default class Salute extends Component {

    setType(e) {
        console.log(e.target.value);
    }

    render() {
        const { type, name } = this.props;
        return (
            <div>
                <h1>{type} {name}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={type} onChange={e => this.setType(e)}/>
                <input type="text" placeholder="Nome..." value={name} onChange={e => this.setType(e)}/>
            </div>
        )
    }
}