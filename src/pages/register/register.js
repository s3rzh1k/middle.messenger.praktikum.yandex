import register from "./register.hbs";
import "./register.scss";
export default (props) => {
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
  return register({ props, fields, data });
};
