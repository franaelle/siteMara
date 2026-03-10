<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'À propos de notre mission d\'accompagnement',
  meta: [
    { name: 'description', content: 'Découvrez l\'histoire, les valeurs et l\'expertise derrière notre plateforme de conseil spirituel et développement personnel.' },
  ]
})
</script>

<template>
  <div class="about-page">
    <section class="mission-section">
      <h1>Notre Mission</h1>
      <p class="lead">Accompagner chaque individu vers sa propre lumière et son équilibre intérieur.</p>
      <div class="mission-content">
        <p>Depuis plus de 10 ans, nous nous consacrons à l'étude de la spiritualité et du développement personnel. Notre plateforme est née d'une volonté simple : rendre l'accompagnement spirituel accessible, moderne et bienveillant.</p>
        <p>Nous croyons fermement que chaque personne possède en elle les clés de sa propre guérison et de son épanouissement. Notre rôle est simplement de vous aider à les trouver, en vous fournissant les outils et la guidance nécessaires pour éclairer votre chemin.</p>
      </div>
    </section>

    <section class="values-section">
      <h2>Nos Valeurs</h2>
      <div class="values-grid">
        <div class="value-item">
          <h3>Bienveillance</h3>
          <p>Un accueil sans jugement, quel que soit votre parcours ou vos croyances. Nous créons un espace sécurisé pour votre parole.</p>
        </div>
        <div class="value-item">
          <h3>Authenticité</h3>
          <p>Nous prônons une spiritualité ancrée et sincère, loin des dogmes, centrée sur l'expérience humaine réelle.</p>
        </div>
        <div class="value-item">
          <h3>Confidentialité</h3>
          <p>Vos échanges sont strictement privés. Le respect de votre vie intime est au cœur de notre éthique professionnelle.</p>
        </div>
        <div class="value-item">
          <h3>Expertise</h3>
          <p>Une formation continue et une pratique rigoureuse pour vous offrir le meilleur accompagnement possible.</p>
        </div>
      </div>
    </section>

    <section class="expertise-section">
      <h2>Notre Expertise</h2>
      <p>Notre approche est pluridisciplinaire. Nous combinons des méthodes ancestrales de sagesse avec les outils modernes de la psychologie positive et du coaching de vie. Cette alliance permet un travail en profondeur, touchant à la fois le corps, l'âme et l'esprit.</p>
      <router-link to="/services" class="btn secondary">Découvrir nos méthodes</router-link>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

section {
  margin-bottom: 5rem;
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.5rem;
  color: #3498db;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 300;
}

.mission-content {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
}

h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #3498db;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.value-item {
  text-align: center;
  padding: 2rem;
  background: #f9fbfd;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.value-item:hover {
  transform: translateY(-5px);
}

.value-item h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.expertise-section {
  text-align: center;
  background: #2c3e50;
  color: white;
  padding: 4rem 2rem;
  border-radius: 15px;
}

.expertise-section h2 {
  color: white;
}

.expertise-section h2::after {
  background: white;
}

.expertise-section p {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto 2rem;
}

.btn.secondary {
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s;
  display: inline-block;
}

.btn.secondary:hover {
  background: white;
  color: #2c3e50;
}
</style>
