import { SyntheticEvent, useEffect, useState } from 'react';
import LupaIcon from '../../assets/lupa-icon.svg';
import NasaIcon from '../../assets/nasa-icon.svg';
import { useImagesQuery } from '../../hooks';
import { Container, Galery, ImagemContainer, SectionResults } from './styles';

function Home() {
  const [searchText, setSearchText] = useState('');
  let result = 10000;

  const { data: queryData, refetch } = useImagesQuery({ q: searchText });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    setSearchText(target.search.value);
  };

  useEffect(() => {
    refetch();
  }, [searchText]);

  return (
    <Container>
      <div className="header">
        <div className="app-logo">
          <div>
            <img src={NasaIcon} alt="This figure shows the Icon of Nasa" />
          </div>
          <div className="title">NASA Search</div>
        </div>
        <div className="subtitle-1">Find Something Amazing </div>
        <div className="subtitle-2">in our vast file library!</div>
        <form className="searchContainer" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search your image"
            alt=" here you type what you want to search"
          />
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
      <hr />
      <Galery>
        <ImagemContainer>
          {queryData?.collection?.items.map((item: any, index: number) => (
            <div
              key={item.href}
              className="card"
              onClick={() => {
                window.location.href = `/search/${index}`;
              }}
            >
              <div className="img-container">
                <img
                  key={item.href}
                  src={item?.links?.find((link: any) => link?.render === 'image')?.href}
                  alt=""
                />
              </div>
              <div className="text-container">
                <h1>{item?.data[0]?.title}</h1>
                <p className="fileSize">185 MB · 14 minutes ago</p>
              </div>
            </div>
          ))}
        </ImagemContainer>
      </Galery>
    </Container>
  );
}

export default Home;

/* 

 

*/
