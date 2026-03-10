<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Guidance Personnalisée - Accompagnement Spirituel',
  meta: [
    { name: 'description', content: 'Trouvez des réponses claires à vos questions profondes avec notre service de guidance personnalisée. Consultation directe via WhatsApp.' },
  ]
})
</script>

<template>
  <div class="service-detail">
    <div class="content">
      <h1>Guidance Personnalisée</h1>
      <p class="lead">Un accompagnement sur-mesure pour vous aider à traverser les périodes de doutes et de remise en question.</p>
      
      <div class="section">
        <h2>Une approche adaptée à vos besoins</h2>
        <p>Notre service de guidance personnalisée repose sur une écoute active et bienveillante pour comprendre vos défis actuels. En utilisant différentes méthodes intuitives et outils de développement personnel, nous clarifions ensemble les situations complexes que vous traversez.</p>
        <p>Cette approche permet d'identifier les schémas répétitifs, de comprendre les blocages émotionnels et de mettre en lumière les opportunités de croissance cachées derrière chaque difficulté.</p>
        
        <h3>Ce que vous apporte une séance :</h3>
        <ul>
          <li><strong>Clarté mentale :</strong> Démêlez vos pensées et prenez des décisions éclairées avec moins d'hésitation.</li>
          <li><strong>Soutien émotionnel :</strong> Un espace sécurisant pour exprimer vos doutes et vos vulnérabilités sans jugement.</li>
          <li><strong>Orientations pratiques :</strong> Des conseils concrets et des actions simples à mettre en œuvre dans votre quotidien.</li>
          <li><strong>Confiance renouvelée :</strong> Retrouvez la foi en vos capacités et en votre cheminement personnel.</li>
        </ul>
      </div>

      <div class="section CTA-section">
        <h2>Prêt à trouver des réponses ?</h2>
        <p>Ne laissez pas l'incertitude vous ralentir. Réservez votre séance de guidance personnalisée dès aujourd'hui directement sur WhatsApp et commencez à avancer avec assurance.</p>
        <a href="https://wa.me/1234567890?text=Bonjour,%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20guidance%20personnalisée" class="cta-button primary" target="_blank" rel="noopener">Réserver ma séance sur WhatsApp</a>
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
  content: "✓";
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
