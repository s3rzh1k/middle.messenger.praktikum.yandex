import { first } from "./pages/first/first";

const links: { href: string, label: string }[] = [
  {
    href: "/login",
    label: "Вход",
  },
  {
    href: "/register",
    label: "Регистрация",
  },
  {
    href: "/profile",
    label: "Профиль",
  },
  {
    href: "/edit-profile",
    label: "Изменение данных",
  },
  {
    href: "/not-found",
    label: "404",
  },
  {
    href: "/broken",
    label: "500",
  },
];

const root = document.querySelector("#root");
root.innerHTML = first(links);
