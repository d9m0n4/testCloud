import { Stepper } from '../../components/Stepper/Stepper';
import { StepOne } from './stepOne/stepOne';
import { StepTwo } from './stepTwo/stepTwo';
import './stepsPage.scss';

export const StepsPage = () => {
  return (
    <div className="container">
      <div className="step__content">
        <Stepper />
        <div className="step__body">
          {/* <StepOne /> */}
          <StepTwo />
        </div>
      </div>
    </div>
  );
};
