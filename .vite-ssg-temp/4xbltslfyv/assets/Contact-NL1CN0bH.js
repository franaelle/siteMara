import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc, t } from "../main.mjs";
import "@unhead/vue/server";
import "vue-router";
const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Consultation Directe"
    });
    const formData = ref({
      nom: "",
      probleme: "Retour Affectif",
      urgence: "Immédiate"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page fade-in" }, _attrs))} data-v-f3425908><header class="section-padding container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-f3425908><h1 style="${ssrRenderStyle({ "font-size": "3.5rem", "margin-bottom": "2.5rem" })}" data-v-f3425908>${ssrInterpolate(unref(t)("contact.title"))}</h1><p style="${ssrRenderStyle({ "font-size": "1.1rem", "color": "var(--text-soft)", "max-width": "700px", "margin": "0 auto", "letter-spacing": "0.05em" })}" data-v-f3425908>${ssrInterpolate(unref(t)("contact.desc"))}</p></header><div class="contact-layout container section-padding" data-v-f3425908><div class="contact-details" data-v-f3425908><div class="presence-indicator" style="${ssrRenderStyle({ "margin-bottom": "4rem" })}" data-v-f3425908><span class="dot" data-v-f3425908></span> ${ssrInterpolate(unref(t)("contact.online_indicator"))}</div><div class="detail-block" data-v-f3425908><h3 data-v-f3425908>SÉCURITÉ ET DISCRÉTION</h3><p data-v-f3425908>${ssrInterpolate(unref(t)("contact.security"))}</p></div><div class="detail-block" style="${ssrRenderStyle({ "margin-top": "4rem" })}" data-v-f3425908><h3 data-v-f3425908>LIGNE DIRECTE</h3><p data-v-f3425908>WhatsApp: +123 456 7890</p><a href="https://wa.me/1234567890" class="btn-luxury" style="${ssrRenderStyle({ "margin-top": "2rem" })}" data-v-f3425908>${ssrInterpolate(unref(t)("contact.wa_direct"))}</a></div></div><div class="contact-form" data-v-f3425908><h2 style="${ssrRenderStyle({ "font-size": "2.2rem", "margin-bottom": "4rem" })}" data-v-f3425908>${ssrInterpolate(unref(t)("contact.form_title"))}</h2><form class="luxury-form" data-v-f3425908><div class="form-group" data-v-f3425908><label data-v-f3425908>${ssrInterpolate(unref(t)("contact.name_label"))}</label><input${ssrRenderAttr("value", formData.value.nom)} type="text" placeholder="Entrez votre nom" required data-v-f3425908></div><div class="form-group" data-v-f3425908><label data-v-f3425908>${ssrInterpolate(unref(t)("contact.problem_label"))}</label><select data-v-f3425908><option data-v-f3425908${ssrIncludeBooleanAttr(Array.isArray(formData.value.probleme) ? ssrLooseContain(formData.value.probleme, null) : ssrLooseEqual(formData.value.probleme, null)) ? " selected" : ""}>Amour &amp; Retour Affectif</option><option data-v-f3425908${ssrIncludeBooleanAttr(Array.isArray(formData.value.probleme) ? ssrLooseContain(formData.value.probleme, null) : ssrLooseEqual(formData.value.probleme, null)) ? " selected" : ""}>Richesse &amp; Prospérité</option><option data-v-f3425908${ssrIncludeBooleanAttr(Array.isArray(formData.value.probleme) ? ssrLooseContain(formData.value.probleme, null) : ssrLooseEqual(formData.value.probleme, null)) ? " selected" : ""}>Protection &amp; Blindage</option><option data-v-f3425908${ssrIncludeBooleanAttr(Array.isArray(formData.value.probleme) ? ssrLooseContain(formData.value.probleme, null) : ssrLooseEqual(formData.value.probleme, null)) ? " selected" : ""}>Purification &amp; Voyance</option></select></div><div class="form-group" data-v-f3425908><label data-v-f3425908>${ssrInterpolate(unref(t)("contact.urgency_label"))}</label><select data-v-f3425908><option data-v-f3425908${ssrIncludeBooleanAttr(Array.isArray(formData.value.urgence) ? ssrLooseContain(formData.value.urgence, null) : ssrLooseEqual(formData.value.urgence, null)) ? " selected" : ""}>Immédiate</option><option data-v-f3425908${ssrIncludeBooleanAttr(Array.isArray(formData.value.urgence) ? ssrLooseContain(formData.value.urgence, null) : ssrLooseEqual(formData.value.urgence, null)) ? " selected" : ""}>Haute</option><option data-v-f3425908${ssrIncludeBooleanAttr(Array.isArray(formData.value.urgence) ? ssrLooseContain(formData.value.urgence, null) : ssrLooseEqual(formData.value.urgence, null)) ? " selected" : ""}>Normale</option></select></div><button type="submit" class="btn-luxury btn-solid" style="${ssrRenderStyle({ "padding": "1.5rem 4rem", "width": "100%" })}" data-v-f3425908>${ssrInterpolate(unref(t)("contact.submit_btn"))}</button></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3425908"]]);
export {
  Contact as default
};
