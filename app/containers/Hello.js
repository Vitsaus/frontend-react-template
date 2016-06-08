import React from 'react';
import { connect } from 'react-redux';
import { setMessage, thunkMessage } from '../actions';
import Hello from '../components/Hello';

class HelloContainer extends React.Component {

    render() {

        return (
            <Hello onClick={this.props.onClick} msg={this.props.msg} />
        );

    }

}

HelloContainer.propTypes = {
    msg: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        msg: state.message.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            console.log('click div!');
            dispatch(thunkMessage('Hello world from redux!'));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloContainer);
