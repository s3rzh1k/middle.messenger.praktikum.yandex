// @ts-ignore
import * as brokenTemplate from "./broken.hbs";
// @ts-ignore
import key from '../../../static/images/key.svg';
import "../../css/style.scss";
import "./broken.scss";

export const broken = () => brokenTemplate({ key });

const root = document.querySelector("#root");
root.innerHTML = broken();
