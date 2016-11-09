import React from 'react';

export default class Layout extends React.Component {

    render() {

        return (
            <div className='row'>
                <div className='col-md-6'>{this.props.children}</div>
                <div className='col-md-6'>Right</div>
            </div>
        );

    }

}

Layout.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};
