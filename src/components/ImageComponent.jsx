/* eslint-disable react/prop-types */
import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
    <>
        <div>
            <img src={this.props.src} alt={this.props.alt} className="logo logo-spin" />
        </div>
    </>
    )
  }
}

export default ImageComponent
