import { Input } from '../../../components/Input/Input';
import { Button, ButtonVariant } from '../../../components/Button/Button';
import { ReactComponent as Plus } from '../../../assets/plus.svg';

export const StepTwo = () => {
  return (
    <>
      <div className="step__body-form">
        <div className="step__body-form__title">Advantages</div>
        <Input onChange={(e) => console.log(e)} />
        <Input onChange={(e) => console.log(e)} />
        <Input onChange={(e) => console.log(e)} />
        <div className="step__body-btn">
          <Button variant={ButtonVariant.SECONDARY}>
            <Plus />
          </Button>
        </div>
        <div className="checkbox__group"></div>
        <div className="radio__group"></div>
      </div>
      <div className="step__body-nav">
        <Button variant={ButtonVariant.SECONDARY}>Назад</Button>
        <Button>Далее</Button>
      </div>
    </>
  );
};
