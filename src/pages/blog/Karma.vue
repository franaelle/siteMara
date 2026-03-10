<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Comprendre son Karma : Le guide pour s\'en libérer',
  meta: [
    { name: 'description', content: 'Qu\'est-ce que le karma réellement ? Apprenez comment vos actions influencent votre vie actuelle et comment équilibrer vos dettes karmiques.' }
  ]
})
</script>

<template>
  <article class="blog-article">
    <header class="article-header">
      <router-link to="/blog" class="back-link">← Retour au Blog</router-link>
      <h1>Comprendre son Karma</h1>
      <p class="meta">Publié le 08 Mars 2026 • Lecture : 7 min</p>
    </header>

    <div class="article-content">
      <p>Le mot "Karma" est souvent utilisé à toutes les sauces, mais sa signification profonde est fondamentale pour quiconque s'engage sur une voie spirituelle.</p>
      
      <h2>Loi de cause à effet</h2>
      <p>Le karma n'est pas une punition divine, mais une loi naturelle de cause à effet. Chaque pensée, parole et action sème une graine qui finira par germer.</p>
      
      <h2>Équilibrer ses dettes karmiques</h2>
      <p>Comprendre son karma, c'est prendre la responsabilité de sa vie. C'est réaliser que nous sommes les architectes de notre propre destin.</p>
      
      <h3>Comment agir sur son karma ?</h3>
      <p>Il ne s'agit pas de regretter le passé, mais d'agir en conscience au présent. La <router-link to="/services/1">guidance personnalisée</router-link> peut vous aider à identifier les schémas répétitifs liés à votre karma passé.</p>

      <h2>Se libérer des cycles</h2>
      <p>La libération karmique passe par le pardon, la gratitude et l'action désintéressée.</p>
      
      <div class="internal-links">
        <p>Découvrez aussi : <router-link to="/blog/mission-de-vie">Trouver sa mission de vie</router-link></p>
      </div>
    </div>

    <section class="cta-banner">
      <h3>Envie d'explorer votre chemin karmique ?</h3>
      <p>Nos conseillers sont là pour vous éclairer.</p>
      <a href="https://wa.me/1234567890" class="wa-btn">Prendre RDV sur WhatsApp</a>
    </section>
  </article>
</template>

<style scoped>
/* Reuse styles from previous article or use global styles if they were defined */
.blog-article { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
.article-header { margin-bottom: 3rem; text-align: center; }
.article-content { line-height: 1.8; font-size: 1.1rem; color: #444; }
.internal-links { margin-top: 3rem; padding: 1.5rem; background: #f8f9fa; border-left: 4px solid #3498db; }
.cta-banner { margin-top: 4rem; padding: 3rem; background: #2c3e50; color: white; border-radius: 12px; text-align: center; }
.wa-btn { display: inline-block; margin-top: 1.5rem; background: #25d366; color: white; padding: 1rem 2rem; border-radius: 50px; text-decoration: none; font-weight: bold; }
</style>
