import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let newOpacity=this.props.opacity*0.1;
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity<0.1? null:<div className="color-box" style={{opacity: newOpacity}}/>}
      </div>
    )
  }

}

