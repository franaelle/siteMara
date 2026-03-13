import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "Karma",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Comprendre son Karma : Le guide pour s'en libérer",
      meta: [
        { name: "description", content: "Qu'est-ce que le karma réellement ? Apprenez comment vos actions influencent votre vie actuelle et comment équilibrer vos dettes karmiques." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "blog-article" }, _attrs))} data-v-38ed9777><header class="article-header" data-v-38ed9777>`);
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
      _push(`<h1 data-v-38ed9777>Comprendre son Karma</h1><p class="meta" data-v-38ed9777>Publié le 08 Mars 2026 • Lecture : 7 min</p></header><div class="article-content" data-v-38ed9777><p data-v-38ed9777>Le mot &quot;Karma&quot; est souvent utilisé à toutes les sauces, mais sa signification profonde est fondamentale pour quiconque s&#39;engage sur une voie spirituelle.</p><h2 data-v-38ed9777>Loi de cause à effet</h2><p data-v-38ed9777>Le karma n&#39;est pas une punition divine, mais une loi naturelle de cause à effet. Chaque pensée, parole et action sème une graine qui finira par germer.</p><h2 data-v-38ed9777>Équilibrer ses dettes karmiques</h2><p data-v-38ed9777>Comprendre son karma, c&#39;est prendre la responsabilité de sa vie. C&#39;est réaliser que nous sommes les architectes de notre propre destin.</p><h3 data-v-38ed9777>Comment agir sur son karma ?</h3><p data-v-38ed9777>Il ne s&#39;agit pas de regretter le passé, mais d&#39;agir en conscience au présent. La `);
      _push(ssrRenderComponent(_component_router_link, { to: "/services/1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`guidance personnalisée`);
          } else {
            return [
              createTextVNode("guidance personnalisée")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` peut vous aider à identifier les schémas répétitifs liés à votre karma passé.</p><h2 data-v-38ed9777>Se libérer des cycles</h2><p data-v-38ed9777>La libération karmique passe par le pardon, la gratitude et l&#39;action désintéressée.</p><div class="internal-links" data-v-38ed9777><p data-v-38ed9777>Découvrez aussi : `);
      _push(ssrRenderComponent(_component_router_link, { to: "/blog/mission-de-vie" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Trouver sa mission de vie`);
          } else {
            return [
              createTextVNode("Trouver sa mission de vie")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><section class="cta-banner" data-v-38ed9777><h3 data-v-38ed9777>Envie d&#39;explorer votre chemin karmique ?</h3><p data-v-38ed9777>Nos conseillers sont là pour vous éclairer.</p><a href="https://wa.me/1234567890" class="wa-btn" data-v-38ed9777>Prendre RDV sur WhatsApp</a></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/Karma.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Karma = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-38ed9777"]]);
export {
  Karma as default
};
