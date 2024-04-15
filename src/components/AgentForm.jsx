import React from "react";

const AgentForm = () => {
  return (
    <div>
      <div className="border border-info p-3 bg-white">
        <h5 className="mb-3 d-flex justify-content-center">
          More about this propertyDetails
        </h5>
        <form>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg border-info"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg border-info"
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg border-info"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control border-info"
              style={{ height: "80px" }}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label text-muted fs-6"
              for="flexCheckDefault"
            >
              {" "}
              Default Checkbox
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label text-muted fs-6"
              for="flexCheckDefault"
            >
              {" "}
              Default Checkbox
            </label>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Email Agent"
              className="btn btn-block btn-outline-info btn-lg rounded-pill w-100"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgentForm;
