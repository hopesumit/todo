import React from 'react';
import { connect } from 'react-redux';
import { Add_Task_Action } from './Redux/Actions/actions'
class TextArea extends React.Component{
    constructor(props){
        super(props);
        this.state={
            task : ""
        }
        this.toggle = this.toggle.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggle(){
        this.props.onClick();
    }

    addTask(){
        if(this.state.task !== ""){
            this.props.onClick();
            //Do something to write it to the store
            this.props.dispatch( Add_Task_Action(this.state.task, this.props.board) );
        }

    }

    handleChange(e){
        e.preventDefault();
        var value = e.target.value
        this.setState({
            task: value
        })
    }

    render(){
        return(
            <div id="save_task">
          <textarea
            rows={5}
            id="input_value"
            style={{
              marginTop: 20,
              width: "calc(100% - 10px)",
              border: "none"
            }}
            onChange={this.handleChange}
            value={this.state.task}
          />
          <button
          onClick={this.addTask}
            style={{
              background: "#50A23C",
              marginTop: 20,
              minWidth: 100,
              color: "#fff",
              padding: 5,
              fontSize: 16
            }}
          >
            Add{" "}
          </button>
          <span onClick={this.toggle} style={{ marginLeft: 20 }}>X</span>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(TextArea);