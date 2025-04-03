import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import "../styles/ComplaintType.css"; 
import { Alert } from "@cmsgov/design-system";

const ComplaintType = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>("");
  const [showError, setShowError] = useState(false);

  const steps = [
    "Complaint Type",
    "Complainant Details",
    "FAE Details",
    "Complaint Details",
    "Review Complaint",
    "Submitted",
  ];

  const handleContinue = () => {
    if (!selectedType) {
      setShowError(true);
      return;
    }
    navigate("/complainant-details", {
      state: { complaintType: selectedType },
    });
  };

  const complaintTypes = [
    {
      id: "transactions",
      title: "Transactions",
      description:
        "Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment.",
    },
    {
      id: "codeSets",
      title: "Code Sets",
      description:
        "Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs.",
    },
    {
      id: "uniqueIdentifiers",
      title: "Unique Identifiers",
      description:
        "Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).",
    },
    {
      id: "operatingRules",
      title: "Operating Rules",
      description:
        "Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.",
    },
  ];

  return (
    <div className="container">
      <main className="main-container">
        <div className="ds-u-fill--white ds-u-overflow--hidden info">
          <ProgressBar currentStep={0} steps={steps} />
          <div className="head-div">
            <h2 className="info-header">Complaint Type</h2>
            <h3 className="head">Make a selection below</h3>
            {showError && !selectedType && (
              <Alert className="selected-type" role="alert" variation="error">Please select a complaint type to continue.</Alert>
            )}
            <div className="selected-div">
              {complaintTypes.map((type) => (
                <div key={type.id} className="relative-container">
                  <input
                    type="radio"
                    id={type.id}
                    name="complaintType"
                    value={type.id}
                    checked={selectedType === type.id}
                    onChange={(e) => {
                      setSelectedType(e.target.value);
                      setShowError(false);
                    }}
                    className="invisible-absolute"
                  />
                  <label
                    htmlFor={type.id}
                    className="ds-u-display--block p-4 ds-u-fill--white main"
                  >
                    <div className="ds-u-display--flex ds-u-align-items--center">
                      <div className="ds-u-display--flex ds-u-items-center ds-u-justify-content--center check">
                        <div
                          className={`condition ${
                            selectedType === type.id ? "bg-[#2e6da4]" : ""
                          }`}
                        ></div>
                      </div>
                      <div>
                        <h4 className="heading">{type.title}</h4>
                        <p className="paragraph">{type.description}</p>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="button-conatiner ds-u-display--flex ds-u-justify-content--between">
            <button onClick={() => navigate("/welcome")} className="navigate">
              ← Welcome
            </button>
            <button
              onClick={handleContinue}
              className={`complaint-button
                       ${selectedType ? "complaint-true" : "complaint-false"}`}
            >
              Complainant Information →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComplaintType;
