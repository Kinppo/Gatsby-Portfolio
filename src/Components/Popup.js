import React from "react"

const Popup = props => {
  return (() => {
    if (props.type === "sucess") {
      return (
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z" />
              </svg>
            </div>
            <div className="popup-text">
              <h4>THANK YOU!</h4>
              <h5>
                Your message has been recieved and I will be contacting you
                shortly.
              </h5>
              <button
                className="popup-close"
                onClick={() => props.setPopup("")}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )
    } else if (props.type === "error") {
      return (
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-icon" id="popup-inner-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
              </svg>
            </div>
            <div className="popup-text">
              <h4>There has been an error</h4>
              <h5>Please try again.</h5>
              <button
                className="popup-close"
                id="popup-close-error"
                onClick={() => props.setPopup("")}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return ""
    }
  })()
}

export default Popup
