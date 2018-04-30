import React from 'react';
import { connect } from 'react-redux';
class Header extends React.Component{
    render(){
      console.log(this.props);
        return (
            <div>
                <div
                  className="sec-bg"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", width: "30%" }}>
                    <div className="menu-item">-</div>
                    <div className="menu-item">Board</div>
                    <input type="text" className="menu-item" />
                    <div className="menu-item" style={{ marginLeft: "-10px" }}>
                      <i className="fa fa-search" />
                    </div>
                  </div>
                  <div style={{ width: "30%" }} className="menu-item">
                    {this.props.name} Logo
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "30%",
                      justifyContent: "flex-end"
                    }}
                  >
                    <div className="menu-item">+</div>
                    <div className="menu-item">i</div>
                    <div className="menu-item">B</div>
                    <div className="menu-item circular-item">VA</div>
                  </div>
                </div>
                <br />
                <br />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Header);