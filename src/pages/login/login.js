import loginTemplate from "./login.hbs";
import "../../css/style.scss";
import "./login.scss";

export const login = () => {
  return loginTemplate();
};

const root = document.querySelector("#root");
root.innerHTML = login();
