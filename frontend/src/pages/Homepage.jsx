import CallToAction from "../components/CallToAction";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";

function Homepage() {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <CallToAction />
    </div>
  );
}

export default Homepage;
