import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "TroisiemeOeil",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Éveiller son Troisième Œil : Signes et dangers",
      meta: [
        { name: "description", content: "Qu'est-ce que le troisième œil ? Apprenez comment stimuler votre glande pinéale pour accéder à une vision plus claire de votre réalité spirituelle." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "blog-article page-enter" }, _attrs))} data-v-251749e9><header class="article-header" data-v-251749e9>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/blog/categorie-1",
        class: "category-tag"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Éveil Spirituel`);
          } else {
            return [
              createTextVNode("Éveil Spirituel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 data-v-251749e9>Ouvrir son troisième œil</h1><p class="meta" data-v-251749e9>Publié le 05 Février 2026 • Lecture : 12 min</p></header><div class="article-content" data-v-251749e9><p data-v-251749e9>Le troisième œil, ou chakra Ajna, est le siège de l&#39;intuition et de la perception extrasensorielle. Son ouverture permet de voir au-delà des apparences physiques et de comprendre les vérités spirituelles profondes.</p><h2 data-v-251749e9>Les signes d&#39;ouverture</h2><p data-v-251749e9>L&#39;activation de ce centre énergétique s&#39;accompagne souvent de synchronicités accrues, d&#39;une intuition infaillible et parfois de rêves prémonitoires très intenses.</p><h2 data-v-251749e9>Précautions et encrage</h2><p data-v-251749e9>Il est crucial de ne pas forcer l&#39;ouverture. Une activation sans un `);
      _push(ssrRenderComponent(_component_router_link, { to: "/blog/protection-energies-negatives" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ancrage solide`);
          } else {
            return [
              createTextVNode("ancrage solide")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` peut mener à une sensation de déconnexion de la réalité. C&#39;est pourquoi l&#39;équilibre entre les chakras supérieurs et inférieurs est primordial.</p><h3 data-v-251749e9>Techniques douces d&#39;activation :</h3><ul data-v-251749e9><li data-v-251749e9>Méditation focalisée sur le point entre les sourcils.</li><li data-v-251749e9>Utilisation d&#39;huiles essentielles comme l&#39;encens ou la lavande.</li><li data-v-251749e9>Consommation d&#39;aliments riches en antioxydants pour la santé de la glande pinéale.</li></ul><div class="internal-links" data-v-251749e9><p data-v-251749e9>Expertise recommandée : `);
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
      _push(`</p></div></div><section class="cta-banner" data-v-251749e9><h3 data-v-251749e9>Accédez à une conscience supérieure</h3><p data-v-251749e9>Apprenez à développer votre clairvoyance de manière encadrée et sécurisée.</p><a href="https://wa.me/1234567890" class="wa-btn" data-v-251749e9>Questionnez-moi sur WhatsApp</a></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/TroisiemeOeil.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TroisiemeOeil = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-251749e9"]]);
export {
  TroisiemeOeil as default
};
