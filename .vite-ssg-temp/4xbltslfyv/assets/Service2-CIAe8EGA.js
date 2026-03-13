import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "Service2",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Développement Personnel & Coaching",
      meta: [
        { name: "description", content: "Débloquez votre potentiel avec notre programme de développement personnel. Coaching privé sur WhatsApp pour atteindre vos objectifs de vie." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-detail" }, _attrs))} data-v-ec8ed14f><div class="content" data-v-ec8ed14f><h1 data-v-ec8ed14f>Développement Personnel</h1><p class="lead" data-v-ec8ed14f>Apprenez à mieux vous connaître, identifiez vos blocages et développez votre plein potentiel.</p><div class="section" data-v-ec8ed14f><h2 data-v-ec8ed14f>Un chemin vers votre meilleure version</h2><p data-v-ec8ed14f>Le développement personnel n&#39;est pas une simple quête de perfection, c&#39;est l&#39;art de devenir la meilleure version possible de soi-même en acceptant ses forces autant que ses vulnérabilités.</p><p data-v-ec8ed14f>Notre approche de coaching vous aide à identifier les croyances limitantes qui vous empêchent d&#39;avancer. Nous mettons en place des stratégies personnalisées pour transformer vos peurs en moteurs et vos doutes en certitudes.</p><h3 data-v-ec8ed14f>Un programme pour :</h3><ul data-v-ec8ed14f><li data-v-ec8ed14f><strong data-v-ec8ed14f>Confiance en soi :</strong> Bâtir une estime de soi solide et inébranlable.</li><li data-v-ec8ed14f><strong data-v-ec8ed14f>Gestion des émotions :</strong> Apprendre à accueillir et canaliser vos ressentis sans vous laisser submerger.</li><li data-v-ec8ed14f><strong data-v-ec8ed14f>Atteinte des objectifs :</strong> Définir des buts clairs, réalisables et alignés avec vos valeurs profondes.</li><li data-v-ec8ed14f><strong data-v-ec8ed14f>Amélioration relationnelle :</strong> Communiquer avec assertivité et poser des limites saines.</li></ul></div><div class="section CTA-section" data-v-ec8ed14f><h2 data-v-ec8ed14f>Prêt à amorcer le changement ?</h2><p data-v-ec8ed14f>Le premier pas vers la transformation commence aujourd&#39;hui. Contactez-nous via WhatsApp pour définir ensemble votre parcours de développement personnel.</p><a href="https://wa.me/1234567890?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20le%20coaching%20en%20développement%20personnel" class="cta-button primary" target="_blank" rel="noopener" data-v-ec8ed14f>Commencer mon coaching sur WhatsApp</a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Service2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Service2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ec8ed14f"]]);
export {
  Service2 as default
};
