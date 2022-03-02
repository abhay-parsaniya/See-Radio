import React from 'react'

const PersonalInfo = ({formData, setFormData}) => {

  return (
      <>
        <form className="row g-3 col-8 justify-content-center">
            <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" id="inputFirstName" value={formData.firstName} onChange={(object) => setFormData({ ...formData, firstName: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" id="inputLastName" value={formData.lastName} onChange={(object) => setFormData({ ...formData, lastName: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" value={formData.email} onChange={(object) => setFormData({ ...formData, email: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Contact No.</label>
                <input type="number" className="form-control" id="inputContactNo" value={formData.contactno} onChange={(object) => setFormData({ ...formData, contactno: object.target.value })} />
            </div>
            <div className="col-12">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" value={formData.address} onChange={(object) => setFormData({ ...formData, address: object.target.value })} placeholder="1234 Main St" />
            </div>
            <div className="col-md-6">
                <label className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" value={formData.city} onChange={(object) => setFormData({ ...formData, city: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">State</label>
                <input type="text" className="form-control" id="inputState" value={formData.clientState} onChange={(object) => setFormData({ ...formData, clientState: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Country</label>
                <input type="text" className="form-control" id="inputCountry" value={formData.country} onChange={(object) => setFormData({ ...formData, country: object.target.value })}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" value={formData.zip} onChange={(object) => setFormData({ ...formData, zip: object.target.value })}/>
            </div>
        </form>
      </>
  );
};

export default PersonalInfo;