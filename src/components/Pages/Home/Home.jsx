import "./Home.css";
import avatar from "../../../assets/avataaars.svg";
import LineIcon from "../../Icons/LineIcon";
import Title from "../../Title/Title";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center text-center py-4 text-white h-100 ">
      <Title title="Home" />
      <div className="card-home">
        <div className="photo w-75 text-center m-auto px-4">
          <img className="w-100" src={avatar} alt="avatar" />
        </div>
        <LineIcon title="start Framework" />
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
};

export default Home;
