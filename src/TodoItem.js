/**
 * Created by bruce on 2017/1/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Checkbox, Button} from 'antd';


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: props.done || false,
        };
    }

    render() {
        if (this.props.empty) {
            return <Card
                style={{
                    marginTop: 8,
                    height: 60,
                    fontSize: 16,
                    paddingTop: 7
                }}
                bodyStyle={{padding: 10}}
            >一个任务都没有！</Card>;
        }

        return (
            <Card
                style={{
                    marginTop: 8,
                    height: 60,
                }}
                bodyStyle={{padding: 10}}
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseOut={this.onMouseOut.bind(this)}
            >
                <Checkbox
                    style={
                        {
                            textDecoration: this.state.done ? 'line-through' : 'none',
                            fontSize: 16,
                            marginTop: 7
                        }
                    }
                    onChange={this.onChange.bind(this)}
                    checked={this.state.done}
                >{this.props.name}</Checkbox>
                <Button
                    ref="del"
                    type='default'
                    style={{
                        float: 'right',
                        height: 30,
                        marginTop: 5,
                        display: 'none'
                    }}
                    onClick={this.onDelete.bind(this)}
                >删除</Button>
            </Card>
        );
    }

    onChange(e) {
        this.setState({
            done: e.target.checked
        });
    }

    onMouseOver() {
        ReactDOM.findDOMNode(this.refs.del).style.display = 'inline-block';

    }

    onMouseOut() {
        ReactDOM.findDOMNode(this.refs.del).style.display = 'none';
    }

    onDelete() {
        this.props.deleteTodo(this.props.index);
    }
}


export default TodoItem;
