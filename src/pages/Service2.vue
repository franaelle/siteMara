<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Développement Personnel & Coaching',
  meta: [
    { name: 'description', content: 'Débloquez votre potentiel avec notre programme de développement personnel. Coaching privé sur WhatsApp pour atteindre vos objectifs de vie.' },
  ]
})
</script>

<template>
  <div class="service-detail">
    <div class="content">
      <h1>Développement Personnel</h1>
      <p class="lead">Apprenez à mieux vous connaître, identifiez vos blocages et développez votre plein potentiel.</p>
      
      <div class="section">
        <h2>Un chemin vers votre meilleure version</h2>
        <p>Le développement personnel n'est pas une simple quête de perfection, c'est l'art de devenir la meilleure version possible de soi-même en acceptant ses forces autant que ses vulnérabilités.</p>
        <p>Notre approche de coaching vous aide à identifier les croyances limitantes qui vous empêchent d'avancer. Nous mettons en place des stratégies personnalisées pour transformer vos peurs en moteurs et vos doutes en certitudes.</p>
        
        <h3>Un programme pour :</h3>
        <ul>
          <li><strong>Confiance en soi :</strong> Bâtir une estime de soi solide et inébranlable.</li>
          <li><strong>Gestion des émotions :</strong> Apprendre à accueillir et canaliser vos ressentis sans vous laisser submerger.</li>
          <li><strong>Atteinte des objectifs :</strong> Définir des buts clairs, réalisables et alignés avec vos valeurs profondes.</li>
          <li><strong>Amélioration relationnelle :</strong> Communiquer avec assertivité et poser des limites saines.</li>
        </ul>
      </div>

      <div class="section CTA-section">
        <h2>Prêt à amorcer le changement ?</h2>
        <p>Le premier pas vers la transformation commence aujourd'hui. Contactez-nous via WhatsApp pour définir ensemble votre parcours de développement personnel.</p>
        <a href="https://wa.me/1234567890?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20le%20coaching%20en%20développement%20personnel" class="cta-button primary" target="_blank" rel="noopener">Commencer mon coaching sur WhatsApp</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: #ffffff;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #3498db;
  padding-bottom: 0.5rem;
  display: inline-block;
}

.lead {
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 3rem;
  font-style: italic;
  line-height: 1.6;
}

h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.3rem;
  color: #34495e;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
}

li {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
}

li::before {
  content: "🚀";
  color: #27ae60;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.CTA-section {
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 4rem;
  border-top: 4px solid #f39c12;
}

.cta-button {
  display: inline-block;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
}

.cta-button.primary {
  background: #25d366;
  color: white;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.cta-button.primary:hover {
  background: #128c7e;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}
</style>
