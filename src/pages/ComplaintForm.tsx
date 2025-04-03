import { useNavigate } from 'react-router-dom';
import '../styles/ComplaintForm.css';

const ComplaintForm = () => {
  const navigate = useNavigate();

  return (
    <div className="conatiner">
      <main className="element">
        <div className="ds-u-fill--white ds-u-overflow--hidden custom-element">
          <div className="custom-header">
            <h1 className="ds-u-font-weight--bold custom-header-h1">
              Administrative Simplification Enforcement and Testing Tool
              <span className="ds-u-display--block header-h1">(ASETT)</span>
            </h1>
          </div>
          <div className="disclaimer">
            <div className="ds-u-display--flex ds-u-items-center disclaimer-text ds-u-align-items--center">
              <svg className="disclaimer-text-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="description">
                Disclaimer: If you file a complaint without registration, you will not be able to view your complaints, upload supporting documents, correspond electronically, or test transactions.
              </p>
            </div>
          </div>
          <div className="paragraph">
            <p className="para-header">
              The following is the list of steps you will take in order to file a complaint regarding HIPAA Transactions and Code Sets, Unique Identifiers, and/or Operating Rules. If you wish to file a Health Insurance Privacy complaint, please visit the{' '}
              <a href="#" className="para-link">Office for Civil Rights (OCR)</a> website.
            </p>
            <div className="space-y-6">
              {[
                "Identify the type of HIPAA/ACA complaint",
                "Provide your contact information",
                "Identify the Filed Against Entity",
                "Describe the HIPAA/ACA violation",
                "Review and Submit"
              ].map((step, index) => (
                <div key={index} className="ds-u-display--flex items-center para-heading">
                  <div className="ds-u-display--flex ds-u-items-center ds-u-justify-content--center para-info ds-u-align-items--center">
                    {index + 1}
                  </div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <div className="cms-info">
              <p className="cms-description">
                You can review all information entered before submitting your complaint to CMS. Once the complaint is submitted, CMS will review all information and respond to your complaint.
              </p>
            </div>
          </div>
          <div className="button-container ds-u-display--flex ds-u-justify-content--between">
            <button className="button">
              Cancel
            </button>
            <button
              onClick={() => navigate('/complaint-type')}
              className="complaint-info">
              Complainant Information
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComplaintForm; 