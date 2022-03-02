import React from 'react';

const CompanyInfo = ({formData, setFormData}) => {
  return (
      <>
        <form className="row g-3 col-8 justify-content-center">
            <div className="col-md-6">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" id="inputCompanyName" value={formData.companyName} onChange={(object) => setFormData({ ...formData, companyName: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Company Email</label>
                <input type="email" className="form-control" id="inputCompanyEmail" value={formData.companyEmail} onChange={(object) => setFormData({ ...formData, companyEmail: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Company Contact No.</label>
                <input type="number" className="form-control" id="inputCompanyContactNo" value={formData.companyContactno} onChange={(object) => setFormData({ ...formData, companyContactno: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Company Scope</label>
                <select id="inputCompanyScope" className="form-select" value={formData.companyScope} onChange={(object) => setFormData({ ...formData, companyScope: object.target.value })} >
                    <option defaultValue>Choose</option>
                    <option>Global World Wide</option>
                    <option>Within a country</option>
                </select>
            </div>
            <div className="col-12">
                <label className="form-label">Company Address</label>
                <input type="text" className="form-control" id="inputCompanyAddress" value={formData.companyAddress} onChange={(object) => setFormData({ ...formData, companyAddress: object.target.value })} placeholder="1234 Main St" />
            </div>
            <div className="col-md-6">
                <label className="form-label">Company City</label>
                <input type="text" className="form-control" id="inputCompanyCity" value={formData.companyCity} onChange={(object) => setFormData({ ...formData, companyCity: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Company State</label>
                <input type="text" className="form-control" id="inputCompanyState" value={formData.companyState} onChange={(object) => setFormData({ ...formData, companyState: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Company Country</label>
                <input type="text" className="form-control" id="inputCompanyCountry" value={formData.companyCountry} onChange={(object) => setFormData({ ...formData, companyCountry: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Company Zip</label>
                <input type="text" className="form-control" id="inputCompanyZip" value={formData.companyZip} onChange={(object) => setFormData({ ...formData, companyZip: object.target.value })} />
            </div>
        </form>
      </>
  );
};

export default CompanyInfo;