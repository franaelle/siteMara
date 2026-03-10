<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'La Lithothérapie : Le pouvoir secret des cristaux',
  meta: [
    { name: 'description', content: 'Découvrez comment les minéraux et les cristaux peuvent influencer votre bien-être. Améthyste, Quartz, Citrine : apprenez à les utiliser au quotidien.' }
  ]
})
</script>

<template>
  <article class="blog-article page-enter">
    <header class="article-header">
      <router-link to="/blog/categorie-3" class="category-tag">Énergie et Bien-être</router-link>
      <h1>Le pouvoir des cristaux</h1>
      <p class="meta">Publié le 12 Février 2026 • Lecture : 10 min</p>
    </header>

    <div class="article-content">
      <p>La lithothérapie est une méthode ancienne qui utilise l'énergie vibratoire des pierres pour rééquilibrer l'organisme. Chaque cristal possède une fréquence unique qui entre en résonance avec nos propres centres énergétiques.</p>
      
      <div class="highlight-box">
        <p><strong>Rappel important :</strong> Les cristaux sont des compléments et ne remplacent en aucun cas un avis médical professionnel.</p>
      </div>

      <h2>Les pierres indispensables pour débuter</h2>
      <p>Si vous souhaitez commencer votre collection, voici les trois piliers de la lithothérapie :</p>
      
      <h3>1. L'Améthyste : La sérénité</h3>
      <p>Idéale pour apaiser le mental, favoriser un sommeil réparateur et stimuler l'intuition. C'est la pierre de la sagesse par excellence.</p>
      
      <h3>2. Le Quartz rose : L'amour de soi</h3>
      <p>Une pierre douce qui guérit les blessures émotionnelles et ouvre le cœur à la bienveillance. Essentielle pour le <router-link to="/blog/bienfaits-lacher-prise">lâcher-prise</router-link>.</p>
      
      <h3>3. La Citrine : La joie et l'abondance</h3>
      <p>Un véritable rayon de soleil qui dissipe les pensées sombres et attire la prospérité et la réussite dans vos projets.</p>

      <h2>Prendre soin de vos pierres</h2>
      <p>Un cristal s'entretient. Il absorbe les énergies environnantes et doit être régulièrement purifié et rechargé pour conserver son efficacité.</p>
      
      <div class="internal-links">
        <p>Complétez votre formation : <router-link to="/blog/purifier-energie-maison">Comment purifier sa maison</router-link></p>
      </div>
    </div>

    <section class="cta-banner">
      <h3>Choisissez le bon cristal pour vous</h3>
      <p>Lors d'une séance d'harmonisation, nous vous conseillons sur les minéraux adaptés à vos besoins actuels.</p>
      <a href="https://wa.me/1234567890" class="wa-btn">Conseil Litho sur WhatsApp</a>
    </section>
  </article>
</template>

<style scoped>
.blog-article { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
.article-header { margin-bottom: 3rem; text-align: center; }
.category-tag { background: var(--primary); color: white; padding: 0.3rem 1rem; border-radius: 20px; font-weight: bold; font-size: 0.9rem; }
.article-content { line-height: 1.8; font-size: 1.1rem; color: #444; }
.highlight-box { background: #fff8e1; border-left: 5px solid #ffc107; padding: 1rem; margin: 2rem 0; border-radius: 4px; }
.internal-links { margin-top: 3rem; padding: 1.5rem; background: #f8f9fa; border-left: 4px solid #3498db; }
.cta-banner { margin-top: 4rem; padding: 3rem; background: #2c3e50; color: white; border-radius: 12px; text-align: center; }
.wa-btn { display: inline-block; margin-top: 1.5rem; background: #25d366; color: white; padding: 1.2rem 2.5rem; border-radius: 50px; text-decoration: none; font-weight: bold; transition: transform 0.2s; }
.wa-btn:hover { transform: scale(1.05); }
</style>
