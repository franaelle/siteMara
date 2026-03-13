import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "BlogCategory1",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Catégorie: Éveil Spirituel - Blog",
      meta: [
        { name: "description", content: "Articles dédiés à l'éveil spirituel, la compréhension de soi et l'exploration de sa conscience." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-page" }, _attrs))} data-v-eb701b53><div class="header" data-v-eb701b53>`);
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
      _push(`<h1 data-v-eb701b53>L&#39;Éveil Spirituel</h1><p class="desc" data-v-eb701b53>Comprendre les signes, les synchronicités et votre intuition au quotidien. Des clés pour s&#39;ouvrir à une dimension plus subtile de l&#39;existence.</p></div><div class="article-list" data-v-eb701b53><article class="article-card" data-v-eb701b53><h2 data-v-eb701b53>`);
      _push(ssrRenderComponent(_component_router_link, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Comment reconnaître les signes de l&#39;Univers`);
          } else {
            return [
              createTextVNode("Comment reconnaître les signes de l'Univers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div class="meta" data-v-eb701b53>10 Mars 2026 • 5 min de lecture</div><p data-v-eb701b53>Les synchronicités ne sont pas des coïncidences. Apprenez à décrypter les messages que la vie vous envoie chaque jour. Un guide pour être attentif aux heures miroirs, aux animaux totems et aux rencontres qui changent tout.</p>`);
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
      _push(`</article><article class="article-card" data-v-eb701b53><h2 data-v-eb701b53>`);
      _push(ssrRenderComponent(_component_router_link, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Développer son intuition facilement`);
          } else {
            return [
              createTextVNode("Développer son intuition facilement")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div class="meta" data-v-eb701b53>22 Février 2026 • 7 min de lecture</div><p data-v-eb701b53>Notre mental prend souvent le dessus sur notre petite voix intérieure. 5 exercices puissants pour apprendre à faire taire son ego et laisser l&#39;intuition guider ses choix majeurs.</p>`);
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
      _push(`</article><article class="article-card" data-v-eb701b53><h2 data-v-eb701b53>`);
      _push(ssrRenderComponent(_component_router_link, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Les 5 étapes de la nuit noire de l&#39;âme`);
          } else {
            return [
              createTextVNode("Les 5 étapes de la nuit noire de l'âme")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div class="meta" data-v-eb701b53>15 Février 2026 • 10 min de lecture</div><p data-v-eb701b53>Traverser la nuit noire de l&#39;âme est une épreuve douloureuse mais nécessaire à tout éveil spirituel profond. Comprendre ces différentes phases pour mieux les traverser vers la lumière.</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/BlogCategory1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogCategory1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb701b53"]]);
export {
  BlogCategory1 as default
};
