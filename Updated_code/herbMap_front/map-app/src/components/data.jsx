import React, { Component } from 'react';

class Data extends Component {
    state = { 
        loading: true,
        plants: [],
     }

    componentDidMount() {
        fetch("https://herbarium-map-server.herokuapp.com/herbarium")
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                plants: data
            })
        })
     }

    render() { 
        var plants = this.state.plants;
        console.log(plants)
        return <div>
            {<div>plants</div>}
        </div>;
    }
}
 
export default Data;