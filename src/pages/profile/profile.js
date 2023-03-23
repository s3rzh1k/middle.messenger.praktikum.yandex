import profileTemplate from "./profile.hbs";
import "../../css/style.scss";
import "./profile.scss";
import avatar from "../../../static/images/avatar.svg";

export const profile = (props) => {
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
  return profileTemplate({ props, avatar, fields, data });
};

const root = document.querySelector("#root");
root.innerHTML = profile({
  email: "pochta@yandex.ru",
  login: "ivanivanov",
  first_name: "Иван",
  second_name: "Иванов",
  display_name: "Иван",
  phone: "+7 (909) 967 30 30",
});
