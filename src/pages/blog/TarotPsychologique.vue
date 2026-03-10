<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Le Tarot Psychologique : Un miroir de l\'âme',
  meta: [
    { name: 'description', content: 'Découvrez comment le tarot, utilisé comme outil psychologique, peut vous aider à mieux comprendre votre inconscient et vos blocages.' }
  ]
})
</script>

<template>
  <article class="blog-article">
    <header class="article-header">
      <router-link to="/blog" class="back-link">← Retour au Blog</router-link>
      <h1>Initiation au tarot psychologique</h1>
      <p class="meta">Publié le 15 Février 2026 • Lecture : 9 min</p>
    </header>

    <div class="article-content">
      <p>Loin de la divination pure, le tarot psychologique est un outil puissant de connaissance de soi. Il utilise les archétypes pour nous parler de notre état présent.</p>
      
      <h2>Pourquoi utiliser le tarot ?</h2>
      <p>Les cartes agissent comme un projecteur sur notre inconscient. Elles révèlent ce que nous savons déjà mais que nous refusons de voir.</p>
      
      <h2>Comment pratiquer seul ?</h2>
      <p>Commencez par tirer une carte par jour et observez comment elle résonne avec vos situations vécues et vos émotions.</p>
      
      <div class="internal-links">
        <p>Approfondir la compréhension : <router-link to="/services/1">Guidance Intuitive</router-link></p>
      </div>
    </div>

    <section class="cta-banner">
      <h3>Une lecture de votre situation ?</h3>
      <p>Réservez votre séance de tarot psychologique par WhatsApp.</p>
      <a href="https://wa.me/1234567890" class="wa-btn">Prendre rendez-vous</a>
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
