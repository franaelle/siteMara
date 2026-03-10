<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { t } from '../i18n'

useHead({
  title: 'Consultation Directe',
})

const formData = ref({
  nom: '',
  probleme: 'Retour Affectif',
  urgence: 'Immédiate'
})

const sendWhatsApp = () => {
  const message = `Bonjour Grand Maître, je m'appelle ${formData.value.nom}. J'ai besoin de votre aide pour un problème de ${formData.value.probleme}. Mon urgence est ${formData.value.urgence}. Pouvez-vous m'aider ?`
  const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
</script>

<template>
  <div class="contact-page fade-in">
    <!-- Section Header Luxury -->
    <header class="section-padding container" style="text-align: center;">
      <h1 style="font-size: 3.5rem; margin-bottom: 2.5rem;">{{ t('contact.title') }}</h1>
      <p style="font-size: 1.1rem; color: var(--text-soft); max-width: 700px; margin: 0 auto; letter-spacing: 0.05em;">{{ t('contact.desc') }}</p>
    </header>

    <div class="contact-layout container section-padding">
      <!-- Left Panel: Info & Online Indicator -->
      <div class="contact-details">
        <div class="presence-indicator" style="margin-bottom: 4rem;">
          <span class="dot"></span> {{ t('contact.online_indicator') }}
        </div>

        <div class="detail-block">
          <h3>SÉCURITÉ ET DISCRÉTION</h3>
          <p>{{ t('contact.security') }}</p>
        </div>

        <div class="detail-block" style="margin-top: 4rem;">
          <h3>LIGNE DIRECTE</h3>
          <p>WhatsApp: +123 456 7890</p>
          <a href="https://wa.me/1234567890" class="btn-luxury" style="margin-top: 2rem;">{{ t('contact.wa_direct') }}</a>
        </div>
      </div>

      <!-- Right Panel: Elegant Form -->
      <div class="contact-form">
        <h2 style="font-size: 2.2rem; margin-bottom: 4rem;">{{ t('contact.form_title') }}</h2>
        <form @submit.prevent="sendWhatsApp" class="luxury-form">
          <div class="form-group">
            <label>{{ t('contact.name_label') }}</label>
            <input v-model="formData.nom" type="text" placeholder="Entrez votre nom" required>
          </div>
          
          <div class="form-group">
            <label>{{ t('contact.problem_label') }}</label>
            <select v-model="formData.probleme">
              <option>Amour & Retour Affectif</option>
              <option>Richesse & Prospérité</option>
              <option>Protection & Blindage</option>
              <option>Purification & Voyance</option>
            </select>
          </div>

          <div class="form-group">
            <label>{{ t('contact.urgency_label') }}</label>
            <select v-model="formData.urgence">
              <option>Immédiate</option>
              <option>Haute</option>
              <option>Normale</option>
            </select>
          </div>

          <button type="submit" class="btn-luxury btn-solid" style="padding: 1.5rem 4rem; width: 100%;">{{ t('contact.submit_btn') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-layout { display: grid; grid-template-columns: 1fr 1.5fr; gap: 8rem; align-items: start; }

.detail-block h3 { font-size: 1rem; margin-bottom: 1rem; letter-spacing: 0.2em; }
.detail-block p { font-size: 1.1rem; color: var(--text-soft); max-width: 100%; }

.presence-indicator { 
  display: flex; align-items: center; gap: 1rem; font-weight: 700; color: #128c7e;
  font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
}
.dot { width: 8px; height: 8px; background: #25d366; border-radius: 50%; box-shadow: 0 0 10px rgba(37, 211, 102, 0.5); }

.contact-form { padding: 4rem; background: var(--bg-soft); border: 1px solid var(--border-thin); }
.luxury-form { display: grid; gap: 2.5rem; }
.form-group label { display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 0.1em; }
.form-group input, .form-group select { 
  width: 100%; padding: 1.25rem; background: transparent; border: none; border-bottom: 1px solid var(--border-thin);
  font-family: var(--font-sans); font-size: 1.1rem; transition: var(--transition-smooth);
}
.form-group input:focus, .form-group select:focus { border-bottom-color: var(--primary); outline: none; }

@media (max-width: 1024px) {
  .contact-layout { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
  .presence-indicator { justify-content: center; }
  .contact-form { padding: 3rem 1.5rem; }
}
</style>
