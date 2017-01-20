/**
 * Created by bruce on 2017/1/21.
 */
import React from 'react';

export default class Counter extends React.Component {

    render() {
        return (
            <span
                style={{
                    float: 'right',
                    fontSize:14,
                    display: this.props.total ? 'inline-block' : 'none'
                }}>
                <span style={{color: '#090'}}>已完成 {this.props.completed}</span>
                <span> / 总计 {this.props.total}</span>
            </span>
        );
    }
}

Counter.propTypes = {
    completed: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired,
};