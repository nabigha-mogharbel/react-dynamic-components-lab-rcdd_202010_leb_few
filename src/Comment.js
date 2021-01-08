//your code here
import React, {Component} from 'react'
import BlogPost from './BlogPost.js'

export default class X extends Component {
  render(){
    return(
      <div className="comment" >{this.props.commentText}</div>
    )
  }
}