import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "Service3",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Harmonisation Énergétique - Alignement Mind Body",
      meta: [
        { name: "description", content: "Retrouvez votre équilibre avec nos séances d'harmonisation énergétique. Libérez les tensions et alignez vos chakras avec notre accompagnement WhatsApp." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-detail" }, _attrs))} data-v-d51949b2><div class="content" data-v-d51949b2><h1 data-v-d51949b2>Harmonisation Énergétique</h1><p class="lead" data-v-d51949b2>Rééquilibrez vos énergies, apaisez votre mental et revitalisez votre corps dans sa globalité.</p><div class="section" data-v-d51949b2><h2 data-v-d51949b2>Retrouvez votre alignement intérieur</h2><p data-v-d51949b2>L&#39;harmonisation énergétique est une démarche holistique. Notre corps physique n&#39;est que la manifestation visible de notre état énergétique. Lorsque nos énergies sont bloquées par le stress, les traumatismes ou les émotions refoulées, cela se traduit souvent par de la fatigue, des douleurs ou un mal-être général.</p><p data-v-d51949b2>Notre accompagnement vise à libérer ces blocages à distance, via des protocoles spécifiques, pour rétablir une circulation fluide et harmonieuse de l’énergie vitale dans tout votre être.</p><h3 data-v-d51949b2>Les bienfaits ressentis :</h3><ul data-v-d51949b2><li data-v-d51949b2><strong data-v-d51949b2>Regain d&#39;énergie :</strong> Dissipation de la fatigue chronique et sensation de vitalité retrouvée.</li><li data-v-d51949b2><strong data-v-d51949b2>Apaisement mental :</strong> Diminution drastique du stress, de l&#39;anxiété et de la rumination mentale.</li><li data-v-d51949b2><strong data-v-d51949b2>Soulagement physique :</strong> Allègement des tensions corporelles liées aux blocages énergétiques.</li><li data-v-d51949b2><strong data-v-d51949b2>Harmonie globale :</strong> Un profond sentiment de paix intérieure et d&#39;alignement avec soi.</li></ul></div><div class="section CTA-section" data-v-d51949b2><h2 data-v-d51949b2>Besoin de rééquilibrer vos énergies ?</h2><p data-v-d51949b2>Ne laissez pas la fatigue ou le stress accumulé dicter votre quotidien. Contactez-nous pour planifier votre séance d&#39;harmonisation énergétique personnalisée.</p><a href="https://wa.me/1234567890?text=Bonjour,%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20séance%20d&#39;harmonisation%20énergétique" class="cta-button primary" target="_blank" rel="noopener" data-v-d51949b2>Réserver mon rééquilibrage sur WhatsApp</a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Service3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Service3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d51949b2"]]);
export {
  Service3 as default
};
