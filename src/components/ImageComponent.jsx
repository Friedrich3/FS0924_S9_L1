/* eslint-disable react/prop-types */
import { Component } from "react";

class ImageComponent extends Component {
  render() {
    console.log(this.props)
    return (
    <>
        <div>
            <img src={this.props.src} alt={this.props.alt} width="200px" />
        </div>
    </>
    )
  }
}

export default ImageComponent
