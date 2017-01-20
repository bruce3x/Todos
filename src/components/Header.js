/**
 * Created by bruce on 2017/1/20.
 */
import React from 'react'
import {VisibilityFilters}from '../actions'
import {Radio} from 'antd';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

export default class Header extends React.Component {

    render() {
        return (
            <RadioGroup
                style={{marginTop: 16}}
                defaultValue={VisibilityFilters.SHOW_ALL}
                onChange={(e) => this.props.onFilterChange(e.target.value)}>
                <RadioButton value={VisibilityFilters.SHOW_ALL}>全部</RadioButton>
                <RadioButton value={VisibilityFilters.SHOW_ACTIVE}>未完成</RadioButton>
                <RadioButton value={VisibilityFilters.SHOW_COMPLETED}>已完成</RadioButton>
            </RadioGroup>
        );
    }
}

Header.propTypes = {
    filter: React.PropTypes.oneOf([
        VisibilityFilters.SHOW_ALL,
        VisibilityFilters.SHOW_COMPLETED,
        VisibilityFilters.SHOW_ACTIVE,
    ]).isRequired,
    onFilterChange: React.PropTypes.func.isRequired
};