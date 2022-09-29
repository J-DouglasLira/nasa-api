import background from '../../assets/background.svg';
import Home from '../../components/home';
import { Container, ImageBackground } from './styles';

export const HomePage = () => {
  return (
    <Container>
      <ImageBackground src={background} alt="Background" />
      <Home />
    </Container>
  );
};
