/**
 * Created by bruce on 2017/1/20.
 */
import React from 'react'
import {VisibilityFilters}from '../actions'
import Filter from './Filter';
import Counter from './Counter';

export default class Header extends React.Component {

    render() {
        return (
            <div
                style={{marginTop: 16}}>
                <Filter {...this.props}/>
                <Counter {...this.props}/>
            </div>
        );
    }
}

Header.propTypes = {
    filter: React.PropTypes.oneOf([
        VisibilityFilters.SHOW_ALL,
        VisibilityFilters.SHOW_COMPLETED,
        VisibilityFilters.SHOW_ACTIVE,
    ]).isRequired,
    onFilterChange: React.PropTypes.func.isRequired,
    completed: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired,
};