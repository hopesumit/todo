import React from "react";
import Board from './Board';
import { connect } from 'react-redux';

class Body extends React.Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
         <Board title="todo" data={this.props.todo}></Board>
        <Board title="doing" data={this.props.doing}></Board>
        <Board title="done" data={this.props.done}></Board>    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log('state: ', state);
    return state.firstReducer
}

export default connect(mapStateToProps)(Body);
