// Contagem regressiva
    let seconds = 5;
    const countdownElement = document.getElementById('countdown');
    
    const countdownInterval = setInterval(() => {
      seconds--;
      countdownElement.textContent = seconds;
      
      if (seconds <= 0) {
        clearInterval(countdownInterval);
        window.location.href = 'https://itransfer.com.br';
      }
    }, 1000);

    // Redirecionamento após 5 segundos (como backup caso a contagem falhe)
    setTimeout(() => {
      window.location.href = 'https://itransfer.com.br';
    }, 5000);