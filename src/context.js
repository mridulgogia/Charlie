import React from 'react';
import axios from 'axios';

export const Context = React.createContext();

export  class Provider extends React.Component {
    state = {
        trackList: [],
        heading: ''
    };

    componentDidMount() {
        axios.get()
            .then( res => console.log(res.data))
            .catch( err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;