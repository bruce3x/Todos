/**
 * Created by bruce on 2017/1/21.
 */
import React from 'react';
import {VisibilityFilters} from "../actions";
import {Radio} from 'antd';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

export default class Filter extends React.Component {
    render() {
        return (
            <RadioGroup
                size="small"
                defaultValue={VisibilityFilters.SHOW_ALL}
                onChange={(e) => this.props.onFilterChange(e.target.value)}>
                <RadioButton value={VisibilityFilters.SHOW_ALL}>全部</RadioButton>
                <RadioButton value={VisibilityFilters.SHOW_ACTIVE}>未完成</RadioButton>
                <RadioButton value={VisibilityFilters.SHOW_COMPLETED}>已完成</RadioButton>
            </RadioGroup>
        );
    }
}

Filter.propTypes = {
    filter: React.PropTypes.oneOf([
        VisibilityFilters.SHOW_ALL,
        VisibilityFilters.SHOW_COMPLETED,
        VisibilityFilters.SHOW_ACTIVE,
    ]).isRequired,
    onFilterChange: React.PropTypes.func.isRequired,
};