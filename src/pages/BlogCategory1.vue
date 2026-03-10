<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Catégorie: Éveil Spirituel - Blog',
  meta: [
    { name: 'description', content: 'Articles dédiés à l\'éveil spirituel, la compréhension de soi et l\'exploration de sa conscience.' },
  ]
})
</script>

<template>
  <div class="category-page">
    <div class="header">
      <router-link to="/blog" class="back-link">&larr; Retour au blog</router-link>
      <h1>L'Éveil Spirituel</h1>
      <p class="desc">Comprendre les signes, les synchronicités et votre intuition au quotidien. Des clés pour s'ouvrir à une dimension plus subtile de l'existence.</p>
    </div>

    <div class="article-list">
      <article class="article-card">
        <h2><router-link to="#">Comment reconnaître les signes de l'Univers</router-link></h2>
        <div class="meta">10 Mars 2026 • 5 min de lecture</div>
        <p>Les synchronicités ne sont pas des coïncidences. Apprenez à décrypter les messages que la vie vous envoie chaque jour. Un guide pour être attentif aux heures miroirs, aux animaux totems et aux rencontres qui changent tout.</p>
        <router-link to="#" class="read-more">Lire l'article</router-link>
      </article>

      <article class="article-card">
        <h2><router-link to="#">Développer son intuition facilement</router-link></h2>
        <div class="meta">22 Février 2026 • 7 min de lecture</div>
        <p>Notre mental prend souvent le dessus sur notre petite voix intérieure. 5 exercices puissants pour apprendre à faire taire son ego et laisser l'intuition guider ses choix majeurs.</p>
        <router-link to="#" class="read-more">Lire l'article</router-link>
      </article>

      <article class="article-card">
        <h2><router-link to="#">Les 5 étapes de la nuit noire de l'âme</router-link></h2>
        <div class="meta">15 Février 2026 • 10 min de lecture</div>
        <p>Traverser la nuit noire de l'âme est une épreuve douloureuse mais nécessaire à tout éveil spirituel profond. Comprendre ces différentes phases pour mieux les traverser vers la lumière.</p>
        <router-link to="#" class="read-more">Lire l'article</router-link>
      </article>
    </div>
  </div>
</template>

<style scoped>
.category-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.back-link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 1rem;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.desc {
  color: #666;
  font-size: 1.2rem;
  line-height: 1.6;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.article-card {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  border-left: 4px solid #3498db;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-card h2 {
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
}

.article-card h2 a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.2s;
}

.article-card h2 a:hover {
  color: #3498db;
}

.meta {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1rem;
  font-weight: 500;
}

.article-card p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.read-more {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  background: #f8f9fa;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}

.read-more:hover {
  background: #3498db;
  color: white;
}
</style>
