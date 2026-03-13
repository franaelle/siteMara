import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "BlogCategory3",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Catégorie: Énergie et Bien-être - Blog",
      meta: [
        { name: "description", content: "Conseils pour l'ancrage, le nettoyage énergétique et le maintien d'un haut niveau vibratoire." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-page" }, _attrs))} data-v-3d68cfe6><div class="header" data-v-3d68cfe6>`);
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
      _push(`<h1 data-v-3d68cfe6>Énergie et Bien-être</h1><p class="desc" data-v-3d68cfe6>Ancrage, chakras, méditation et techniques pour maintenir un haut niveau vibratoire dans un monde souvent stressant.</p></div><div class="article-list" data-v-3d68cfe6><article class="article-card" data-v-3d68cfe6><h2 data-v-3d68cfe6>`);
      _push(ssrRenderComponent(_component_router_link, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`L&#39;importance de l&#39;ancrage au quotidien`);
          } else {
            return [
              createTextVNode("L'importance de l'ancrage au quotidien")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div class="meta" data-v-3d68cfe6>28 Février 2026 • 5 min de lecture</div><p data-v-3d68cfe6>Pourquoi se connecter à la Terre est primordial pour votre équilibre émotionnel, et comment le faire en seulement 5 minutes par jour. Une pratique indispensable pour ne pas se laisser happer par le stress ambiant.</p>`);
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
      _push(`</article><article class="article-card" data-v-3d68cfe6><h2 data-v-3d68cfe6>`);
      _push(ssrRenderComponent(_component_router_link, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Guide d&#39;introduction aux 7 chakras principaux`);
          } else {
            return [
              createTextVNode("Guide d'introduction aux 7 chakras principaux")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div class="meta" data-v-3d68cfe6>18 Février 2026 • 12 min de lecture</div><p data-v-3d68cfe6>Comprendre nos centres énergétiques, leurs rôles sur notre corps physique et comment repérer lorsqu&#39;ils sont bloqués ou ouverts de façon excessive.</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/BlogCategory3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogCategory3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d68cfe6"]]);
export {
  BlogCategory3 as default
};
