import { definePage } from "@celsian/then-core";
import { h } from "what-framework";

export default definePage({
  path: "/about",
  component: () =>
    h("main", { class: "about" }, [
      h("h1", {}, ["About"]),
      h("p", {}, ["Built with Vura, CelsianJS, and What Framework."]),
    ]),
});
