/**
 * Created by bruce on 2017/1/20.
 */
import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) =>
                    <Todo
                        key={index}
                        {...todo}
                        onToggleTodo={() => this.props.onToggleTodo(index)}
                        onDeleteTodo={() => this.props.onDeleteTodo(index)}
                    />
                )}
            </div>
        );
    }
};

TodoList.propTypes = {
    todos: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            completed: React.PropTypes.bool.isRequired,
            text: React.PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onToggleTodo: React.PropTypes.func.isRequired,
    onDeleteTodo: React.PropTypes.func.isRequired
};