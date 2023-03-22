import {first} from "./pages/first/first";
import "./css/style.scss";

const links = [
    {
        href: "/login",
        label: "Вход"
    },
    {
        href: "/register",
        label: "Регистрация"
    },
    {
        href: "/profile",
        label: "Профиль"
    },
    {
        href: "/not-found",
        label: "404"
    },
    {
        href: "/broken",
        label: "500"
    },
];

const root = document.querySelector("#root");
root.innerHTML = first(links);
