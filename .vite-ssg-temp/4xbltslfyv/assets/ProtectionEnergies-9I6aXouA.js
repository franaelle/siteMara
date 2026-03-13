import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "ProtectionEnergies",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Comment se protéger des énergies négatives au quotidien ?",
      meta: [
        { name: "description", content: "Vous vous sentez souvent vidé après avoir fréquenté certains lieux ou certaines personnes ? Apprenez des techniques de protection énergétique." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "blog-article" }, _attrs))} data-v-db78e051><header class="article-header" data-v-db78e051>`);
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
      _push(`<h1 data-v-db78e051>Se protéger des énergies négatives</h1><p class="meta" data-v-db78e051>Publié le 20 Février 2026 • Lecture : 7 min</p></header><div class="article-content" data-v-db78e051><p data-v-db78e051>Porter un bouclier invisible mais efficace est essentiel, surtout si vous êtes empathique ou hypersensible.</p><h2 data-v-db78e051>La technique de la bulle de lumière</h2><p data-v-db78e051>Apprenez à visualiser chaque matin une sphère de lumière protectrice autour de vous qui ne laisse passer que l&#39;Amour et la Bienveillance.</p><h2 data-v-db78e051>L&#39;utilisation des pierres de protection</h2><p data-v-db78e051>La Labradorite, l&#39;Obsidienne ou la Tourmaline noire sont des alliées puissantes pour repousser les influences extérieures nocives.</p><div class="internal-links" data-v-db78e051><p data-v-db78e051>Plus d&#39;infos sur les minéraux : `);
      _push(ssrRenderComponent(_component_router_link, { to: "/blog/pouvoir-des-cristaux" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Le pouvoir des cristaux`);
          } else {
            return [
              createTextVNode("Le pouvoir des cristaux")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><section class="cta-banner" data-v-db78e051><h3 data-v-db78e051>Demeurer fort face aux influences</h3><p data-v-db78e051>Recevez des conseils personnalisés de protection.</p><a href="https://wa.me/1234567890" class="wa-btn" data-v-db78e051>Conseiller WhatsApp</a></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/ProtectionEnergies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProtectionEnergies = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db78e051"]]);
export {
  ProtectionEnergies as default
};
