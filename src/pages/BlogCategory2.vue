<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Catégorie: Développement Personnel - Blog',
  meta: [
    { name: 'description', content: 'Des articles et astuces pour développer votre potentiel, atteindre vos objectifs et retrouver la confiance en vous.' },
  ]
})
</script>

<template>
  <div class="category-page">
    <div class="header">
      <router-link to="/blog" class="back-link">&larr; Retour au blog</router-link>
      <h1>Développement Personnel</h1>
      <p class="desc">Des exercices pratiques pour surmonter vos blocages et atteindre vos objectifs. Dépassez-vous au quotidien.</p>
    </div>

    <div class="article-list">
      <article class="article-card">
        <h2><router-link to="#">3 Méthodes pour vaincre le syndrome de l'imposteur</router-link></h2>
        <div class="meta">05 Mars 2026 • 6 min de lecture</div>
        <p>Un guide pratique pour reprendre confiance en vos capacités et arrêter de saboter vos propres réussites et votre bonheur professionnel. Prenez votre juste place avec sérénité.</p>
        <router-link to="#" class="read-more">Lire l'article</router-link>
      </article>

      <article class="article-card">
        <h2><router-link to="#">Comment fixer des limites saines sans culpabiliser</router-link></h2>
        <div class="meta">20 Février 2026 • 8 min de lecture</div>
        <p>Savoir dire "non" est essentiel pour préserver votre énergie. Découvrez des techniques d'affirmation de soi pour respecter vos besoins tout en conservant d'excellentes relations.</p>
        <router-link to="#" class="read-more">Lire l'article</router-link>
      </article>

      <article class="article-card">
        <h2><router-link to="#">Le pouvoir de la visualisation pour atteindre ses buts</router-link></h2>
        <div class="meta">10 Février 2026 • 5 min de lecture</div>
        <p>Comment utiliser votre imagination pour préparer le terrain de votre réussite. Une technique plébiscitée par les plus grands athlètes et entrepreneurs, accessible à tous.</p>
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
  border-left: 4px solid #e67e22; /* Different color for Category 2 */
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
  color: #e67e22;
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
  background: #e67e22;
  color: white;
}
</style>
