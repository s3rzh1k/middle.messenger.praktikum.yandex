import notFoundTemplate from './not-found.hbs';
import './not-found.scss';
import "../../css/style.scss";

export const notFound = () => notFoundTemplate();

const root = document.querySelector("#root");
root.innerHTML = notFound();
