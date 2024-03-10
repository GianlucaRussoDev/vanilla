// Array di frasi da scrivere
const textElement = document.querySelector('.text');

const texts = [
  "gianluca_russo//..",
  "web_dev..",
  "ui_ux",
  "pcb"
];

// Indice della riga attualmente in fase di scrittura
let lineIndex = 0;

// Indice del carattere attualmente in fase di scrittura nella riga corrente
let charIndex = 0;

// Funzione per l'animazione di scrittura
function typeWriter() {
  // Verifica se ci sono ancora frasi da scrivere
  if (lineIndex < texts.length) {
    // Ottieni la frase corrente
    const text = texts[lineIndex];
    // Verifica se la frase corrente non è vuota
    if (text !== "") {
      // Verifica se ci sono ancora caratteri da scrivere nella frase corrente
      if (charIndex < text.length) {
        // Crea un elemento span per ogni carattere e aggiungilo al testo
        const charElement = document.createElement('span');
        charElement.textContent = text.charAt(charIndex);
        textElement.appendChild(charElement);
        charIndex++;
        // Imposta un timeout per il prossimo carattere
        setTimeout(typeWriter, 100); // Regola la velocità di scrittura
      } else {
        // Aggiungi una riga vuota e passa alla prossima frase
        textElement.appendChild(document.createElement('br'));
        lineIndex++;
        charIndex = 0; // Resettare l'indice del carattere per la nuova riga
        // Imposta un timeout per la prossima frase
        setTimeout(typeWriter, 100); // Regola la velocità di scrittura
      }
    } else {
      // Se la frase è vuota, passa alla prossima frase
      lineIndex++;
      // Imposta un timeout per la prossima frase
      setTimeout(typeWriter, 0); // Passa immediatamente alla prossima frase
    }
  }
}

// Avvia l'animazione di scrittura
typeWriter();


document.addEventListener('DOMContentLoaded', function() {
  // Seleziona tutti gli input radio
  const radioInputs = document.querySelectorAll('input[type="radio"]');

  // Aggiungi un listener per l'evento change su ogni input radio
  radioInputs.forEach(input => {
    input.addEventListener('change', function() {
      // Ottieni l'ID dell'input radio selezionato
      const selectedId = this.id;

      // Ottieni l'indice dell'input radio selezionato
      const selectedIndex = selectedId.split('-')[1];

      // Trova la colorbox selezionata utilizzando l'indice
      const colorBox = document.getElementById(`colorbox${selectedIndex}`);

      // Ottieni il colore di sfondo della colorbox selezionata
      const backgroundColor = window.getComputedStyle(colorBox).backgroundColor;

      // Seleziona la progress-bar e la progress
      const progressBar = document.querySelector('.progress-bar');
      const progress = progressBar.querySelector('.progress');

      // Imposta il colore di sfondo della progress-bar e della progress
      progressBar.style.backgroundColor = backgroundColor;
      progress.style.backgroundColor = backgroundColor;
    });
  });
});
