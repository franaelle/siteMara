import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc, t } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _imports_0 = "/assets/retour_affection/1720452707762.jpg";
const _imports_1 = "/assets/rituel_argent/1756458926134.jpg";
const _imports_2 = "/assets/purifier_ora/1720453323104.jpg";
const _imports_3 = "/assets/purifier_ora/1739971689730.jpg";
const _imports_4 = "/assets/retour_affection/1720453309585.jpg";
const _imports_5 = "/assets/chances/1758491806194.jpg";
const _imports_6 = "/assets/rituel_argent/1756459281686.jpg";
const _imports_7 = "/assets/deseenvoutements/1731849805075.jpg";
const _imports_8 = "/assets/rituel_argent/1758491914364.jpg";
const _imports_9 = "/assets/retour_affection/1740242501375.jpg";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Maître Amandji - Haute Magie Africaine & Rituels Sacrés",
      meta: [
        { name: "description", content: "Bienvenue au temple du Maître Amandji. Plus de 25 ans d'expertise en travaux occultes, retour affectif et protection. Résultats en 48h." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page fade-in" }, _attrs))} data-v-c4b0973e><section class="hero" data-v-c4b0973e><div class="hero-bg" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1518005020250-675f0f0fd13b?auto=format&fit=crop&q=80&w=2000')" })}" data-v-c4b0973e></div><div class="hero-content" data-v-c4b0973e><span class="badge fade-in stagger-1" data-v-c4b0973e>${ssrInterpolate(unref(t)("hero.badge"))}</span><h1 class="fade-in stagger-2" data-v-c4b0973e>${ssrInterpolate(unref(t)("hero.title"))}</h1><p class="fade-in stagger-3" data-v-c4b0973e>${ssrInterpolate(unref(t)("hero.desc"))}</p><div class="hero-btns fade-in stagger-4" data-v-c4b0973e>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury btn-solid"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("hero.btn_solicit"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("hero.btn_solicit")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services",
        class: "btn-luxury",
        style: { "color": "white", "border-color": "white", "margin-left": "1rem" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("hero.btn_works"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("hero.btn_works")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section-padding container" data-v-c4b0973e><div class="section-header reveal" style="${ssrRenderStyle({ "text-align": "center", "margin-bottom": "4rem" })}" data-v-c4b0973e><h2 style="${ssrRenderStyle({ "font-size": "2.5rem", "margin-bottom": "1.5rem", "line-height": "1.2" })}" data-v-c4b0973e>${ssrInterpolate(unref(t)("home.expertise_title"))}</h2><p style="${ssrRenderStyle({ "font-size": "1.2rem", "color": "var(--text-soft)", "max-width": "800px", "margin": "0 auto", "line-height": "1.6" })}" data-v-c4b0973e>${ssrInterpolate(unref(t)("home.expertise_desc"))}</p></div><div class="luxury-grid cols-2" data-v-c4b0973e><div class="luxury-card reveal stagger-1" data-v-c4b0973e><div class="card-img-wrapper" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_0)} alt="Amour" data-v-c4b0973e></div><h3 data-v-c4b0973e>${ssrInterpolate(unref(t)("home.card_love_title"))}</h3><p style="${ssrRenderStyle({ "margin-bottom": "2rem" })}" data-v-c4b0973e>${ssrInterpolate(unref(t)("home.card_love_desc"))}</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("home.btn_oracle"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("home.btn_oracle")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="luxury-card reveal stagger-2" data-v-c4b0973e><div class="card-img-wrapper" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_1)} alt="Fortune" data-v-c4b0973e></div><h3 data-v-c4b0973e>${ssrInterpolate(unref(t)("home.card_wealth_title"))}</h3><p style="${ssrRenderStyle({ "margin-bottom": "2rem" })}" data-v-c4b0973e>${ssrInterpolate(unref(t)("home.card_wealth_desc"))}</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("home.btn_wealth"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("home.btn_wealth")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="luxury-card reveal stagger-3" data-v-c4b0973e><div class="card-img-wrapper" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_2)} alt="Protection" data-v-c4b0973e></div><h3 data-v-c4b0973e>${ssrInterpolate(unref(t)("home.card_protect_title"))}</h3><p style="${ssrRenderStyle({ "margin-bottom": "2rem" })}" data-v-c4b0973e>${ssrInterpolate(unref(t)("home.card_protect_desc"))}</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("home.btn_shield"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("home.btn_shield")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="luxury-card reveal stagger-4" data-v-c4b0973e><div class="card-img-wrapper" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_3)} alt="Voyance" data-v-c4b0973e></div><h3 data-v-c4b0973e>${ssrInterpolate(unref(t)("home.card_voyance_title"))}</h3><p style="${ssrRenderStyle({ "margin-bottom": "2rem" })}" data-v-c4b0973e>${ssrInterpolate(unref(t)("home.card_voyance_desc"))}</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("home.btn_destiny"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("home.btn_destiny")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="stats-luxury reveal" style="${ssrRenderStyle({ "background": "var(--primary)", "color": "white", "padding": "6rem 0" })}" data-v-c4b0973e><div class="container luxury-grid" style="${ssrRenderStyle({ "grid-template-columns": "repeat(3, 1fr)" })}" data-v-c4b0973e><div class="stat-item" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-c4b0973e><div style="${ssrRenderStyle({ "font-family": "var(--font-serif)", "font-size": "3.5rem", "margin-bottom": "1rem", "color": "var(--secondary)" })}" data-v-c4b0973e>25+</div><div style="${ssrRenderStyle({ "text-transform": "uppercase", "letter-spacing": "0.2em", "font-size": "0.8rem", "opacity": "0.8" })}" data-v-c4b0973e>Années de règne</div></div><div class="stat-item" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-c4b0973e><div style="${ssrRenderStyle({ "font-family": "var(--font-serif)", "font-size": "3.5rem", "margin-bottom": "1rem", "color": "var(--secondary)" })}" data-v-c4b0973e>100%</div><div style="${ssrRenderStyle({ "text-transform": "uppercase", "letter-spacing": "0.2em", "font-size": "0.8rem", "opacity": "0.8" })}" data-v-c4b0973e>Réussite Garantie</div></div><div class="stat-item" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-c4b0973e><div style="${ssrRenderStyle({ "font-family": "var(--font-serif)", "font-size": "3.5rem", "margin-bottom": "1rem", "color": "var(--secondary)" })}" data-v-c4b0973e>24/7</div><div style="${ssrRenderStyle({ "text-transform": "uppercase", "letter-spacing": "0.2em", "font-size": "0.8rem", "opacity": "0.8" })}" data-v-c4b0973e>Écoute du Maître</div></div></div></section><section class="section-padding reveal" style="${ssrRenderStyle({ "background": "white" })}" data-v-c4b0973e><div class="container" data-v-c4b0973e><div class="section-header" style="${ssrRenderStyle({ "text-align": "center", "margin-bottom": "5rem" })}" data-v-c4b0973e><h2 style="${ssrRenderStyle({ "font-size": "2.2rem", "margin-bottom": "1.5rem" })}" data-v-c4b0973e>Évidences de Haute Magie</h2><p style="${ssrRenderStyle({ "color": "var(--text-soft)" })}" data-v-c4b0973e>Aperçu des derniers rituels scellés au temple.</p></div><div class="luxury-grid" style="${ssrRenderStyle({ "grid-template-columns": "repeat(4, 1fr)", "gap": "1.5rem" })}" data-v-c4b0973e><div class="relique-item" style="${ssrRenderStyle({ "aspect-ratio": "1", "overflow": "hidden", "border": "1px solid var(--border-thin)" })}" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_1)} alt="Rituel de richesse Maître Amandji" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-c4b0973e></div><div class="relique-item" style="${ssrRenderStyle({ "aspect-ratio": "1", "overflow": "hidden", "border": "1px solid var(--border-thin)" })}" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_4)} alt="Retour affectif Maître Amandji" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-c4b0973e></div><div class="relique-item" style="${ssrRenderStyle({ "aspect-ratio": "1", "overflow": "hidden", "border": "1px solid var(--border-thin)" })}" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_5)} alt="Chance aux jeux Maître Amandji" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-c4b0973e></div><div class="relique-item" style="${ssrRenderStyle({ "aspect-ratio": "1", "overflow": "hidden", "border": "1px solid var(--border-thin)" })}" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_2)} alt="Purification d&#39;aura Maître Amandji" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-c4b0973e></div><div class="relique-item" style="${ssrRenderStyle({ "aspect-ratio": "1", "overflow": "hidden", "border": "1px solid var(--border-thin)" })}" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_6)} alt="Secrets de fortune Maître Amandji" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-c4b0973e></div><div class="relique-item" style="${ssrRenderStyle({ "aspect-ratio": "1", "overflow": "hidden", "border": "1px solid var(--border-thin)" })}" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_7)} alt="Désenvoûtement mystique Maître Amandji" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-c4b0973e></div><div class="relique-item" style="${ssrRenderStyle({ "aspect-ratio": "1", "overflow": "hidden", "border": "1px solid var(--border-thin)" })}" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_8)} alt="Travail de richesse Maître Amandji" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-c4b0973e></div><div class="relique-item" style="${ssrRenderStyle({ "aspect-ratio": "1", "overflow": "hidden", "border": "1px solid var(--border-thin)" })}" data-v-c4b0973e><img${ssrRenderAttr("src", _imports_9)} alt="Union sacrée Maître Amandji" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-c4b0973e></div></div><div style="${ssrRenderStyle({ "text-align": "center", "margin-top": "5rem" })}" data-v-c4b0973e>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/galerie",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voir tout le Trésor`);
          } else {
            return [
              createTextVNode("Voir tout le Trésor")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="appointment-banner reveal" style="${ssrRenderStyle({ "background": "var(--bg-soft)", "padding": "8rem 0", "text-align": "center" })}" data-v-c4b0973e><div class="container" data-v-c4b0973e><h2 style="${ssrRenderStyle({ "font-size": "2.5rem", "margin-bottom": "2rem" })}" data-v-c4b0973e>L&#39;Éveil de votre Destin</h2><p style="${ssrRenderStyle({ "margin-bottom": "3rem", "opacity": "0.7", "max-width": "600px", "margin": "0 auto 3rem" })}" data-v-c4b0973e>Chaque rituel est une porte ouverte vers une réalité supérieure.</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury btn-solid"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Prendre Rendez-vous`);
          } else {
            return [
              createTextVNode("Prendre Rendez-vous")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4b0973e"]]);
export {
  Home as default
};
