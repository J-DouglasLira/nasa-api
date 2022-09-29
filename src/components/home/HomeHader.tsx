import NasaIcon from '../../assets/nasa-icon.svg';
import { AppLogo, Subtitle1, Subtitle2, Title } from './styles';

const AppLogoContainer = () => {
  return (
    <>
      <AppLogo>
        <div>
          <img src={NasaIcon} alt="This figure shows the Icon of Nasa" />
        </div>
        <Title>NASA Search</Title>
      </AppLogo>
      <Subtitle1>Find Something Amazing</Subtitle1>
      <Subtitle2>in our vast file library!</Subtitle2>
    </>
  );
};
export default AppLogoContainer;
