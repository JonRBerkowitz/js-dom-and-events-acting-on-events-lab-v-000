function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  let field = document.querySelector('input');
  return field.value;
}

function addNewElementAsLi() {
  let originalList = document.querySelector('ul');
  return originalList.innerHTML += '<li>${retrieveEmployeeInformation()}</li>';
}

function addNewLiOnClick() {
  const button = document.querySelector("input[type='submit']");
  button.addEventListener('click', function(e){
    addNewElementAsLi();
    resetInput();
  });
}

function resetInput(){
  document.querySelector('input').value = ''
}
