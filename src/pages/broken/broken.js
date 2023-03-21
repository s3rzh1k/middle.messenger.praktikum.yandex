import brokenTemplate from './broken.hbs';
import './broken.scss';
import key from '../../../static/images/key.svg';
export const broken = (props) => brokenTemplate({...props, key});

const root = document.querySelector("#root");
root.innerHTML = broken();
