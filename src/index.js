import first from "./pages/first/first";
import broken from "./pages/broken/broken";
import notFound from "./pages/not-found/not-found";
import profile from "./pages/profile/profile";
import login from "./pages/login/login";
import register from "./pages/register/register";
import "./css/style.scss";

const root = document.querySelector("#root");
const location = window.location.href.replace("http://localhost:3000/", "");
switch (location) {
  case "":
    root.innerHTML = first({
      comments: [{ subject: "subject", body: "body" }],
    });
    break;
  case "login":
    root.innerHTML = login({
      comments: [{ subject: "subject", body: "body" }],
    });
    break;
  case "register":
    root.innerHTML = register({
      comments: [{ subject: "subject", body: "body" }],
    });
    break;
  case "broken":
    root.innerHTML = broken({
      comments: [{ subject: "subject", body: "body" }],
    });
    break;
  case "profile":
    root.innerHTML = profile({
      email: "pochta@yandex.ru",
      login: "ivanivanov",
      first_name: "Иван",
      second_name: "Иванов",
      display_name: "Иван",
      phone: "+7 (909) 967 30 30",
    });
    break;
  default:
    root.innerHTML = notFound({
      comments: [{ subject: "subject", body: "body" }],
    });
}
