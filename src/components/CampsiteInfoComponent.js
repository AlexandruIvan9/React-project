import React, { Component } from 'react';

class CampsiteInfo extends Component {
    constructor (props) {
        super (props);
        this.props = props;
    }
    render() {
        if (this.props.campsite) {
            return(
                <div className="row"></div>
            );
        }
        else {
            return <div/>
        }
    }
}

export default CampsiteInfo;