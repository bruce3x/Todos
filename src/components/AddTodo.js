/**
 * Created by bruce on 2017/1/20.
 */
import React from 'react';
import {Input,Icon, message} from 'antd';

export default class AddTodo extends React.Component {

    onPressEnter = (e) => {
        if (e.target.value.length) {
            this.props.onAddTodo(e.target.value);
            e.target.value = '';
        } else {
            message.warning("没输入东西按毛线回车啊！");
        }
    };

    render() {
        return (
            <Input
                style={{marginTop: 16}}
                placeholder="在这儿输入你的任务名称，按回车提交"
                onPressEnter={this.onPressEnter}
                prefix={<Icon type="edit"/>}
            />
        );
    }
}

AddTodo.propTypes= {
    onAddTodo: React.PropTypes.func.isRequired
};