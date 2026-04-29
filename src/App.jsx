import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import Content from "./components/base/Content";

import ContextContainer from "./ContextContainer";

import "./App.css";

const App = () => {
  return (
    <ContextContainer>
      <Header />
			<Content />
      <Footer />
    </ContextContainer>
  );
};

export default App;
