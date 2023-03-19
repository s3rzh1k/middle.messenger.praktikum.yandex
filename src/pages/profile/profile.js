import profile from "./profile.hbs";
import "./profile.scss";
import avatar from "../../../static/images/avatar.svg";
export default (props) => {
  const fields = {
    email: "Почта",
    login: "Логин",
    first_name: "Имя",
    second_name: "Фамилия",
    display_name: "Имя в чате",
    phone: "Телефон",
  };
  const data = Object.keys(fields).reduce((acc, key) => {
    acc.push({
      key,
      name: fields[key],
      value: props[key],
    });
    return acc;
  }, []);
  return profile({ props, avatar, fields, data });
};
