// Gestion simple et accessible de la modale IA
document.addEventListener('DOMContentLoaded', () => {
  const iaModal = document.getElementById('iaModal');
  const modalContentDiv = document.getElementById('modalContent');
  const modalTitle = document.getElementById('modalTitle');
  const closeBtn = iaModal ? iaModal.querySelector('.close-btn') : null;

  if (!iaModal || !modalContentDiv) return; // rien à faire si éléments manquants

  // Initialise l'état accessible
  iaModal.setAttribute('aria-hidden', 'true');

  // Ouvre la modale et insère du contenu
  function openModal(title, htmlContent) {
    if (modalTitle) modalTitle.textContent = title || 'Configuration';
    modalContentDiv.innerHTML = htmlContent || '<p>Chargement...</p>';
    iaModal.style.display = 'block';
    iaModal.setAttribute('aria-modal', 'true');
    iaModal.setAttribute('role', 'dialog');
    iaModal.setAttribute('aria-hidden', 'false');
    // focus sur le contenu pour accessibilité
    modalContentDiv.tabIndex = -1;
    modalContentDiv.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    iaModal.style.display = 'none';
    iaModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Attacher aux boutons IA (ex : iaCentralButtonMarche, iaCentralButtonRisque, iaCentralButtonTCO)
  ['iaCentralButtonMarche', 'iaCentralButtonRisque', 'iaCentralButtonTCO'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('Configuration de l'Analyse', '<p>Paramètres de l'analyse…</p>');
      });
      btn.setAttribute('type', 'button'); // évite soumission accidentelle si dans un form
      btn.setAttribute('aria-haspopup', 'dialog');
    }
  });

  // Fermeture : bouton, clic en dehors, et touche Esc
  if (closeBtn) closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });
  iaModal.addEventListener('click', (e) => {
    if (e.target === iaModal) closeModal(); // clic sur le fond
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && iaModal.style.display === 'block') closeModal();
  });
});
