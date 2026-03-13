import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "Service1",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Guidance Personnalisée - Accompagnement Spirituel",
      meta: [
        { name: "description", content: "Trouvez des réponses claires à vos questions profondes avec notre service de guidance personnalisée. Consultation directe via WhatsApp." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-detail" }, _attrs))} data-v-556b4161><div class="content" data-v-556b4161><h1 data-v-556b4161>Guidance Personnalisée</h1><p class="lead" data-v-556b4161>Un accompagnement sur-mesure pour vous aider à traverser les périodes de doutes et de remise en question.</p><div class="section" data-v-556b4161><h2 data-v-556b4161>Une approche adaptée à vos besoins</h2><p data-v-556b4161>Notre service de guidance personnalisée repose sur une écoute active et bienveillante pour comprendre vos défis actuels. En utilisant différentes méthodes intuitives et outils de développement personnel, nous clarifions ensemble les situations complexes que vous traversez.</p><p data-v-556b4161>Cette approche permet d&#39;identifier les schémas répétitifs, de comprendre les blocages émotionnels et de mettre en lumière les opportunités de croissance cachées derrière chaque difficulté.</p><h3 data-v-556b4161>Ce que vous apporte une séance :</h3><ul data-v-556b4161><li data-v-556b4161><strong data-v-556b4161>Clarté mentale :</strong> Démêlez vos pensées et prenez des décisions éclairées avec moins d&#39;hésitation.</li><li data-v-556b4161><strong data-v-556b4161>Soutien émotionnel :</strong> Un espace sécurisant pour exprimer vos doutes et vos vulnérabilités sans jugement.</li><li data-v-556b4161><strong data-v-556b4161>Orientations pratiques :</strong> Des conseils concrets et des actions simples à mettre en œuvre dans votre quotidien.</li><li data-v-556b4161><strong data-v-556b4161>Confiance renouvelée :</strong> Retrouvez la foi en vos capacités et en votre cheminement personnel.</li></ul></div><div class="section CTA-section" data-v-556b4161><h2 data-v-556b4161>Prêt à trouver des réponses ?</h2><p data-v-556b4161>Ne laissez pas l&#39;incertitude vous ralentir. Réservez votre séance de guidance personnalisée dès aujourd&#39;hui directement sur WhatsApp et commencez à avancer avec assurance.</p><a href="https://wa.me/1234567890?text=Bonjour,%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20guidance%20personnalisée" class="cta-button primary" target="_blank" rel="noopener" data-v-556b4161>Réserver ma séance sur WhatsApp</a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Service1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Service1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-556b4161"]]);
export {
  Service1 as default
};
