function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    var input = document.getElementById('result').value;
    try {
      var result = eval(input);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  