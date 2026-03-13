import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc, t } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _imports_0 = "/assets/retour_affection/1720453031408.jpg";
const _imports_1 = "/assets/rituel_argent/1756458929273.jpg";
const _imports_2 = "/assets/purifier_ora/1720453330182.jpg";
const _imports_3 = "/assets/chances/1720453359561.jpg";
const _imports_4 = "/assets/deseenvoutements/1720453126408.jpg";
const _sfc_main = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Rituels Sacrés & Occultes - Travaux Réels",
      meta: [
        { name: "description", content: "Explorez les travaux de haute magie du Maître Amandji. Retour amoureux, rituels de richesse, protection et désenvoûtement." }
      ]
    });
    const works = {
      love: ["1720452707762.jpg", "1720453031408.jpg", "1720453226205.jpg", "1720453309585.jpg"],
      wealth: ["1756458926134.jpg", "1756458929273.jpg", "1756458937131.jpg", "1756459004821.jpg", "1756459040963.jpg"],
      protect: ["1720453323104.jpg", "1720453330182.jpg", "1720453546359.jpg", "1734272705675.jpg"],
      luck: ["1720453359561.jpg", "1720453369703.jpg", "1730541220094.jpg", "1733605091523.jpg"],
      curse: ["1720453126408.jpg", "1731849805075.jpg", "1739843357061.jpg", "1739972107972.jpg"]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services-page fade-in" }, _attrs))} data-v-54761518><div class="page-header container reveal" style="${ssrRenderStyle({ "text-align": "center", "padding": "2rem 0" })}" data-v-54761518><h1 style="${ssrRenderStyle({ "font-size": "2.8rem", "margin-bottom": "1rem", "line-height": "1.2" })}" data-v-54761518>${ssrInterpolate(unref(t)("services.title"))}</h1><p style="${ssrRenderStyle({ "font-size": "1.15rem", "color": "var(--text-soft)", "max-width": "800px", "margin": "0 auto", "line-height": "1.6" })}" data-v-54761518>${ssrInterpolate(unref(t)("services.desc"))}</p></div><div class="services-list container section-padding" data-v-54761518><section class="service-block reveal" data-v-54761518><div class="luxury-row" data-v-54761518><div class="luxury-col-img" data-v-54761518><img${ssrRenderAttr("src", _imports_0)} alt="Amour" data-v-54761518></div><div class="luxury-col-text" data-v-54761518><h2 data-v-54761518>${ssrInterpolate(unref(t)("services.love_title"))}</h2><p data-v-54761518>${ssrInterpolate(unref(t)("services.love_desc"))}</p><div class="mini-gallery" data-v-54761518><!--[-->`);
      ssrRenderList(works.love, (img) => {
        _push(`<img${ssrRenderAttr("src", `/assets/retour_affection/${img}`)} class="mini-pic" data-v-54761518>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("common.wa_footer_btn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("common.wa_footer_btn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="service-block reveal" data-v-54761518><div class="luxury-row reverse" data-v-54761518><div class="luxury-col-img" data-v-54761518><img${ssrRenderAttr("src", _imports_1)} alt="Fortune" data-v-54761518></div><div class="luxury-col-text" data-v-54761518><h2 data-v-54761518>${ssrInterpolate(unref(t)("services.wealth_title"))}</h2><p data-v-54761518>${ssrInterpolate(unref(t)("services.wealth_desc"))}</p><div class="mini-gallery" data-v-54761518><!--[-->`);
      ssrRenderList(works.wealth, (img) => {
        _push(`<img${ssrRenderAttr("src", `/assets/rituel_argent/${img}`)} class="mini-pic" data-v-54761518>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("common.wa_footer_btn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("common.wa_footer_btn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="service-block reveal" data-v-54761518><div class="luxury-row" data-v-54761518><div class="luxury-col-img" data-v-54761518><img${ssrRenderAttr("src", _imports_2)} alt="Protection" data-v-54761518></div><div class="luxury-col-text" data-v-54761518><h2 data-v-54761518>${ssrInterpolate(unref(t)("services.protect_title"))}</h2><p data-v-54761518>${ssrInterpolate(unref(t)("services.protect_desc"))}</p><div class="mini-gallery" data-v-54761518><!--[-->`);
      ssrRenderList(works.protect, (img) => {
        _push(`<img${ssrRenderAttr("src", `/assets/purifier_ora/${img}`)} class="mini-pic" data-v-54761518>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("common.wa_footer_btn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("common.wa_footer_btn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="service-block reveal" data-v-54761518><div class="luxury-row reverse" data-v-54761518><div class="luxury-col-img" data-v-54761518><img${ssrRenderAttr("src", _imports_3)} alt="Chance" data-v-54761518></div><div class="luxury-col-text" data-v-54761518><h2 data-v-54761518>${ssrInterpolate(unref(t)("services.luck_title"))}</h2><p data-v-54761518>${ssrInterpolate(unref(t)("services.luck_desc"))}</p><div class="mini-gallery" data-v-54761518><!--[-->`);
      ssrRenderList(works.luck, (img) => {
        _push(`<img${ssrRenderAttr("src", `/assets/chances/${img}`)} class="mini-pic" data-v-54761518>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("common.wa_footer_btn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("common.wa_footer_btn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="service-block reveal" data-v-54761518><div class="luxury-row" data-v-54761518><div class="luxury-col-img" data-v-54761518><img${ssrRenderAttr("src", _imports_4)} alt="Désenvoûtement" data-v-54761518></div><div class="luxury-col-text" data-v-54761518><h2 data-v-54761518>${ssrInterpolate(unref(t)("services.curse_title"))}</h2><p data-v-54761518>${ssrInterpolate(unref(t)("services.curse_desc"))}</p><div class="mini-gallery" data-v-54761518><!--[-->`);
      ssrRenderList(works.curse, (img) => {
        _push(`<img${ssrRenderAttr("src", `/assets/deseenvoutements/${img}`)} class="mini-pic" data-v-54761518>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("common.wa_footer_btn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("common.wa_footer_btn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div><section class="guarantee-section section-padding reveal" style="${ssrRenderStyle({ "background": "var(--bg-soft)", "text-align": "center" })}" data-v-54761518><div class="container" data-v-54761518><h2 style="${ssrRenderStyle({ "font-size": "2rem", "margin-bottom": "2rem" })}" data-v-54761518>${ssrInterpolate(unref(t)("services.guarantee_title"))}</h2><p style="${ssrRenderStyle({ "font-size": "1.1rem", "color": "var(--text-soft)", "max-width": "800px", "margin": "0 auto", "line-height": "1.8" })}" data-v-54761518>${ssrInterpolate(unref(t)("services.guarantee_desc"))}</p></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-54761518"]]);
export {
  Services as default
};
