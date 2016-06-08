import React from 'react';

export default class Hello extends React.Component {

    render() {

        return (
            <div onClick={this.props.onClick.bind(this)}>
                {this.props.msg}
            </div>
        );

    }

}

Hello.propTypes = {
    msg: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default Hello;
