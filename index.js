function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const button = document.querySelector("input[type='submit']");
  const field = document.querySelector("input[type='text']").value;
  button.addEventListener('click', function() {return field});
}

retrieveEmployeeInformation();
