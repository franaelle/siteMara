import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "À propos de notre mission d'accompagnement",
      meta: [
        { name: "description", content: "Découvrez l'histoire, les valeurs et l'expertise derrière notre plateforme de conseil spirituel et développement personnel." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-3da14e17><section class="mission-section" data-v-3da14e17><h1 data-v-3da14e17>Notre Mission</h1><p class="lead" data-v-3da14e17>Accompagner chaque individu vers sa propre lumière et son équilibre intérieur.</p><div class="mission-content" data-v-3da14e17><p data-v-3da14e17>Depuis plus de 10 ans, nous nous consacrons à l&#39;étude de la spiritualité et du développement personnel. Notre plateforme est née d&#39;une volonté simple : rendre l&#39;accompagnement spirituel accessible, moderne et bienveillant.</p><p data-v-3da14e17>Nous croyons fermement que chaque personne possède en elle les clés de sa propre guérison et de son épanouissement. Notre rôle est simplement de vous aider à les trouver, en vous fournissant les outils et la guidance nécessaires pour éclairer votre chemin.</p></div></section><section class="values-section" data-v-3da14e17><h2 data-v-3da14e17>Nos Valeurs</h2><div class="values-grid" data-v-3da14e17><div class="value-item" data-v-3da14e17><h3 data-v-3da14e17>Bienveillance</h3><p data-v-3da14e17>Un accueil sans jugement, quel que soit votre parcours ou vos croyances. Nous créons un espace sécurisé pour votre parole.</p></div><div class="value-item" data-v-3da14e17><h3 data-v-3da14e17>Authenticité</h3><p data-v-3da14e17>Nous prônons une spiritualité ancrée et sincère, loin des dogmes, centrée sur l&#39;expérience humaine réelle.</p></div><div class="value-item" data-v-3da14e17><h3 data-v-3da14e17>Confidentialité</h3><p data-v-3da14e17>Vos échanges sont strictement privés. Le respect de votre vie intime est au cœur de notre éthique professionnelle.</p></div><div class="value-item" data-v-3da14e17><h3 data-v-3da14e17>Expertise</h3><p data-v-3da14e17>Une formation continue et une pratique rigoureuse pour vous offrir le meilleur accompagnement possible.</p></div></div></section><section class="expertise-section" data-v-3da14e17><h2 data-v-3da14e17>Notre Expertise</h2><p data-v-3da14e17>Notre approche est pluridisciplinaire. Nous combinons des méthodes ancestrales de sagesse avec les outils modernes de la psychologie positive et du coaching de vie. Cette alliance permet un travail en profondeur, touchant à la fois le corps, l&#39;âme et l&#39;esprit.</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services",
        class: "btn secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Découvrir nos méthodes`);
          } else {
            return [
              createTextVNode("Découvrir nos méthodes")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3da14e17"]]);
export {
  About as default
};
