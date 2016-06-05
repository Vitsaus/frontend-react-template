import React from 'react';

export default class Layout extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

Layout.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};
