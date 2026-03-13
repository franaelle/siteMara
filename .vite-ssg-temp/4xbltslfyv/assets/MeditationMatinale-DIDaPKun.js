import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "MeditationMatinale",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "L'importance de la méditation matinale pour votre équilibre",
      meta: [
        { name: "description", content: "Découvrez comment la méditation matinale peut transformer votre journée et votre vie spirituelle. Conseils et techniques pour débuter." },
        { property: "og:title", content: "Méditation Matinale : Guide complet pour l'éveil" }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "L'importance de la méditation matinale",
            description: "Guide complet sur les bienfaits de la méditation matinale pour la santé mentale et spirituelle.",
            author: { "@type": "Person", name: "Expert Spirituel" }
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "blog-article" }, _attrs))} data-v-e6cf2027><header class="article-header" data-v-e6cf2027>`);
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
      _push(`<h1 data-v-e6cf2027>L&#39;importance de la méditation matinale</h1><p class="meta" data-v-e6cf2027>Publié le 10 Mars 2026 • Lecture : 6 min</p></header><div class="article-content" data-v-e6cf2027><p data-v-e6cf2027>La méditation matinale est bien plus qu&#39;une simple tendance de bien-être. C&#39;est un rendez-vous sacré avec soi-même qui définit la tonalité de toute votre journée.</p><h2 data-v-e6cf2027>Pourquoi méditer dès le réveil ?</h2><p data-v-e6cf2027>Au moment du réveil, notre cerveau est encore dans un état de réceptivité intense. Les ondes cérébrales sont propices à l&#39;ancrage de pensées positives et à la clarification de l&#39;esprit avant que le tumulte du quotidien ne s&#39;installe.</p><h2 data-v-e6cf2027>Les bienfaits spirituels et physiques</h2><p data-v-e6cf2027>En prenant seulement 10 minutes chaque matin, vous réduisez drastiquement votre niveau de cortisol (l&#39;hormone du stress) et vous ouvrez votre canal intuitif.</p><h3 data-v-e6cf2027>1. Une clarté mentale accrue</h3><p data-v-e6cf2027>La méditation permet de trier les pensées parasites et de se concentrer sur l&#39;essentiel.</p><h3 data-v-e6cf2027>2. Une meilleure gestion émotionnelle</h3><p data-v-e6cf2027>Vous apprenez à observer vos émotions sans y réagir immédiatement, ce qui est crucial pour le `);
      _push(ssrRenderComponent(_component_router_link, { to: "/services/2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`développement personnel`);
          } else {
            return [
              createTextVNode("développement personnel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`.</p><h2 data-v-e6cf2027>Comment débuter sereinement ?</h2><p data-v-e6cf2027>Nul besoin d&#39;être un expert. Commencez par vous asseoir confortablement, fermez les yeux et portez votre attention sur votre souffle. Si une pensée arrive, laissez-la passer comme un nuage dans le ciel.</p><div class="internal-links" data-v-e6cf2027><p data-v-e6cf2027>À lire aussi : `);
      _push(ssrRenderComponent(_component_router_link, { to: "/blog/bienfaits-lacher-prise" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Les bienfaits du lâcher-prise`);
          } else {
            return [
              createTextVNode("Les bienfaits du lâcher-prise")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div><section class="cta-banner" data-v-e6cf2027><h3 data-v-e6cf2027>Besoin d&#39;un accompagnement personnalisé ?</h3><p data-v-e6cf2027>Nos experts vous guident dans votre pratique spirituelle quotidienne.</p><a href="https://wa.me/1234567890" class="wa-btn" data-v-e6cf2027>Discuter sur WhatsApp</a></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/MeditationMatinale.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MeditationMatinale = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6cf2027"]]);
export {
  MeditationMatinale as default
};
