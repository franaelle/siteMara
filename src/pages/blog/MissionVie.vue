<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Comment trouver sa mission de vie ? Guide pratique',
  meta: [
    { name: 'description', content: 'Vous vous sentez égaré ? Découvrez des outils concrets pour identifier votre mission de vie et donner du sens à votre existence.' }
  ]
})
</script>

<template>
  <article class="blog-article">
    <header class="article-header">
      <router-link to="/blog" class="back-link">← Retour au Blog</router-link>
      <h1>Trouver sa mission de vie</h1>
      <p class="meta">Publié le 25 Février 2026 • Lecture : 8 min</p>
    </header>

    <div class="article-content">
      <p>Chacun d'entre nous est venu sur Terre avec un but unique. Votre mission de vie n'est pas forcément une profession, mais une manière d'être au monde.</p>
      
      <h2>Écouter ses passions</h2>
      <p>Ce qui vous anime, ce qui vous fait perdre la notion du temps, sont des indices majeurs envoyés par votre âme.</p>
      
      <h2>L'Ikigai : Un outil précieux</h2>
      <p>L'alliance entre ce que vous aimez, ce en quoi vous êtes doué, ce dont le monde a besoin et ce pour quoi vous pouvez être payé.</p>
      
      <div class="internal-links">
        <p>Aide personnalisée : <router-link to="/services/1">Guidance Spirituelle</router-link></p>
      </div>
    </div>

    <section class="cta-banner">
      <h3>Quelle est votre voie ?</h3>
      <p>Découvrons-le ensemble lors d'une séance personnalisée.</p>
      <a href="https://wa.me/1234567890" class="wa-btn">Questionner l'expert sur WhatsApp</a>
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
