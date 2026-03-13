import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "TarotPsychologique",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Le Tarot Psychologique : Un miroir de l'âme",
      meta: [
        { name: "description", content: "Découvrez comment le tarot, utilisé comme outil psychologique, peut vous aider à mieux comprendre votre inconscient et vos blocages." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "blog-article" }, _attrs))} data-v-259a927a><header class="article-header" data-v-259a927a>`);
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
      _push(`<h1 data-v-259a927a>Initiation au tarot psychologique</h1><p class="meta" data-v-259a927a>Publié le 15 Février 2026 • Lecture : 9 min</p></header><div class="article-content" data-v-259a927a><p data-v-259a927a>Loin de la divination pure, le tarot psychologique est un outil puissant de connaissance de soi. Il utilise les archétypes pour nous parler de notre état présent.</p><h2 data-v-259a927a>Pourquoi utiliser le tarot ?</h2><p data-v-259a927a>Les cartes agissent comme un projecteur sur notre inconscient. Elles révèlent ce que nous savons déjà mais que nous refusons de voir.</p><h2 data-v-259a927a>Comment pratiquer seul ?</h2><p data-v-259a927a>Commencez par tirer une carte par jour et observez comment elle résonne avec vos situations vécues et vos émotions.</p><div class="internal-links" data-v-259a927a><p data-v-259a927a>Approfondir la compréhension : `);
      _push(ssrRenderComponent(_component_router_link, { to: "/services/1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Guidance Intuitive`);
          } else {
            return [
              createTextVNode("Guidance Intuitive")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><section class="cta-banner" data-v-259a927a><h3 data-v-259a927a>Une lecture de votre situation ?</h3><p data-v-259a927a>Réservez votre séance de tarot psychologique par WhatsApp.</p><a href="https://wa.me/1234567890" class="wa-btn" data-v-259a927a>Prendre rendez-vous</a></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/TarotPsychologique.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TarotPsychologique = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-259a927a"]]);
export {
  TarotPsychologique as default
};
