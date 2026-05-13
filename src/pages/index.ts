import { definePage } from "@celsian/then-core";
import { h } from "what-framework";

export default definePage({
  path: "/",
  component: () =>
    h("main", { class: "home" }, [
      h("h1", {}, ["Welcome to Vura"]),
      h("p", {}, ["Build full-stack apps with the Vura meta-framework."]),
    ]),
});
