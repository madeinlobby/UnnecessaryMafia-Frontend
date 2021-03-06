import React from "react";
import usImage from "../assets/icons/us.png";
import faImage from "../assets/icons/fa.png";
import "./components.css";

const englishDictionary = {
  username: "Username",
  password: "Password",
  firstName: "First name",
  lastName: "Last name",
  email: "E-mail",
  phoneNumber: "Phone number",
  alignment: "left",
};
const persianDictionary = {
  username: "نام کاربری",
  password: "رمز عبور",
  firstName: "نام",
  lastName: "نام خانوادگی",
  email: "پست الکترونیکی",
  phoneNumber: "شماره موبایل",
  alignment: "right",
};
export default function getWord(key) {
  if (window.language === "fa") {
    return persianDictionary[key];
  } else return englishDictionary[key];
}

export class DictionaryComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.onLangChange);
    this.state = {
      onLangChange: props.onLangChange,
    };
  }

  render() {
    return (
      <div className="flagContainer">
        <button
          className="flagButton"
          onClick={() => this.state.onLangChange("en")}
        >
          <img className="flag-icon-us" src={usImage} />
        </button>
        <button
          className="flagButton"
          onClick={() => this.state.onLangChange("fa")}
        >
          <img className="flag-icon-us" src={faImage} />
        </button>
      </div>
    );
  }
}
