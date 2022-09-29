import { Input, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import background from '../../assets/background.svg';
import LupaIcon from '../../assets/lupa-icon.svg';
import NasaIcon from '../../assets/nasa-icon.svg';
import { useImagesQuery } from '../../hooks';
import {
  AppLogo,
  CardContainer,
  Container,
  Controls,
  Galery,
  Header,
  ImageBackground,
  ImagemContainer,
  Results,
  SearchFormContainer,
  SectionResults,
  Subtitle1,
  Subtitle2,
  TextContainer,
  Title
} from './styles';

type FormValues = {
  search: string;
  yearStart: string;
  yearEnd: string;
};

function Home() {
  const [searchText, setSearchText] = useState('');
  const media_type = 'image';
  const [yearStart, setYearStart] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const { register, handleSubmit } = useForm<FormValues>();

  const { data: queryData, refetch } = useImagesQuery({
    q: searchText,
    year_start: yearStart ? yearStart : undefined,
    year_end: yearEnd ? yearEnd : undefined,
    media_type
  });

  const submitForm = handleSubmit((data) => {
    setSearchText(data.search);
    setYearStart(data?.yearStart);
    setYearEnd(data?.yearEnd);
  });

  useEffect(() => {
    refetch();
  }, [searchText]);

  return (
    <Container>
      <ImageBackground src={background} alt="Background" />
      <Header>
        <AppLogo>
          <div>
            <img src={NasaIcon} alt="This figure shows the Icon of Nasa" />
          </div>
          <Title>NASA Search</Title>
        </AppLogo>
        <Subtitle1>Find Something Amazing</Subtitle1>
        <Subtitle2>in our vast file library!</Subtitle2>
        <SearchFormContainer onSubmit={submitForm}>
          <input
            type="text"
            pattern="^[a-zA-Z]+$"
            placeholder="Search your image"
            alt="here you type what you want to search"
            {...register('search', { required: true })}
          />
          <Stack spacing={4}>
            <Input
              variant="yearStart"
              placeholder="Year Start"
              width="auto"
              pattern="^[0-9]+$"
              {...register('yearStart')}
            />
            <Input
              variant="yearEnd"
              pattern="^[0-9]+$"
              placeholder="Year End"
              width="auto"
              {...register('yearEnd')}
            />
          </Stack>
          <button>
            <img src={LupaIcon} alt="Click Here to Search what you want" />
          </button>
        </SearchFormContainer>
      </Header>
      <SectionResults>
        <div />
        <Results>
          <Controls>
            Results for:〝<span>{searchText}</span>〞
          </Controls>
        </Results>
        <div />
      </SectionResults>
      <Galery>
        <ImagemContainer>
          {queryData?.collection?.items.map((item: any, index: number) => (
            <Link to={`/search/${index}`} key={item.href} state={{ data: item }}>
              <CardContainer>
                <div>
                  <img
                    key={item.href}
                    src={item?.links?.find((link: any) => link?.render === 'image')?.href}
                    alt=""
                  />
                </div>
                <TextContainer>
                  <h1>Title: {item?.data[0]?.title}</h1>
                  <h3 className="location">Location: {item?.data[0]?.location}</h3>
                  <h4 className="photographer">
                    Photographer's name: {item?.data[0]?.photographer}
                  </h4>
                </TextContainer>
              </CardContainer>
            </Link>
          ))}
        </ImagemContainer>
      </Galery>
    </Container>
  );
}

export default Home;
