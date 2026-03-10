<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Catégorie: Énergie et Bien-être - Blog',
  meta: [
    { name: 'description', content: 'Conseils pour l\'ancrage, le nettoyage énergétique et le maintien d\'un haut niveau vibratoire.' },
  ]
})
</script>

<template>
  <div class="category-page">
    <div class="header">
      <router-link to="/blog" class="back-link">&larr; Retour au blog</router-link>
      <h1>Énergie et Bien-être</h1>
      <p class="desc">Ancrage, chakras, méditation et techniques pour maintenir un haut niveau vibratoire dans un monde souvent stressant.</p>
    </div>

    <div class="article-list">
      <article class="article-card">
        <h2><router-link to="#">L'importance de l'ancrage au quotidien</router-link></h2>
        <div class="meta">28 Février 2026 • 5 min de lecture</div>
        <p>Pourquoi se connecter à la Terre est primordial pour votre équilibre émotionnel, et comment le faire en seulement 5 minutes par jour. Une pratique indispensable pour ne pas se laisser happer par le stress ambiant.</p>
        <router-link to="#" class="read-more">Lire l'article</router-link>
      </article>

      <article class="article-card">
        <h2><router-link to="#">Guide d'introduction aux 7 chakras principaux</router-link></h2>
        <div class="meta">18 Février 2026 • 12 min de lecture</div>
        <p>Comprendre nos centres énergétiques, leurs rôles sur notre corps physique et comment repérer lorsqu'ils sont bloqués ou ouverts de façon excessive.</p>
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
  border-left: 4px solid #27ae60; /* Different color for Category 3 */
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
  color: #27ae60;
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
  background: #27ae60;
  color: white;
}
</style>
