import React from "react";

export default ({ title, children, footer, isOpen }) => {
  console.log("open", isOpen);
  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-primary">
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};
