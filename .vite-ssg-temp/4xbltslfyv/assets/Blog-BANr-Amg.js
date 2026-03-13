import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc, t } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Le Grimoire : Secrets & Révélations - Maître Amandji",
      meta: [
        { name: "description", content: "Plongez dans les archives secrètes du Temple. Découvrez les vérités interdites sur la sorcellerie africaine, les pactes de fortune et les mystères de l'amour." }
      ]
    });
    const categories = [
      { id: "love", name: t("blog.cat_love"), icon: "◈" },
      { id: "wealth", name: t("blog.cat_wealth"), icon: "◈" },
      { id: "protection", name: t("blog.cat_protection"), icon: "◈" }
    ];
    const recentSecrets = [
      { title: t("blog.art1_title"), desc: t("blog.art1_desc"), tag: "Fortune", img: "/assets/rituel_argent/1756459281686.jpg" },
      { title: t("blog.art2_title"), desc: t("blog.art2_desc"), tag: "Vision", img: "/assets/deseenvoutements/1739843357061.jpg" },
      { title: t("blog.art3_title"), desc: t("blog.art3_desc"), tag: "Sang", img: "/assets/retour_affection/1740242501375.jpg" },
      { title: t("blog.art4_title"), desc: t("blog.art4_desc"), tag: "Ombre", img: "/assets/purifier_ora/1747817518017.jpg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-page fade-in" }, _attrs))} data-v-81c1c74c><section class="grimoire-hero" data-v-81c1c74c><div class="hero-overlay" data-v-81c1c74c></div><div class="container hero-inner reveal" data-v-81c1c74c><span class="supreme-tag" data-v-81c1c74c>${ssrInterpolate(unref(t)("blog.featured_tag"))}</span><h1 class="grimoire-main-title" data-v-81c1c74c>${ssrInterpolate(unref(t)("blog.featured_title"))}</h1><p class="grimoire-intro-text" data-v-81c1c74c>${ssrInterpolate(unref(t)("blog.featured_desc"))}</p><div class="hero-actions" data-v-81c1c74c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury btn-solid"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("blog.read_rit"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("blog.read_rit")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><div class="container section-padding" data-v-81c1c74c><div class="grimoire-grid" data-v-81c1c74c><aside class="grimoire-sidebar reveal" data-v-81c1c74c><div class="sidebar-sticky" data-v-81c1c74c><h3 class="sidebar-title" data-v-81c1c74c>Archives Secrètes</h3><nav class="cat-nav" data-v-81c1c74c><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<a href="#" class="cat-link" data-v-81c1c74c><span class="cat-icon" data-v-81c1c74c>${ssrInterpolate(cat.icon)}</span> ${ssrInterpolate(cat.name)}</a>`);
      });
      _push(`<!--]--></nav><div class="master-quote-block" data-v-81c1c74c><p class="quote-text" data-v-81c1c74c>&quot;${ssrInterpolate(unref(t)("blog.quote_text"))}&quot;</p><span class="quote-author" data-v-81c1c74c>- Le Maître Amandji</span></div><div class="sidebar-cta" data-v-81c1c74c><h4 data-v-81c1c74c>${ssrInterpolate(unref(t)("blog.side_consult_title"))}</h4><p data-v-81c1c74c>${ssrInterpolate(unref(t)("blog.side_consult_desc"))}</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("contact.wa_direct"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("contact.wa_direct")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></aside><main class="grimoire-feed" data-v-81c1c74c><div class="feed-header reveal" data-v-81c1c74c><h2 data-v-81c1c74c>Dernières Révélations</h2><div class="filter-line" data-v-81c1c74c></div></div><div class="secrets-list" data-v-81c1c74c><!--[-->`);
      ssrRenderList(recentSecrets, (secret, index) => {
        _push(`<article class="${ssrRenderClass(["stagger-" + (index + 1), "secret-card reveal"])}" data-v-81c1c74c><div class="secret-img-box" data-v-81c1c74c><img${ssrRenderAttr("src", secret.img)} alt="Secret" data-v-81c1c74c><span class="secret-category-tag" data-v-81c1c74c>${ssrInterpolate(secret.tag)}</span></div><div class="secret-info" data-v-81c1c74c><h3 class="secret-title" data-v-81c1c74c>${ssrInterpolate(secret.title)}</h3><p class="secret-excerpt" data-v-81c1c74c>${ssrInterpolate(secret.desc)}</p>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/contact",
          class: "secret-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Accéder au Savoir <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-81c1c74c${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-81c1c74c${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Accéder au Savoir "),
                (openBlock(), createBlock("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></article>`);
      });
      _push(`<!--]--></div></main></div></div><section class="forbidden-banner reveal" data-v-81c1c74c><div class="container" data-v-81c1c74c><div class="forbidden-inner" data-v-81c1c74c><div class="forbidden-text" data-v-81c1c74c><h3 data-v-81c1c74c>Voulez-vous franchir le seuil ?</h3><p data-v-81c1c74c>Certains secrets ne sont jamais écrits. Ils se transmettent de voix à oreille.</p></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "btn-luxury btn-solid"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Parler au Maître`);
          } else {
            return [
              createTextVNode("Parler au Maître")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81c1c74c"]]);
export {
  Blog as default
};
