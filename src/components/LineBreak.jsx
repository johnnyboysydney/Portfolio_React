import React, { Component } from 'react';
class LineBreak extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <hr className="line" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LineBreak;