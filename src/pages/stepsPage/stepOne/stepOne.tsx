import { Input } from '../../../components/Input/Input';
import { Button, ButtonVariant } from '../../../components/Button/Button';

export const StepOne = () => {
  return (
    <>
      <div className="step__body-form">
        <Input label="Nickname" onChange={(e) => console.log(e)} />
        <Input label="Name" onChange={(e) => console.log(e)} />
        <Input label="Sername" onChange={(e) => console.log(e)} />
        {/* select */}
      </div>
      <div className="step__body-nav">
        <Button variant={ButtonVariant.SECONDARY}>Назад</Button>
        <Button>Далее</Button>
      </div>
    </>
  );
};
