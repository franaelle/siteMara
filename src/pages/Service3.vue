<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Harmonisation Énergétique - Alignement Mind Body',
  meta: [
    { name: 'description', content: 'Retrouvez votre équilibre avec nos séances d\'harmonisation énergétique. Libérez les tensions et alignez vos chakras avec notre accompagnement WhatsApp.' },
  ]
})
</script>

<template>
  <div class="service-detail">
    <div class="content">
      <h1>Harmonisation Énergétique</h1>
      <p class="lead">Rééquilibrez vos énergies, apaisez votre mental et revitalisez votre corps dans sa globalité.</p>
      
      <div class="section">
        <h2>Retrouvez votre alignement intérieur</h2>
        <p>L'harmonisation énergétique est une démarche holistique. Notre corps physique n'est que la manifestation visible de notre état énergétique. Lorsque nos énergies sont bloquées par le stress, les traumatismes ou les émotions refoulées, cela se traduit souvent par de la fatigue, des douleurs ou un mal-être général.</p>
        <p>Notre accompagnement vise à libérer ces blocages à distance, via des protocoles spécifiques, pour rétablir une circulation fluide et harmonieuse de l’énergie vitale dans tout votre être.</p>
        
        <h3>Les bienfaits ressentis :</h3>
        <ul>
          <li><strong>Regain d'énergie :</strong> Dissipation de la fatigue chronique et sensation de vitalité retrouvée.</li>
          <li><strong>Apaisement mental :</strong> Diminution drastique du stress, de l'anxiété et de la rumination mentale.</li>
          <li><strong>Soulagement physique :</strong> Allègement des tensions corporelles liées aux blocages énergétiques.</li>
          <li><strong>Harmonie globale :</strong> Un profond sentiment de paix intérieure et d'alignement avec soi.</li>
        </ul>
      </div>

      <div class="section CTA-section">
        <h2>Besoin de rééquilibrer vos énergies ?</h2>
        <p>Ne laissez pas la fatigue ou le stress accumulé dicter votre quotidien. Contactez-nous pour planifier votre séance d'harmonisation énergétique personnalisée.</p>
        <a href="https://wa.me/1234567890?text=Bonjour,%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20séance%20d'harmonisation%20énergétique" class="cta-button primary" target="_blank" rel="noopener">Réserver mon rééquilibrage sur WhatsApp</a>
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
  content: "✨";
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
