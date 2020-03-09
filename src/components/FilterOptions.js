import React from 'react'

export class FilterOptions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <span onClick={() => this.props.selectedFilter('ALL')}>All</span> | <span onClick={() => this.props.selectedFilter('INPROGRESS')}>Inprogress</span> | <span onClick={() => this.props.selectedFilter('COMPLETE')}>Complete</span>
            </React.Fragment>
        );
    }
}