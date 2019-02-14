function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const button = document.querySelector("input[type='submit']");
  let field = document.querySelector("input[type='text']").innerHTML;
  button.addEventListener('click', function() {return field});
}

retrieveEmployeeInformation();
