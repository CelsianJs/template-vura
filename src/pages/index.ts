import { h } from "what-framework";

export const page = { mode: "static", title: "Welcome to Vura" };

export default function HomePage() {
  return h("main", { class: "home" }, [
    h("h1", {}, ["Welcome to Vura"]),
    h("p", {}, ["Build full-stack apps with the Vura meta-framework."]),
    h("nav", {}, [
      h("a", { href: "/about" }, ["About"]),
    ]),
  ]);
}
