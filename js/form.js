// Mostrar/ocultar seção do cônjuge conforme estado civil
    const estadoCivilSelect = document.getElementById('estado_civil');
    const conjugeSection = document.getElementById('conjuge-section');
    const nomeConjugeGroup = document.getElementById('nome-conjuge-group');
    const cpfConjugeGroup = document.getElementById('cpf-conjuge-group');

    estadoCivilSelect.addEventListener('change', function() {
      const selectedValue = this.value;
      
      if (selectedValue === 'Casado(a)') {
        conjugeSection.style.display = 'block';
        nomeConjugeGroup.style.display = 'block';
        cpfConjugeGroup.style.display = 'block';
      } else {
        conjugeSection.style.display = 'none';
        nomeConjugeGroup.style.display = 'none';
        cpfConjugeGroup.style.display = 'none';
      }
    });

    // Máscaras para campos
    document.getElementById('cpf').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      e.target.value = value;
    });

    document.getElementById('cpf_conjuge').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      e.target.value = value;
    });

    document.getElementById('celular').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
      value = value.replace(/(\d)(\d{4})$/, '$1-$2');
      e.target.value = value;
    });

    document.getElementById('cep').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');
      e.target.value = value;
    });

    document.getElementById('valor_carta').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = (value/100).toFixed(2) + '';
      value = value.replace(".", ",");
      value = value.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
      value = value.replace(/(\d)(\d{3}),/g, "$1.$2,");
      e.target.value = 'R$ ' + value;
    });

    document.getElementById('renda').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = (value/100).toFixed(2) + '';
      value = value.replace(".", ",");
      value = value.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
      value = value.replace(/(\d)(\d{3}),/g, "$1.$2,");
      e.target.value = 'R$ ' + value;
    });

    // Validação em tempo real
    document.querySelectorAll('input[required]').forEach(input => {
      input.addEventListener('blur', function() {
        this.classList.toggle('invalid', !this.checkValidity());
      });
    });