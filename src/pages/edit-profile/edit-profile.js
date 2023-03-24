import editProfileTemplate from "./edit-profile.hbs";
import avatar from "../../../static/images/avatar.svg";
import "../../css/style.scss";
import "./edit-profile.scss";

export const editProfile = (props) => {
  const leftFields = {
    oldPassword: "Старый пароль",
    newPassword: "Новый пароль",
  };
  const leftSection = Object.keys(leftFields).reduce((acc, key) => {
    acc.push({
      name: key,
      localName: leftFields[key],
      value: props[key],
    });
    return acc;
  }, []);

  const rightFields = {
    email: "Почта",
    login: "Логин",
    first_name: "Имя",
    second_name: "Фамилия",
    display_name: "Имя в чате",
    phone: "Телефон",
  };
  const rightSection = Object.keys(rightFields).reduce((acc, key) => {
    acc.push({
      name: key,
      localName: rightFields[key],
      value: props[key],
    });
    return acc;
  }, []);

  return editProfileTemplate({ props, leftSection, rightSection, avatar });
};

const root = document.querySelector("#root");
root.innerHTML = editProfile({});
