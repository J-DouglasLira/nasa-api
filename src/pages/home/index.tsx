import { SyntheticEvent, useEffect, useState } from 'react';
import Background from '../../assets/background.svg';
import LupaIcon from '../../assets/lupa-icon.svg';
import NasaIcon from '../../assets/nasa-icon.svg';
import { ISearch } from '../../interfaces/INasaAPI';
import NasaService from '../../services/NasaService';
import { Container, Galery, ImageBackground, ImgContainer, SectionResults } from './styles';

function Home() {
  const initialValue = 'orion';

  const [data, setData] = useState<ISearch>({} as ISearch);
  const [searchText, setSearchText] = useState(initialValue);
  const result = 10000000;

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };

    handleSearch(target.search.value);
  };

  const handleSearch = async (search: string) => {
    try {
      const response = await new NasaService().search(search);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => setSearchText(e.target.value);

  useEffect(() => {
    handleSearch(initialValue);
  }, []);

  return (
    <Container>
      <ImageBackground src={Background} alt="Background" />
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
            value={initialValue}
            onChange={handleChange}
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
      <Galery>
        <ImgContainer>
          {data?.collection?.items.map((item: any, key: number) => (
            <div key={key} className="img-container">
              {item?.links.map((link: any, key: number) => (
                <img key={link.href} src={link.href} alt="" />
              ))}
            </div>
          ))}
        </ImgContainer>
      </Galery>
    </Container>
  );
}

export default Home;
