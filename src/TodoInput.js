/**
 * Created by bruce on 2017/1/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Input, Icon, message}from 'antd';

const inputStyle = {
    marginTop: 16
};

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    render() {
        const suffix = this.state.input ? <Icon type="close-circle" onClick={this.onClearInput.bind(this)}/> : null;
        return (
            <Input
                style={inputStyle}
                placeholder="在这儿输入你的任务名称，按回车提交"
                onPressEnter={this.onPressEnter.bind(this)}
                prefix={<Icon type="edit"/>}
                suffix={suffix}
                ref="input"
                value={this.state.input}
                onChange={this.onChangeInput.bind(this)}
            />
        );
    }

    onPressEnter() {
        if (this.state.input) {
            this.props.addTodo(this.state.input);
            this.setState({input: ''});
        } else {
            message.warning("没输入东西按毛线回车啊！");
        }
    }

    onChangeInput(e) {
        this.setState({
            input: e.target.value
        });
    }

    onClearInput() {
        ReactDOM.findDOMNode(this.refs.input).focus();
        this.setState({
            input: ''
        });
    }
}

export default TodoInput;