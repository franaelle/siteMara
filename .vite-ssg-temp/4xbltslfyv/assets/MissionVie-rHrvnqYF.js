import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "MissionVie",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Comment trouver sa mission de vie ? Guide pratique",
      meta: [
        { name: "description", content: "Vous vous sentez égaré ? Découvrez des outils concrets pour identifier votre mission de vie et donner du sens à votre existence." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "blog-article" }, _attrs))} data-v-e2e26de1><header class="article-header" data-v-e2e26de1>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/blog",
        class: "back-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`← Retour au Blog`);
          } else {
            return [
              createTextVNode("← Retour au Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 data-v-e2e26de1>Trouver sa mission de vie</h1><p class="meta" data-v-e2e26de1>Publié le 25 Février 2026 • Lecture : 8 min</p></header><div class="article-content" data-v-e2e26de1><p data-v-e2e26de1>Chacun d&#39;entre nous est venu sur Terre avec un but unique. Votre mission de vie n&#39;est pas forcément une profession, mais une manière d&#39;être au monde.</p><h2 data-v-e2e26de1>Écouter ses passions</h2><p data-v-e2e26de1>Ce qui vous anime, ce qui vous fait perdre la notion du temps, sont des indices majeurs envoyés par votre âme.</p><h2 data-v-e2e26de1>L&#39;Ikigai : Un outil précieux</h2><p data-v-e2e26de1>L&#39;alliance entre ce que vous aimez, ce en quoi vous êtes doué, ce dont le monde a besoin et ce pour quoi vous pouvez être payé.</p><div class="internal-links" data-v-e2e26de1><p data-v-e2e26de1>Aide personnalisée : `);
      _push(ssrRenderComponent(_component_router_link, { to: "/services/1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Guidance Spirituelle`);
          } else {
            return [
              createTextVNode("Guidance Spirituelle")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><section class="cta-banner" data-v-e2e26de1><h3 data-v-e2e26de1>Quelle est votre voie ?</h3><p data-v-e2e26de1>Découvrons-le ensemble lors d&#39;une séance personnalisée.</p><a href="https://wa.me/1234567890" class="wa-btn" data-v-e2e26de1>Questionner l&#39;expert sur WhatsApp</a></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/MissionVie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MissionVie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e2e26de1"]]);
export {
  MissionVie as default
};
