// @ts-ignore
import registerTemplate from "./register.hbs";
import "../../css/style.scss";
import "../login/login.scss";
import "./register.scss";
import {RegisterFieldsEnum} from "../../models/register.model";

export const register = (props) => {
  const data = Object.keys(RegisterFieldsEnum).reduce((acc, key) => {
    acc.push({
      name: key,
      localName: RegisterFieldsEnum[key],
      value: props[key],
    });
    return acc;
  }, []);
  return registerTemplate({ props, data });
};

const root = document.querySelector("#root");
root.innerHTML = register({});
