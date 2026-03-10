<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Comment purifier l\'énergie de sa maison : 5 astuces simples',
  meta: [
    { name: 'description', content: 'Votre maison est votre sanctuaire. Apprenez à nettoyer les énergies négatives de votre intérieur avec des méthodes naturelles et spirituelles.' }
  ]
})
</script>

<template>
  <article class="blog-article">
    <header class="article-header">
      <router-link to="/blog" class="back-link">← Retour au Blog</router-link>
      <h1>Purifier l'énergie de sa maison</h1>
      <p class="meta">Publié le 05 Mars 2026 • Lecture : 5 min</p>
    </header>

    <div class="article-content">
      <p>Notre lieu de vie absorbe toutes les émotions et événements qui s'y déroulent. Un nettoyage énergétique régulier est indispensable pour s'y sentir bien.</p>
      
      <h2>Le pouvoir de la Sauge et du Palo Santo</h2>
      <p>La fumigation est l'une des méthodes les plus anciennes pour purifier un espace. La fumée capture les énergies lourdes pour les emmener vers l'extérieur.</p>
      
      <h2>Le sel marin : Un absorbeur naturel</h2>
      <p>Placer des coupelles de sel aux quatre coins d'une pièce permet d'absorber les vibrations négatives stagnantes.</p>
      
      <h2>L'intention et les sons</h2>
      <p>Votre intention est l'outil le plus puissant. Accompagnez votre nettoyage de sons (bols tibétains, cloches) pour briser les stagnations d'énergie.</p>
      
      <div class="internal-links">
        <p>Optimisez votre bien-être : <router-link to="/services/3">Harmonisation Énergétique</router-link></p>
      </div>
    </div>

    <section class="cta-banner">
      <h3>Besoin d'un nettoyage énergétique pro ?</h3>
      <p>Contactez-nous pour une séance à distance.</p>
      <a href="https://wa.me/1234567890" class="wa-btn">WhatsApp Direct</a>
    </section>
  </article>
</template>

<style scoped>
.blog-article { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
.article-header { margin-bottom: 3rem; text-align: center; }
.article-content { line-height: 1.8; font-size: 1.1rem; color: #444; }
.internal-links { margin-top: 3rem; padding: 1.5rem; background: #f8f9fa; border-left: 4px solid #3498db; }
.cta-banner { margin-top: 4rem; padding: 3rem; background: #2c3e50; color: white; border-radius: 12px; text-align: center; }
.wa-btn { display: inline-block; margin-top: 1.5rem; background: #25d366; color: white; padding: 1rem 2rem; border-radius: 50px; text-decoration: none; font-weight: bold; }
</style>
