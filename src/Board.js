import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import TextArea from "./TextArea";
import { connect } from 'react-redux';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            addTask : true,
            title: this.props.title
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.setState({
            addTask: !this.state.addTask
        })
    }
  render() {
      let title = this.state.title
      const TaskList = this.props.data.map(function(e,i){
          return <Task index={i} board={title} taskname={e} key={i} />
      })
    return (
      <div
        style={{
          borderRadius: 2,
          background: "#DEE0E2",
          minWidth: 250,
          padding: 10
        }}
      >
        <h4 style={{ marginTop: 5, marginBottom: 5 }}>{this.props.title}</h4>
        {TaskList}
        {this.state.addTask == true ? <AddTask onClick={this.handleChange}> </AddTask> :
        <TextArea board={this.props.title} onClick={this.handleChange}></TextArea>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps)(Board);
