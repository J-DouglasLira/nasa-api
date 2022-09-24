import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from '../pages/details';
import Home from '../pages/home';

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Details />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
