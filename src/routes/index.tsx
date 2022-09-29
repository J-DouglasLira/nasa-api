import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/home/index';
import Details from '../pages/details';

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:id" element={<Details />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
