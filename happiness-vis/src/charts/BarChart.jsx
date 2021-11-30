import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    // Import the data here

    /**
     * Function: componentDidMount()
     * Description: Checks to see whether the components mounts to the page.
     */
    componentDidMount() {
        let accessToRef = d3.select(this.myRef.current);
        accessToRef.style("background-color", "green");
    }
}

export default BarChart;