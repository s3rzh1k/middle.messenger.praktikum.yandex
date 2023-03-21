import loginTemplate from "./login.hbs";
import "./login.scss";
export const login = (props) => {
  return loginTemplate({ props });
};

const root = document.querySelector("#root");
root.innerHTML = loginTemplate();