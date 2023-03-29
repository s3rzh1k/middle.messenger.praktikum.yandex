// @ts-ignore
import avatar from "../../../static/images/avatar.svg";
// @ts-ignore
import profileTemplate from "./profile.hbs";
import "../../css/style.scss";
import "./profile.scss";
import {IProfileFields, ProfileFieldsEnum} from "../../models/profile.model";

export const profile = (props: IProfileFields) => {
  const data = Object.keys(ProfileFieldsEnum).reduce((acc, key) => {
    acc.push({
      key,
      name: ProfileFieldsEnum[key],
      value: props[key],
    });
    return acc;
  }, []);
  return profileTemplate({ props, avatar, data });
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
