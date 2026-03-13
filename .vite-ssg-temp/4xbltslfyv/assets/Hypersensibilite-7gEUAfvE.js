import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "Hypersensibilite",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "L'hypersensibilité spirituelle : Une faiblesse ou un don ?",
      meta: [
        { name: "description", content: "Vous ressentez tout plus intensément ? Découvrez comment l'hypersensibilité émotionnelle et spirituelle peut devenir votre plus grand atout." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "blog-article page-enter" }, _attrs))} data-v-b06c821d><header class="article-header" data-v-b06c821d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/blog/categorie-2",
        class: "category-tag"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Développement Personnel`);
          } else {
            return [
              createTextVNode("Développement Personnel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 data-v-b06c821d>Comprendre son hypersensibilité</h1><p class="meta" data-v-b06c821d>Publié le 01 Février 2026 • Lecture : 9 min</p></header><div class="article-content" data-v-b06c821d><p data-v-b06c821d>L&#39;hypersensibilité spirituelle concerne entre 15 et 20 % de la population. Ce n&#39;est pas une pathologie, mais un câblage neurologique plus fin qui permet de capter des informations subtiles.</p><h2 data-v-b06c821d>Comment gérer le surplus émotionnel ?</h2><p data-v-b06c821d>Pour un hypersensible, les émotions des autres et les énergies des lieux peuvent être envahissantes. Il est primordial d&#39;apprendre à différencier ses propres ressentis de ceux de son environnement.</p><h2 data-v-b06c821d>Faire de sa sensibilité une force</h2><p data-v-b06c821d>Une fois maîtrisée, cette capacité devient une intuition hors du commun, une empathie profonde et une créativité sans limites. C&#39;est un outil précieux pour toute démarche de `);
      _push(ssrRenderComponent(_component_router_link, { to: "/blog/mission-de-vie" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`trouver sa mission de vie`);
          } else {
            return [
              createTextVNode("trouver sa mission de vie")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`.</p><h3 data-v-b06c821d>3 Clés pour l&#39;hypersensible :</h3><ul data-v-b06c821d><li data-v-b06c821d><strong data-v-b06c821d>Se préserver :</strong> Savoir dire &quot;non&quot; aux situations énergétiquement épuisantes.</li><li data-v-b06c821d><strong data-v-b06c821d>S&#39;exprimer :</strong> L&#39;art, l&#39;écriture ou la parole sont des exutoires indispensables.</li><li data-v-b06c821d><strong data-v-b06c821d>Se ressourcer :</strong> Le contact avec la nature est le meilleur calmant pour un système nerveux sollicité.</li></ul><div class="internal-links" data-v-b06c821d><p data-v-b06c821d>Accompagnement spécifique : `);
      _push(ssrRenderComponent(_component_router_link, { to: "/services/2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Coaching de Vie`);
          } else {
            return [
              createTextVNode("Coaching de Vie")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><section class="cta-banner" data-v-b06c821d><h3 data-v-b06c821d>Vous ne l&#39;êtes plus seul face à vos ressentis</h3><p data-v-b06c821d>Nous vous aidons à apprivoiser votre belle sensibilité.</p><a href="https://wa.me/1234567890" class="wa-btn" data-v-b06c821d>Échanger sur WhatsApp</a></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/Hypersensibilite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Hypersensibilite = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b06c821d"]]);
export {
  Hypersensibilite as default
};
