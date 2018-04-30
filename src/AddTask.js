import React from 'react';

class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.props.onClick();
    }

    render(){
        return(
            <div id="add_task" onClick={this.toggle} style={{ cursor: "pointer", marginTop: 20 }}>
                 Add Task...
            </div>
        );
    }
}

export default AddTask;