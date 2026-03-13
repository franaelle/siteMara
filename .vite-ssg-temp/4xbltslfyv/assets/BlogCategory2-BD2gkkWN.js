import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "BlogCategory2",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Catégorie: Développement Personnel - Blog",
      meta: [
        { name: "description", content: "Des articles et astuces pour développer votre potentiel, atteindre vos objectifs et retrouver la confiance en vous." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-page" }, _attrs))} data-v-4a3b7485><div class="header" data-v-4a3b7485>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/blog",
        class: "back-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`← Retour au blog`);
          } else {
            return [
              createTextVNode("← Retour au blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 data-v-4a3b7485>Développement Personnel</h1><p class="desc" data-v-4a3b7485>Des exercices pratiques pour surmonter vos blocages et atteindre vos objectifs. Dépassez-vous au quotidien.</p></div><div class="article-list" data-v-4a3b7485><article class="article-card" data-v-4a3b7485><h2 data-v-4a3b7485>`);
      _push(ssrRenderComponent(_component_router_link, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`3 Méthodes pour vaincre le syndrome de l&#39;imposteur`);
          } else {
            return [
              createTextVNode("3 Méthodes pour vaincre le syndrome de l'imposteur")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div class="meta" data-v-4a3b7485>05 Mars 2026 • 6 min de lecture</div><p data-v-4a3b7485>Un guide pratique pour reprendre confiance en vos capacités et arrêter de saboter vos propres réussites et votre bonheur professionnel. Prenez votre juste place avec sérénité.</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "#",
        class: "read-more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lire l&#39;article`);
          } else {
            return [
              createTextVNode("Lire l'article")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article><article class="article-card" data-v-4a3b7485><h2 data-v-4a3b7485>`);
      _push(ssrRenderComponent(_component_router_link, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Comment fixer des limites saines sans culpabiliser`);
          } else {
            return [
              createTextVNode("Comment fixer des limites saines sans culpabiliser")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div class="meta" data-v-4a3b7485>20 Février 2026 • 8 min de lecture</div><p data-v-4a3b7485>Savoir dire &quot;non&quot; est essentiel pour préserver votre énergie. Découvrez des techniques d&#39;affirmation de soi pour respecter vos besoins tout en conservant d&#39;excellentes relations.</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "#",
        class: "read-more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lire l&#39;article`);
          } else {
            return [
              createTextVNode("Lire l'article")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article><article class="article-card" data-v-4a3b7485><h2 data-v-4a3b7485>`);
      _push(ssrRenderComponent(_component_router_link, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Le pouvoir de la visualisation pour atteindre ses buts`);
          } else {
            return [
              createTextVNode("Le pouvoir de la visualisation pour atteindre ses buts")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div class="meta" data-v-4a3b7485>10 Février 2026 • 5 min de lecture</div><p data-v-4a3b7485>Comment utiliser votre imagination pour préparer le terrain de votre réussite. Une technique plébiscitée par les plus grands athlètes et entrepreneurs, accessible à tous.</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "#",
        class: "read-more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lire l&#39;article`);
          } else {
            return [
              createTextVNode("Lire l'article")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/BlogCategory2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogCategory2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a3b7485"]]);
export {
  BlogCategory2 as default
};
