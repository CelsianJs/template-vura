import { h } from "what-framework";

export const page = { mode: "server", title: "About Vura" };

export default function AboutPage() {
  return h("main", { class: "about" }, [
    h("h1", {}, ["About"]),
    h("p", {}, ["Built with Vura, CelsianJS, and What Framework."]),
    h("nav", {}, [
      h("a", { href: "/" }, ["Home"]),
    ]),
  ]);
}
