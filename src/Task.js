import React from 'react';
import { connect } from 'react-redux';
import { Delete_Task_Action } from './Redux/Actions/actions';

class Task extends React.Component{
  constructor(props){
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(){
    this.props.dispatch(Delete_Task_Action(this.props.board, this.props.index));
  }
    
  render(){
        return(
            <div id="task_list">
              <div
                className="task-item"
              >
                {this.props.taskname}
                <span onClick={this.deleteTask} style={{ float: 'right' }}>X</span>
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(Task);