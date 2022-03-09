import React from "react";

function AddDesigner({ formData, submitform, handleChange }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary my-2 "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        + Add Designer
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title px-1" id="exampleModalLabel">
                Add New Designer
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row d-flex flex-wrap">
                  <form
                    className="justify-content-center"
                    onSubmit={submitform}
                  >
                    <div>
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputFirstName"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputLastName"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        name="designeremail"
                        value={formData.designeremail}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label">Set Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        name="designerpassword"
                        value={formData.designerpassword}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label">Contact No.</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputContactNo"
                        name="designercontactno"
                        value={formData.designercontactno}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        name="designercity"
                        value={formData.designercity}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label">Experience</label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputexperience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label">Qualification</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputqualification"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-3">
                      <button className="btn btn-primary" type="submit">
                        Add new Designer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDesigner;
