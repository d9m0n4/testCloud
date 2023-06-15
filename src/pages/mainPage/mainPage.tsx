import { Avatar } from '../../components/Avatar/Avatar';
import { MainPageForm } from '../../components/MainPageForm/mainPageForm';
import { ReactComponent as Icon } from '../../assets/folder.svg';

export const MainPage = () => {
  return (
    <div className="container">
      <div className="form__content">
        <div className="top">
          <Avatar name="AИ" />
          <div className="user__info">
            <div className="user__info-name">Иван Иванов</div>
            <ul className="user__info-links">
              <li>
                <Icon /> Telegram
              </li>
              <li>
                <Icon /> GitHub
              </li>
              <li>
                <Icon /> Resume
              </li>
            </ul>
          </div>
        </div>
        <div className="body">
          <MainPageForm />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};
