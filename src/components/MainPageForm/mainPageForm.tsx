import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import './mainPageForm.scss';

export const MainPageForm = () => {
  return (
    <div className="form__group">
      <form className="main__form">
        <Input onChange={(c) => console.log(c)} label="Номер телефона" />
        <Input onChange={(c) => console.log(c)} label="Email" />
        <div className="main__form-button">
          <Button id="button-start">Начать</Button>
        </div>
      </form>
    </div>
  );
};
