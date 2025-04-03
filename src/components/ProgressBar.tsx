import React from 'react';
import '../styles/ProgressBar.css';

interface ProgressBarProps {
  currentStep: number;
  steps: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, steps }) => {
  return (
    <nav aria-label="Progress" className="custom-border">
      <ol className="ds-u-margin--0 ds-u-padding--0 ds-u-flex-direction--row ds-u-flex-wrap--wrap
">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <li key={step} className="flex-item">
              <div
                className={`
                  ds-u-display--flex ds-u-align-items--center ds-u-justify-content--center ds-u-font-weight--medium custom-nav 
                  ${isCompleted 
                    ? 'condition-div' 
                    : isCurrent 
                      ? 'progress-true' 
                      : 'progress-false'
                  }
                  custom-nowrap
                `}
              >
                <span className="custom-text-center">{step}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default ProgressBar; 