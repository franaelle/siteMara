import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "LacherPrise",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Les bienfaits du lâcher-prise sur votre spiritualité",
      meta: [
        { name: "description", content: "Le lâcher-prise est la clé de la paix intérieure. Découvrez pourquoi résister au changement bloque votre évolution et comment lâcher prise enfin." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "blog-article" }, _attrs))} data-v-f1ef5a02><header class="article-header" data-v-f1ef5a02>`);
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
      _push(`<h1 data-v-f1ef5a02>Les bienfaits du lâcher-prise</h1><p class="meta" data-v-f1ef5a02>Publié le 01 Mars 2026 • Lecture : 6 min</p></header><div class="article-content" data-v-f1ef5a02><p data-v-f1ef5a02>Lâcher prise ne signifie pas abandonner, mais accepter que certaines choses ne dépendent pas de nous. C&#39;est un acte de courage et de confiance absolue en la vie.</p><h2 data-v-f1ef5a02>Pourquoi notre ego résiste-t-il ?</h2><p data-v-f1ef5a02>L&#39;ego a besoin de contrôle pour se sentir en sécurité. Mais ce contrôle est une illusion qui génère une souffrance inutile.</p><h2 data-v-f1ef5a02>La fluidité spirituelle</h2><p data-v-f1ef5a02>Quand on lâche prise, on permet à l&#39;énergie de circuler librement. Les solutions apparaissent souvent là où les problèmes semblaient insolubles.</p><div class="internal-links" data-v-f1ef5a02><p data-v-f1ef5a02>Améliorez votre quotidien : `);
      _push(ssrRenderComponent(_component_router_link, { to: "/blog/meditation-matinale" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`L&#39;importance de la méditation matinale`);
          } else {
            return [
              createTextVNode("L'importance de la méditation matinale")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><section class="cta-banner" data-v-f1ef5a02><h3 data-v-f1ef5a02>Accompagnement au changement</h3><p data-v-f1ef5a02>Apprenez à lâcher prise avec nos séances de coaching.</p><a href="https://wa.me/1234567890" class="wa-btn" data-v-f1ef5a02>Prendre Contact</a></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/LacherPrise.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LacherPrise = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f1ef5a02"]]);
export {
  LacherPrise as default
};
