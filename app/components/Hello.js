import React from 'react';
import { connect } from 'react-redux';
import { setMessage } from '../actions';


export default class HelloComponent extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick.bind(this)}>
                {this.props.msg}
            </div>
        );
    }
}

HelloComponent.propTypes = {
    msg: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

const mapStateToProps = () => {
    return {};
    /*
    return {
        msg: state.message.message
    };
    */
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            console.log('click div!');
            dispatch(setMessage('Hello world from redux!'));
        }
    };
};

const Hello = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloComponent);

export default Hello;
