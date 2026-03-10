<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Les bienfaits du lâcher-prise sur votre spiritualité',
  meta: [
    { name: 'description', content: 'Le lâcher-prise est la clé de la paix intérieure. Découvrez pourquoi résister au changement bloque votre évolution et comment lâcher prise enfin.' }
  ]
})
</script>

<template>
  <article class="blog-article">
    <header class="article-header">
      <router-link to="/blog" class="back-link">← Retour au Blog</router-link>
      <h1>Les bienfaits du lâcher-prise</h1>
      <p class="meta">Publié le 01 Mars 2026 • Lecture : 6 min</p>
    </header>

    <div class="article-content">
      <p>Lâcher prise ne signifie pas abandonner, mais accepter que certaines choses ne dépendent pas de nous. C'est un acte de courage et de confiance absolue en la vie.</p>
      
      <h2>Pourquoi notre ego résiste-t-il ?</h2>
      <p>L'ego a besoin de contrôle pour se sentir en sécurité. Mais ce contrôle est une illusion qui génère une souffrance inutile.</p>
      
      <h2>La fluidité spirituelle</h2>
      <p>Quand on lâche prise, on permet à l'énergie de circuler librement. Les solutions apparaissent souvent là où les problèmes semblaient insolubles.</p>
      
      <div class="internal-links">
        <p>Améliorez votre quotidien : <router-link to="/blog/meditation-matinale">L'importance de la méditation matinale</router-link></p>
      </div>
    </div>

    <section class="cta-banner">
      <h3>Accompagnement au changement</h3>
      <p>Apprenez à lâcher prise avec nos séances de coaching.</p>
      <a href="https://wa.me/1234567890" class="wa-btn">Prendre Contact</a>
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
