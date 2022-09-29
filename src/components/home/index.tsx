import { Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LupaIcon from '../../assets/lupa-icon.svg';
import { useImagesQuery } from '../../hooks';
import { IFormValues } from '../../interfaces/IFormValues';
import AppLogoContainer from './homeHeader/HomeHader';
import {
  CardContainer,
  Controls,
  Galery,
  Header,
  ImagemContainer,
  Results,
  SearchFormContainer,
  SectionResults,
  TextContainer
} from './styles';

export interface IItem {}

function Home() {
  const [searchText, setSearchText] = useState('');
  const media_type = 'image';
  const [yearStart, setYearStart] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const { register, handleSubmit } = useForm<IFormValues>();

  const { data: queryData, refetch } = useImagesQuery({
    q: searchText,
    year_start: yearStart ? yearStart : undefined,
    year_end: yearEnd ? yearEnd : undefined,
    media_type
  });

  console.log(queryData);

  const submitForm = handleSubmit((data) => {
    setSearchText(data.search);
    setYearStart(data?.yearStart);
    setYearEnd(data?.yearEnd);
  });

  useEffect(() => {
    refetch();
  }, [searchText]);

  return (
    <>
      <Header>
        <AppLogoContainer />
        <SearchFormContainer onSubmit={submitForm}>
          <input
            type="text"
            pattern="^[a-zA-Z]+$"
            placeholder="Search your image"
            alt="here you type what you want to search"
            {...register('search', { required: true })}
          />
          <Stack spacing={4}>
            <input
              placeholder="Year Start"
              width="auto"
              pattern="^[0-9]+$"
              alt="here you type the start year of the searched picture"
              {...register('yearStart')}
            />
            <input
              pattern="^[0-9]+$"
              placeholder="Year End"
              width="auto"
              alt="here you type the end year of the searched picture"
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
          {queryData?.collection?.items.map((item, index: number) => (
            <Link to={`/search/${index}`} key={item.href} state={{ data: item }}>
              <CardContainer>
                <div>
                  <img
                    key={item.href}
                    src={item?.links?.find((link) => link?.render === 'image')?.href}
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
    </>
  );
}

export default Home;
