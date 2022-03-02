import React from 'react';

const ProductInfo = ({formData, setFormData}) => {
  return (
      <>
        <form className="row g-3 col-8 justify-content-center">
            <div className="col-md-6">
                <label className="form-label">Product Name</label>
                <input type="text" className="form-control" id="inputProductName" value={formData.productName} onChange={(object) => setFormData({ ...formData, productName: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Budget (Enter Approx Value it may differ)</label>
                <input type="text" className="form-control" id="inputBudget" value={formData.budget} onChange={(object) => setFormData({ ...formData, budget: object.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Product Scope</label>
                <select id="inputProductScope" className="form-select" value={formData.productScope} onChange={(object) => setFormData({ ...formData, productScope: object.target.value })} >
                    <option defaultValue>Choose</option>
                    <option>Global World Wide</option>
                    <option>Within a country</option>
                </select>
            </div>
            <div className="col-md-6">
                <label className="form-label">Advertisement Scope</label>
                <select id="inputAdvertisementScope" className="form-select" value={formData.advertisementScope} onChange={(object) => setFormData({ ...formData, advertisementScope: object.target.value })} >
                    <option defaultValue>Choose</option>
                    <option>Global World Wide</option>
                    <option>Within a country</option>
                </select>
            </div>
            <div className="col-md-6">
                <label className="form-label">Targeted Views</label>
                <input type="number" className="form-control" id="inputTarget" value={formData.targetViews} onChange={(object) => setFormData({ ...formData, targetViews: object.target.value })} />
            </div>
            <div className="col-md-12 mb-3">
                <label className="form-label">Please Upload Your Product Description File (Text, Audio, Video Anyone)</label>
                <input className="form-control" type="file" id="formFile" onChange={(object) => setFormData({ ...formData, infofile: object.target.files[0]})}/>
            </div>
        </form>
      </>
  );
};

export default ProductInfo;