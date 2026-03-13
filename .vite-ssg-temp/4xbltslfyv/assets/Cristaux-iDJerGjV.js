import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "Cristaux",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "La Lithothérapie : Le pouvoir secret des cristaux",
      meta: [
        { name: "description", content: "Découvrez comment les minéraux et les cristaux peuvent influencer votre bien-être. Améthyste, Quartz, Citrine : apprenez à les utiliser au quotidien." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "blog-article page-enter" }, _attrs))} data-v-8d0db0c1><header class="article-header" data-v-8d0db0c1>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/blog/categorie-3",
        class: "category-tag"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Énergie et Bien-être`);
          } else {
            return [
              createTextVNode("Énergie et Bien-être")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 data-v-8d0db0c1>Le pouvoir des cristaux</h1><p class="meta" data-v-8d0db0c1>Publié le 12 Février 2026 • Lecture : 10 min</p></header><div class="article-content" data-v-8d0db0c1><p data-v-8d0db0c1>La lithothérapie est une méthode ancienne qui utilise l&#39;énergie vibratoire des pierres pour rééquilibrer l&#39;organisme. Chaque cristal possède une fréquence unique qui entre en résonance avec nos propres centres énergétiques.</p><div class="highlight-box" data-v-8d0db0c1><p data-v-8d0db0c1><strong data-v-8d0db0c1>Rappel important :</strong> Les cristaux sont des compléments et ne remplacent en aucun cas un avis médical professionnel.</p></div><h2 data-v-8d0db0c1>Les pierres indispensables pour débuter</h2><p data-v-8d0db0c1>Si vous souhaitez commencer votre collection, voici les trois piliers de la lithothérapie :</p><h3 data-v-8d0db0c1>1. L&#39;Améthyste : La sérénité</h3><p data-v-8d0db0c1>Idéale pour apaiser le mental, favoriser un sommeil réparateur et stimuler l&#39;intuition. C&#39;est la pierre de la sagesse par excellence.</p><h3 data-v-8d0db0c1>2. Le Quartz rose : L&#39;amour de soi</h3><p data-v-8d0db0c1>Une pierre douce qui guérit les blessures émotionnelles et ouvre le cœur à la bienveillance. Essentielle pour le `);
      _push(ssrRenderComponent(_component_router_link, { to: "/blog/bienfaits-lacher-prise" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`lâcher-prise`);
          } else {
            return [
              createTextVNode("lâcher-prise")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`.</p><h3 data-v-8d0db0c1>3. La Citrine : La joie et l&#39;abondance</h3><p data-v-8d0db0c1>Un véritable rayon de soleil qui dissipe les pensées sombres et attire la prospérité et la réussite dans vos projets.</p><h2 data-v-8d0db0c1>Prendre soin de vos pierres</h2><p data-v-8d0db0c1>Un cristal s&#39;entretient. Il absorbe les énergies environnantes et doit être régulièrement purifié et rechargé pour conserver son efficacité.</p><div class="internal-links" data-v-8d0db0c1><p data-v-8d0db0c1>Complétez votre formation : `);
      _push(ssrRenderComponent(_component_router_link, { to: "/blog/purifier-energie-maison" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Comment purifier sa maison`);
          } else {
            return [
              createTextVNode("Comment purifier sa maison")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><section class="cta-banner" data-v-8d0db0c1><h3 data-v-8d0db0c1>Choisissez le bon cristal pour vous</h3><p data-v-8d0db0c1>Lors d&#39;une séance d&#39;harmonisation, nous vous conseillons sur les minéraux adaptés à vos besoins actuels.</p><a href="https://wa.me/1234567890" class="wa-btn" data-v-8d0db0c1>Conseil Litho sur WhatsApp</a></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/Cristaux.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cristaux = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d0db0c1"]]);
export {
  Cristaux as default
};
