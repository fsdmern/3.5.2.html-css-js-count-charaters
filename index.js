function charCount(input) {
  let charCount = input.value.length;
  document.getElementById('char-count').innerHTML = charCount;
  let remainCount = 200 - input.value.length;
  document.getElementById('remain-count').innerHTML = remainCount;

  //Make the count red color when char count exceeded the limit
  if (remainCount < 0) {
    document.getElementById('remain-count').style.color = 'red';
  } else {
    document.getElementById('remain-count').style.color = 'black';
  }
  
}

document.querySelector('textarea').setSelectionRange(0, 0);
