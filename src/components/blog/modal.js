import React, { useState } from "react"
import ReactModal from "react-modal"
import NewsLetter from "../blog/newsletter"
import globalStyles from "../../config/style-variables"

ReactModal.setAppElement("body")

const customStyles = {
  overlay: {
    zIndex: 10000,
    backgroundColor: "rgba(0, 0, 0, 0.58)",
    borderRadius: 0,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: globalStyles.backgroundColor,
    padding: 0,
    borderRadius: 0,
    border: "none",
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
  const [isModalOpen, setModalOpen] = useState(false)
  const [wasModalOpenAlready, setModalOpenAlready] = useState(false)
  // const modalCloseTimeout = 300
  disableScrollingIfModalOpen(isModalOpen)

  if (!wasModalOpenAlready) {
    setTimeout(() => {
      setModalOpenAlready(true)
      setModalOpen(true)
    }, 2000)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
      // closeTimeoutMS={modalCloseTimeout}
    >
      <NewsLetter
        enableMargin={false}
        closeModal={closeModal}
        showCloseButton={true}
      ></NewsLetter>
    </ReactModal>
  )
}
