function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
$(document).ready(function () {
  //your code here

  function retrieveEmployeeInformation() {
    const button = $("input:text");
    console.log(button);
  }

  retrieveEmployeeInformation();
});
