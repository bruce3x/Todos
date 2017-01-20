/**
 * Created by bruce on 2017/1/20.
 */
import React from 'react';
import {Input, Icon, message} from 'antd';

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    onPressEnter = () => {
        if (this.state.input) {
            this.props.onAddTodo(this.state.input);
            this.onClearInput();
        } else {
            message.warning("没输入东西按毛线回车啊！");
        }
    };

    onChangeInput = (e) => {
        this.setState({input: e.target.value});
    };

    onClearInput = () => {
        this.refs.input.focus();
        this.setState({input: ''});
    };

    render() {
        const suffix = this.state.input ? <Icon type="close-circle" onClick={this.onClearInput}/> : null;
        return (
            <Input
                style={{marginTop: 16}}
                ref="input"
                placeholder="在这儿输入你的任务名称，按回车提交"
                prefix={<Icon type="edit"/>}
                suffix={suffix}
                value={this.state.input}
                onPressEnter={this.onPressEnter}
                onChange={this.onChangeInput}
            />
        );
    }
}

AddTodo.propTypes = {
    onAddTodo: React.PropTypes.func.isRequired
};