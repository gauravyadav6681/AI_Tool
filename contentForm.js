function submitForm(){

    var classv = document.getElementById("class-select").value;
    var subject = document.getElementById("subject-select").value;
    var topic = document.getElementById("topic-select").value;
    var qno = document.getElementById("qno-select").value;

    var url;

    alert(classv+subject+topic+qno);

    if(subject == "science" || subject == "english"){
         url = `https://final-year-project-git-main-suvansh7s-projects.vercel.app/se?grade=${classv}&subject=${subject}&topic=${topic}&qno=${qno}`;

    }
    else if(subject == "computer" || subject == "maths"){
         url = `https://final-year-project-git-main-suvansh7s-projects.vercel.app/cm?grade=${classv}&subject=${subject}&topic=${topic}&qno=${qno}`;

    }
    else if(subject == "physics" || subject == "chemistry"){
         url = `https://final-year-project-git-main-suvansh7s-projects.vercel.app/pc?grade=${classv}&subject=${subject}&topic=${topic}&qno=${qno}`;

    }

    // Make the AJAX GET request using jQuery
    $.ajax({
        url: url,
        method: 'GET',
        'Content-Type': 'application/json',
        mode: 'cors',
        "timeout": 0,
        success: function(data) {
            console.log('Success:', data);
            // Handle the success response (e.g., show a message to the user)
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
            // Handle the error (e.g., show an error message to the user)
        }
    });




}