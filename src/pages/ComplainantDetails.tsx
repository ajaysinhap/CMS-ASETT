import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { formStyles } from "../styles/FormStyles";
import "../styles/ComplainantDetails.css";

interface FormData {
  isAnonymous: boolean;
  organizationName: string;
  organizationType: string;
  organizationTypeOther: string;
  organizationRole: string;
  phoneNumber: string;
  title: string;
  firstName: string;
  mi: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  cityTown: string;
  stateTerritory: string;
  zipCode: string;
  email: string;
  contactPhone: string;
  cellPhone: string;
}

const ComplainantDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<FormData>({
    isAnonymous: false,
    organizationName: "",
    organizationType: "",
    organizationTypeOther: "",
    organizationRole: "",
    phoneNumber: "",
    title: "",
    firstName: "",
    mi: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    cityTown: "",
    stateTerritory: "",
    zipCode: "",
    email: "",
    contactPhone: "",
    cellPhone: "",
  });

  const steps = [
    "Complaint Type",
    "Complainant Details",
    "FAE Details",
    "Complaint Details",
    "Review Complaint",
    "Submitted",
  ];

  React.useEffect(() => {
    if (!location.state?.complaintType) {
      navigate("/complaint-type");
    }
  }, [location, navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="conatiner">
      <main className="element">
        <div className="ds-u-fill--white main-element ds-u-overflow--hidden">
          <ProgressBar currentStep={1} steps={steps} />
          <div className="form-container">
            <h2 className="custom-header">Complainant Details</h2>
            <div className="header-container">
              <div className="custom-class">
                <label className="ds-u-display--flex ds-u-align-items--start checkbox">
                  <div className="relative mt-1">
                    <input
                      type="checkbox"
                      name="isAnonymous"
                      checked={formData.isAnonymous}
                      onChange={handleInputChange}
                      className={`input-field ${formStyles.checkbox}`}
                      
                    />
                  </div>
                  <div>
                    <span className="custom-text">
                      Do you want to remain anonymous during this process?{" "}
                      <span className="text-red ds-u-font-weight--bold">*</span>
                    </span>
                    <p className="description">
                      Disclaimer: If you select yes, CMS will not share your
                      information with the filed against entity. However, please
                      note that your complaint is subject to view and access
                      under the Freedom of Information Act.
                    </p>
                  </div>
                </label>
              </div>
              <div className={formStyles.section}>
                <h3 className={formStyles.sectionTitle}>
                  Organization Information
                </h3>
                <div className="organization-container">
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>
                      Complainant Organization Name{" "}
                      <span className="text-red ds-u-font-weight--bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Enter organization name"
                      required
                    />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>
                      Complainant Organization Type
                    </label>
                    <select
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">--Select Organization Type--</option>
                      <option value="provider">Provider</option>
                      <option value="payer">Payer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                {formData.organizationType === "other" && (
                  <div className={`${formStyles.formGroup} mt-6`}>
                    <label className={formStyles.label}>
                      Other Organization Type
                    </label>
                    <input
                      type="text"
                      name="organizationTypeOther"
                      value={formData.organizationTypeOther}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Specify organization type"
                    />
                  </div>
                )}
              </div>
              <div className={formStyles.section}>
                <h3 className={formStyles.sectionTitle}>
                  Personal Information
                </h3>
                <div className="personal-container">
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>
                      Complainant Title
                    </label>
                    <select
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className='input-field'
                    >
                      <option value="">--Select Title--</option>
                      <option value="mr">Mr.</option>
                      <option value="mrs">Mrs.</option>
                      <option value="ms">Ms.</option>
                      <option value="dr">Dr.</option>
                    </select>
                  </div>
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>
                      First Name{" "}
                      <span className="text-red ds-u-font-weight--bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>Middle Initial</label>
                    <input
                      type="text"
                      name="mi"
                      value={formData.mi}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Enter middle initial"
                    />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>
                      Last Name{" "}
                      <span className="text-red ds-u-font-weight--bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={formStyles.section}>
                <h3 className={formStyles.sectionTitle}>Address Information</h3>
                <div className="address-container">
                  <div className={`${formStyles.formGroup} sm:col-span-2`}>
                    <label className={formStyles.label}>
                      Address Line 1{" "}
                      <span className="text-red ds-u-font-weight--bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Street address"
                      required
                    />
                  </div>
                  <div className={`${formStyles.formGroup} sm:col-span-2`}>
                    <label className={formStyles.label}>Address Line 2</label>
                    <input
                      type="text"
                      name="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Apartment, suite, unit, etc."
                    />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>
                      City/Town{" "}
                      <span className="text-red ds-u-font-weight--bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="cityTown"
                      value={formData.cityTown}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Enter city or town"
                      required
                    />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>
                      State/Territory{" "}
                      <span className="text-red ds-u-font-weight--bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="stateTerritory"
                      value={formData.stateTerritory}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Enter state or territory"
                      required
                    />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>
                      ZIP Code{" "}
                      <span className="text-red ds-u-font-weight--bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Enter ZIP code"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={formStyles.section}>
                <h3 className={formStyles.sectionTitle}>Contact Information</h3>
                <div className="contact-container">
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>
                      Email Address{" "}
                      <span className="text-red ds-u-font-weight--bold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>
                      Phone Number{" "}
                      <span className="text-red ds-u-font-weight--bold">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label className={formStyles.label}>Cell Phone</label>
                    <input
                      type="tel"
                      name="cellPhone"
                      value={formData.cellPhone}
                      onChange={handleInputChange}
                      className='input-field'
                      placeholder="Enter cell phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComplainantDetails;
