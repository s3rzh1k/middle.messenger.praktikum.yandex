import loginTemplate from "./login.hbs";
import "./login.scss";
import "../../css/style.scss";

export const login = () => {
  return loginTemplate();
};

const root = document.querySelector("#root");
root.innerHTML = login();