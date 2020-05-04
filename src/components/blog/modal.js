import React, { Component } from "react"
import ReactModal from "react-modal"

ReactModal.setAppElement("body")

const customStyles = {
  overlay: {
    zIndex: 10000,
    height: "100%",
    position: "absolute",
    backgroundColor: "transparent",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const disableScrollingIfModalOpen = isOpen => {
  const body =
    typeof document !== `undefined`
      ? document.getElementsByTagName("body")[0]
      : { style: { overflow: "" } }

  body.style.overflow = isOpen ? "hidden" : "visible"
}

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: true,
    }
    disableScrollingIfModalOpen(true)
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
    disableScrollingIfModalOpen(false)
  }

  render() {
    return (
      <ReactModal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleModalClose}
        contentLabel="Example Modal In Gatsby"
        style={customStyles}
      >
        <button onClick={this.handleModalClose}>Close Modal</button>
      </ReactModal>
    )
  }
}

export default Modal
