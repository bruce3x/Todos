/**
 * Created by bruce on 2017/1/20.
 */
import React from 'react'
import {VisibilityFilters}from '../actions'

export default class Footer extends React.Component {
    renderFilter = (filter, name) => {
        if (filter === this.props.filter) {
            return name;
        }

        return (
            <a
                href="#"
                onClick={() => this.props.onFilterChange(filter)}>
                {name}
            </a>
        );
    };

    render() {
        return (
            <p>
                Show:
                {" "}
                {this.renderFilter(VisibilityFilters.SHOW_ALL, 'All')}
                {", "}
                {this.renderFilter(VisibilityFilters.SHOW_COMPLETED, 'Completed')}
                {", "}
                {this.renderFilter(VisibilityFilters.SHOW_ACTIVE, 'Active')}
            </p>
        );
    }
}

Footer.propTypes = {
    filter: React.PropTypes.oneOf([
        VisibilityFilters.SHOW_ALL,
        VisibilityFilters.SHOW_COMPLETED,
        VisibilityFilters.SHOW_ACTIVE,
    ]).isRequired,
    onFilterChange: React.PropTypes.func.isRequired
};