import notFoundTemplate from './not-found.hbs';
import './not-found.scss';
export const notFound = (props) => notFoundTemplate(props);

const root = document.querySelector("#root");
root.innerHTML = notFound();
