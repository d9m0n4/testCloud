import { FC } from 'react';
import './Stepper.scss';

interface StepperProps {}

export const Stepper: FC<StepperProps> = () => {
  const steps = [
    { isActive: true, v: 1 },
    { isActive: false, v: 2 },
    { isActive: false, v: 3 },
  ];

  return (
    <div className="stepper">
      {steps.map((step, i) => (
        <div className="step">
          <div className={`${'step__line'} ${step.isActive ? 'active' : ''}`}>
            <span className="step__icon"></span>
          </div>
          <p>{step.v}</p>
        </div>
      ))}
    </div>
  );
};
