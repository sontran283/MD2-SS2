import React, { Component } from 'react';

class Children_Class_Comp extends Component {
    //  tao ham handleClick
    handleClick = () => {
        this.props.handleChangeName("BLACK PINK");
    }

    render() {
        return (
            <>
                <div>usernam ở Children_Class_Comp: {this.props.userName}</div>
                <button onClick={this.handleClick}>change props</button>
            </>
        );
    }
}

export default Children_Class_Comp;