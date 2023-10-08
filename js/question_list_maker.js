fetch("/json/computer.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    };
    return response.json();
  })
  .then(data => {
    const questions=data.easy;
    const generate_btn=document.getElementById("generate-btn");
    generate_btn.addEventListener("click", function(){
        var ques_to_generate=document.getElementById("no-of-ques");
        generate_questions(ques_to_generate.value);
    })
    function generate_questions(number){
        for (let i = 0; i < number; i++) {
            const currentquestion = questions[i];
            console.log(currentquestion);
    
            var divElement = document.createElement("div");
            divElement.className = "question_item";

            var paragraphElement = document.createElement("p");
            paragraphElement.textContent = currentquestion.question;
            paragraphElement.className="question_title";

            var unorderedListElement = document.createElement("ul");
            for (var j = 0; j < 4; j++) {
                var listItemElement = document.createElement("li");
                listItemElement.textContent = currentquestion.answers[j].text;
                unorderedListElement.appendChild(listItemElement);
                listItemElement.className="option";
            }

            divElement.appendChild(paragraphElement);
            divElement.appendChild(unorderedListElement);

            document.body.appendChild(divElement);
          }
    }
})
.catch(error => {
  // Handle any errors here
  console.error(error);
});
