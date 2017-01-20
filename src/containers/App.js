/**
 * Created by bruce on 2017/1/20.
 */
import React from 'react';
import {connect} from "react-redux";
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import {VisibilityFilters, toggleTodo, deleteTodo, addTodo, setVisibilityFilter} from "../actions";

class App extends React.Component {

    render() {
        return (
            <div style={{width: 400, margin: '100px auto'}}>
                <h1 style={{textAlign: 'center'}}>Todo App</h1>
                <AddTodo
                    onAddTodo={text => this.props.onAddTodo(text)}/>
                <TodoList
                    onToggleTodo={index => this.props.onToggleTodo(index)}
                    onDeleteTodo={index => this.props.onDeleteTodo(index)}
                    todos={this.props.visibleTodos}/>
                <Footer
                    filter={this.props.visibilityFilter}
                    onFilterChange={filter => this.props.onFilterChange(filter)}/>
            </div>
        );
    }
}

App.propTypes = {
    visibleTodos: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            text: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    visibilityFilter: React.PropTypes.oneOf([
        VisibilityFilters.SHOW_ALL,
        VisibilityFilters.SHOW_COMPLETED,
        VisibilityFilters.SHOW_ACTIVE,
    ]).isRequired
};

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilters.SHOW_ALL:
        default:
            return todos;
    }
}

const mapStateToProps = state => ({
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
    onAddTodo: text => dispatch(addTodo(text)),
    onToggleTodo: index => dispatch(toggleTodo(index)),
    onDeleteTodo: index => dispatch(deleteTodo(index)),
    onFilterChange: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);