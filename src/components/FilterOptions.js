import React from 'react'

export class FilterOptions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <a href="#" onClick={() => this.props.selectedFilter('ALL')}>All</a> | <a href="#" onClick={() => this.props.selectedFilter('INPROGRESS')}>Inprogress</a> | <a href="#" onClick={() => this.props.selectedFilter('COMPLETE')}>Complete</a>
            </React.Fragment>
        );
    }
}