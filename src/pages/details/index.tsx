import { Container } from './styles';

function Details() {
  return (
    <Container>
      <button
        onClick={() => {
          window.location.href = `/`;
        }}
      >
        <h1>Click Here to go back</h1>
      </button>
    </Container>
  );
}

export default Details;
