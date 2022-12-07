function clearAll(){
    const inputField = document.getElementById('input-field').value = "";
}

function display(value){
    document.getElementById('input-field').value += value;
}

function calculate(){
    var p = document.getElementById('input-field').value
    var q = eval(p)
    document.getElementById('input-field').value = q;
  
    
}