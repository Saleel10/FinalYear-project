import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './App';
import Results from './pages/Result';
import PageTransition from './PageTransition';
import Launch from './pages/Launch';

function Router() {
  return (
    <BrowserRouter>
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

export default Router;
