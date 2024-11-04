import Hero from "./components/Hero";
import { Main } from "./components/Main/Main";
import { Features } from "./components/Features/Features";
import  Footer  from "./components/Footer";
import Navbar from "./components/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Features />
      <Footer />
    </div>
  );
};
export default Home;
