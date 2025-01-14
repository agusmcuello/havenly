import { Outlet } from "react-router-dom";
import { Navbar, Header, Loading } from "../components";
import { useNavigation } from "react-router-dom";
const Home = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default Home;
