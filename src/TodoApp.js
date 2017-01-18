/**
 * Created by bruce on 2017/1/18.
 */
import React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            count: 0
        };
    }

    render() {

        return (

            <div>
                <h1 style={{textAlign: 'center'}}>Todo App</h1>
                <TodoInput addTodo={this.addTodo.bind(this)}/>
                {
                    this.state.todos.length ?
                        this.state.todos.map((todo, index) =>
                            <TodoItem {...todo} index={index} key={index} deleteTodo={this.deleteTodo.bind(this)}/>
                        ) : <TodoItem empty="true"/>
                }
            </div>
        );

    }

    addTodo(todo) {
        this.state.todos.push({
            id: this.state.count + 1,
            name: todo,
            done: false
        });
        this.setState({
            todos: this.state.todos,
            count: this.state.count + 1
        });
    }

    deleteTodo(index) {
        console.log('delete ' + index);
        this.state.todos.splice(index, 1);
        console.log('todos ' + this.state.todos.length);
        this.setState({
            todos: this.state.todos,
            count: this.state.count - 1
        });
    }
}

export default TodoApp;