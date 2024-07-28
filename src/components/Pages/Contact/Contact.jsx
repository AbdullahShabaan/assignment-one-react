import LineIcon from "../../Icons/LineIcon";
import Title from "../../Title/Title";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container">
      <Title title="Contact" />
      <div className="contact px-5">
        <LineIcon title="conatct section" />

        <form className="w-75 m-auto p-5 ">
          <div className="mb-5">
            <input
              placeholder="userName"
              type="text"
              className="form-control"
              id="username"
              aria-describedby="username"
            />
          </div>
          <div className="mb-5">
            <input
              placeholder="userAge"
              type="number"
              className="form-control"
              id="age"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-5">
            <input
              placeholder="userEmail"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="userPassword"
            />
          </div>

          <button type="submit" className="btn btn-contact">
            send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
