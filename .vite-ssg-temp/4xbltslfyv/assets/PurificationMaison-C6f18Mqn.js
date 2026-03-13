import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "PurificationMaison",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Comment purifier l'énergie de sa maison : 5 astuces simples",
      meta: [
        { name: "description", content: "Votre maison est votre sanctuaire. Apprenez à nettoyer les énergies négatives de votre intérieur avec des méthodes naturelles et spirituelles." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "blog-article" }, _attrs))} data-v-0eacf1ff><header class="article-header" data-v-0eacf1ff>`);
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
      _push(`<h1 data-v-0eacf1ff>Purifier l&#39;énergie de sa maison</h1><p class="meta" data-v-0eacf1ff>Publié le 05 Mars 2026 • Lecture : 5 min</p></header><div class="article-content" data-v-0eacf1ff><p data-v-0eacf1ff>Notre lieu de vie absorbe toutes les émotions et événements qui s&#39;y déroulent. Un nettoyage énergétique régulier est indispensable pour s&#39;y sentir bien.</p><h2 data-v-0eacf1ff>Le pouvoir de la Sauge et du Palo Santo</h2><p data-v-0eacf1ff>La fumigation est l&#39;une des méthodes les plus anciennes pour purifier un espace. La fumée capture les énergies lourdes pour les emmener vers l&#39;extérieur.</p><h2 data-v-0eacf1ff>Le sel marin : Un absorbeur naturel</h2><p data-v-0eacf1ff>Placer des coupelles de sel aux quatre coins d&#39;une pièce permet d&#39;absorber les vibrations négatives stagnantes.</p><h2 data-v-0eacf1ff>L&#39;intention et les sons</h2><p data-v-0eacf1ff>Votre intention est l&#39;outil le plus puissant. Accompagnez votre nettoyage de sons (bols tibétains, cloches) pour briser les stagnations d&#39;énergie.</p><div class="internal-links" data-v-0eacf1ff><p data-v-0eacf1ff>Optimisez votre bien-être : `);
      _push(ssrRenderComponent(_component_router_link, { to: "/services/3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Harmonisation Énergétique`);
          } else {
            return [
              createTextVNode("Harmonisation Énergétique")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><section class="cta-banner" data-v-0eacf1ff><h3 data-v-0eacf1ff>Besoin d&#39;un nettoyage énergétique pro ?</h3><p data-v-0eacf1ff>Contactez-nous pour une séance à distance.</p><a href="https://wa.me/1234567890" class="wa-btn" data-v-0eacf1ff>WhatsApp Direct</a></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/PurificationMaison.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PurificationMaison = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0eacf1ff"]]);
export {
  PurificationMaison as default
};
