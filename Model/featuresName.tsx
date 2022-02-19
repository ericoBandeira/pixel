  function featuresName(name: string) {
    switch(name) {
      case 'visibility':
        return 'Visibilidade';
      case 'match':
        return 'Correspondência';
      case 'control':
        return 'Controle';
      case 'consistence':
        return 'Consistência';
      case 'recognition':
        return 'Reconhecimento';
      case 'error_prevention':
        return 'Prevenção de erros';
      case 'efficiency':
        return 'Eficiência de uso';
      default:
        return 'Minimalismo';
    }
  }

  export default featuresName