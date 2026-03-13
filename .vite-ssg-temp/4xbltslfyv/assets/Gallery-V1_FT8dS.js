import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc, t } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "Gallery",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Le Trésor : Preuves de Puissance - Maître Amandji",
      meta: [
        { name: "description", content: "Galerie exclusive des travaux du Maître Amandji. Plus de 60 preuves visuelles de rituels réussis : argent, amour, chance et protection." }
      ]
    });
    const categories = [
      {
        name: "Rituels de Richesse & Multiplication",
        folder: "rituel_argent",
        count: 27,
        files: [
          "1756458926134.jpg",
          "1756458929273.jpg",
          "1756458937131.jpg",
          "1756459004821.jpg",
          "1756459040963.jpg",
          "1756459067642.jpg",
          "1756459162526.jpg",
          "1756459190793.jpg",
          "1756459255360.jpg",
          "1756459275288.jpg",
          "1756459277263.jpg",
          "1756459279288.jpg",
          "1756459281686.jpg",
          "1756459283967.jpg",
          "1756459286253.jpg",
          "1756459305819.jpg",
          "1756459307858.jpg",
          "1756459309732.jpg",
          "1758491697922.jpg",
          "1758491840051.jpg",
          "1758491848072.jpg",
          "1758491853394.jpg",
          "1758491859339.jpg",
          "1758491914364.jpg",
          "1758491989595.jpg",
          "1758491996509.jpg",
          "1758492003117.jpg"
        ]
      },
      {
        name: "Retours d'Affection & Unions",
        folder: "retour_affection",
        count: 9,
        files: [
          "1720452707762.jpg",
          "1720453031408.jpg",
          "1720453226205.jpg",
          "1720453309585.jpg",
          "1720453496312.jpg",
          "1731246833386.jpg",
          "1740242501375.jpg",
          "1758491790991.jpg",
          "IMG-20240803-WA0003.jpg"
        ]
      },
      {
        name: "Protection & Purification d'Aura",
        folder: "purifier_ora",
        count: 8,
        files: [
          "1720453323104.jpg",
          "1720453330182.jpg",
          "1720453546359.jpg",
          "1734272705675.jpg",
          "1739971689730.jpg",
          "1739972107972.jpg",
          "1744752561342.jpg",
          "1747817518017.jpg"
        ]
      },
      {
        name: "Désenvoûtements & Libérations",
        folder: "deseenvoutements",
        count: 13,
        files: [
          "1720453126408.jpg",
          "1731849805075.jpg",
          "1739843357061.jpg",
          "1739972107972.jpg",
          "1751231398047.jpg",
          "1752387119494.jpg",
          "IMG-20250413-WA0026.jpg",
          "IMG-20250413-WA0048.jpg",
          "IMG-20250626-WA0001.jpg",
          "IMG-20250626-WA0002.jpg",
          "IMG-20250720-WA0000.jpg",
          "IMG-20250805-WA0001.jpg",
          "IMG-20250928-WA0001.jpg"
        ]
      },
      {
        name: "Chances & Jeux de Hasard",
        folder: "chances",
        count: 9,
        files: [
          "1720453359561.jpg",
          "1720453369703.jpg",
          "1730541220094.jpg",
          "1733605091523.jpg",
          "1758491806194.jpg",
          "IMG-20250630-WA0000.jpg",
          "IMG-20250719-WA0002.jpg",
          "IMG-20250728-WA0000.jpg",
          "IMG-20250730-WA0000.jpg"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gallery-page fade-in" }, _attrs))} data-v-49473b9b><header class="section-padding container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-49473b9b><h1 style="${ssrRenderStyle({ "font-size": "2.8rem", "margin-bottom": "2rem" })}" data-v-49473b9b>${ssrInterpolate(unref(t)("gallery.title"))}</h1><p style="${ssrRenderStyle({ "font-size": "1.15rem", "color": "var(--text-soft)", "max-width": "800px", "margin": "0 auto", "line-height": "1.8" })}" data-v-49473b9b> Découvrez l&#39;intégralité de ma collection sacrée. Chaque image témoigne d&#39;un travail accompli, d&#39;un rituel scellé et d&#39;une vie transformée. </p></header><div class="gallery-sections container" data-v-49473b9b><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<div class="cat-block section-padding reveal" data-v-49473b9b><h2 class="cat-title" data-v-49473b9b>${ssrInterpolate(cat.name)}</h2><div class="full-grid" data-v-49473b9b><!--[-->`);
        ssrRenderList(cat.files, (file) => {
          _push(`<div class="relique-item" data-v-49473b9b><div class="relique-img" data-v-49473b9b><img${ssrRenderAttr("src", `/assets/${cat.folder}/${file}`)}${ssrRenderAttr("alt", cat.name)} loading="lazy" data-v-49473b9b></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><section class="appointment-banner reveal" style="${ssrRenderStyle({ "background": "var(--bg-soft)", "padding": "8rem 0", "text-align": "center" })}" data-v-49473b9b><h2 style="${ssrRenderStyle({ "font-size": "2.5rem", "margin-bottom": "2rem" })}" data-v-49473b9b>Acquérir une Puissance Semblable</h2><p style="${ssrRenderStyle({ "margin-bottom": "3rem", "opacity": "0.7", "font-size": "1.1rem" })}" data-v-49473b9b>Ces objets ne sont pas de simples photos, ce sont des récepteurs d&#39;énergies ancestrales.</p>`);
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
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49473b9b"]]);
export {
  Gallery as default
};
