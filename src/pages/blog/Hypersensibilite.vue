<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'L\'hypersensibilité spirituelle : Une faiblesse ou un don ?',
  meta: [
    { name: 'description', content: 'Vous ressentez tout plus intensément ? Découvrez comment l\'hypersensibilité émotionnelle et spirituelle peut devenir votre plus grand atout.' }
  ]
})
</script>

<template>
  <article class="blog-article page-enter">
    <header class="article-header">
      <router-link to="/blog/categorie-2" class="category-tag">Développement Personnel</router-link>
      <h1>Comprendre son hypersensibilité</h1>
      <p class="meta">Publié le 01 Février 2026 • Lecture : 9 min</p>
    </header>

    <div class="article-content">
      <p>L'hypersensibilité spirituelle concerne entre 15 et 20 % de la population. Ce n'est pas une pathologie, mais un câblage neurologique plus fin qui permet de capter des informations subtiles.</p>
      
      <h2>Comment gérer le surplus émotionnel ?</h2>
      <p>Pour un hypersensible, les émotions des autres et les énergies des lieux peuvent être envahissantes. Il est primordial d'apprendre à différencier ses propres ressentis de ceux de son environnement.</p>
      
      <h2>Faire de sa sensibilité une force</h2>
      <p>Une fois maîtrisée, cette capacité devient une intuition hors du commun, une empathie profonde et une créativité sans limites. C'est un outil précieux pour toute démarche de <router-link to="/blog/mission-de-vie">trouver sa mission de vie</router-link>.</p>
      
      <h3>3 Clés pour l'hypersensible :</h3>
      <ul>
        <li><strong>Se préserver :</strong> Savoir dire "non" aux situations énergétiquement épuisantes.</li>
        <li><strong>S'exprimer :</strong> L'art, l'écriture ou la parole sont des exutoires indispensables.</li>
        <li><strong>Se ressourcer :</strong> Le contact avec la nature est le meilleur calmant pour un système nerveux sollicité.</li>
      </ul>

      <div class="internal-links">
        <p>Accompagnement spécifique : <router-link to="/services/2">Coaching de Vie</router-link></p>
      </div>
    </div>

    <section class="cta-banner">
      <h3>Vous ne l'êtes plus seul face à vos ressentis</h3>
      <p>Nous vous aidons à apprivoiser votre belle sensibilité.</p>
      <a href="https://wa.me/1234567890" class="wa-btn">Échanger sur WhatsApp</a>
    </section>
  </article>
</template>

<style scoped>
.blog-article { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
.article-header { margin-bottom: 3rem; text-align: center; }
.category-tag { background: #e67e22; color: white; padding: 0.3rem 1rem; border-radius: 20px; font-weight: bold; font-size: 0.9rem; }
.article-content { line-height: 1.8; font-size: 1.1rem; color: #444; }
.internal-links { margin-top: 3rem; padding: 1.5rem; background: #f8f9fa; border-left: 4px solid #3498db; }
.cta-banner { margin-top: 4rem; padding: 3rem; background: #2c3e50; color: white; border-radius: 12px; text-align: center; }
.wa-btn { display: inline-block; margin-top: 1.5rem; background: #25d366; color: white; padding: 1.2rem 2.5rem; border-radius: 50px; text-decoration: none; font-weight: bold; }
</style>
