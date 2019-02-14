function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const button = document.querySelector("input[type='submit']");
  let field = 'g';
  button.addEventListener('click', function() {console.log(field)});
}
