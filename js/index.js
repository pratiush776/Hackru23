quiz_btn=document.getElementById("makeAQuiz");
quiz_btn.addEventListner("click", function(){
    var url = "/pages/question.html"; // Replace with your desired URL

  // Open the URL in a new tab or window
  window.open(url, "_blank");
});
