function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let field = document.querySelector('input');

function retrieveEmployeeInformation() {
  const button = document.querySelector("input[type='submit']");
  button.addEventListener('click', function() {console.log(field)});
}
