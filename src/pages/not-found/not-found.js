import notFoundTemplate from "./not-found.hbs";
import "../../css/style.scss";
import "./not-found.scss";

export const notFound = () => notFoundTemplate();

const root = document.querySelector("#root");
root.innerHTML = notFound();
