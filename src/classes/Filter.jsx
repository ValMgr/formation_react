import React from 'react';

export default class Filter extends React.Component{


    render(){
        const {filter, isActive, callback} = this.props;
        const style = isActive ? "btn-secondary" : "btn-primary";
        const css = 'btn ' + style

        return(
            <button className={css} onClick={callback}>{filter}</button>
        )
    }
}