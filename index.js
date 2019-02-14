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
  console.log(originalList);
}
