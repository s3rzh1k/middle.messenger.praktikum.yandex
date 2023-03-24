import brokenTemplate from "./broken.hbs";
import key from "../../../static/images/key.svg";
import "../../css/style.scss";
import "./broken.scss";

export const broken = () => brokenTemplate({ key });

const root = document.querySelector("#root");
root.innerHTML = broken();
