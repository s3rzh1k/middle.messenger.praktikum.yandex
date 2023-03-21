import brokenTemplate from './broken.hbs';
import key from '../../../static/images/key.svg';
import './broken.scss';
import "../../css/style.scss";
export const broken = () => brokenTemplate({key});

const root = document.querySelector("#root");
root.innerHTML = broken();
