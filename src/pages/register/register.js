import registerTemplate from "./register.hbs";
import "./register.scss";
import "../../css/style.scss";
import "../login/login.scss";

export const register = (props) => {
  const fields = {
    email: "Почта",
    login: "Логин",
    first_name: "Имя",
    second_name: "Фамилия",
    phone: "Телефон",
    password: "Пароль",
    password_confirm: "Пароль ещё раз",
  };
  const data = Object.keys(fields).reduce((acc, key) => {
    acc.push({
      key,
      name: fields[key],
      value: props[key],
    });
    return acc;
  }, []);
  return registerTemplate({ props, fields, data });
};

const root = document.querySelector("#root");
root.innerHTML = register({});