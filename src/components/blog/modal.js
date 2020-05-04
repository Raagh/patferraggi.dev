import React, { useState } from "react"
import ReactModal from "react-modal"

ReactModal.setAppElement("body")

const customStyles = {
  overlay: {
    zIndex: 10000,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.58)",
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

export default () => {
  const [modalOpen, setModalOpen] = useState(true)
  // const modalCloseTimeout = 300
  disableScrollingIfModalOpen(modalOpen)
  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
      // closeTimeoutMS={modalCloseTimeout}
    >
      <button onClick={closeModal}>Close Modal</button>
    </ReactModal>
  )
}
