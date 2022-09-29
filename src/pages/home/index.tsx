import { Input, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import background from '../../assets/background.svg';
import LupaIcon from '../../assets/lupa-icon.svg';
import NasaIcon from '../../assets/nasa-icon.svg';
import { useImagesQuery } from '../../hooks';
import { Container, Galery, ImageBackground, ImagemContainer, SectionResults } from './styles';

type FormValues = {
  search: string;
  yearStart: string;
  yearEnd: string;
};

function Home() {
  const [searchText, setSearchText] = useState('');
  let result = 10000;
  const media_type = 'image';
  const [yearStart, setYearStart] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

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
      <div className="header">
        <div className="app-logo">
          <div>
            <img src={NasaIcon} alt="This figure shows the Icon of Nasa" />
          </div>
          <div className="title">NASA Search</div>
        </div>
        <div className="subtitle-1">Find Something Amazing </div>
        <div className="subtitle-2">in our vast file library!</div>
        <form className="searchContainer" onSubmit={submitForm}>
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
        </form>
      </div>
      <SectionResults>
        <div />
        <div className="results">
          <div className="controls">
            Results for:〝<span>{searchText}</span>〞
          </div>
          <div className="about">About {result} results</div>
        </div>
        <div />
      </SectionResults>
      <Galery>
        <ImagemContainer>
          {queryData?.collection?.items.map((item: any, index: number) => (
            <Link to={`/search/${index}`} key={item.href} state={{ data: item }}>
              <div className="card">
                <div className="img-container">
                  <img
                    key={item.href}
                    src={item?.links?.find((link: any) => link?.render === 'image')?.href}
                    alt=""
                  />
                </div>
                <div className="text-container">
                  <h1>Title: {item?.data[0]?.title}</h1>
                  <h3 className="location">Location: {item?.data[0]?.location}</h3>
                  <h4 className="photographer">
                    Photographer's name: {item?.data[0]?.photographer}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </ImagemContainer>
      </Galery>
    </Container>
  );
}

export default Home;
