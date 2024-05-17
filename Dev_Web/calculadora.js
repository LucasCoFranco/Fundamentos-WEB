// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Função para adicionar um valor ao display
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Função para calcular a expressão no display
  function calculate() {
    var expression = document.getElementById('display').value;
    try {
      var result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  