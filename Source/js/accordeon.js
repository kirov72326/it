// var faq = document.getElementsByClassName('faq__answer');
//
// for (var i = 0; i < faq.length; i++) {
//       faq[i].addEventListener('click', function() {
//         if (!(this.classList.contains('faq__answer--show'))) {
//           for (var i = 0; i < faq.length; i++) {
//             // faq[i].classList.remove('faq__answer--show');
//           }
//           this.classList.add('faq__answer--show');
//         }
//
//         else {
//           this.classList.remove('faq__answer--show');
//         }
//       })
// }
var question = document.getElementsByClassName('faq__question');


    for (var i = 0; i < question.length; i++) {
      question[i].addEventListener('click', function() {
        if (!(this.classList.contains('faq__answer--show'))) {
          for (var i = 0; i < question.length; i++) {
            question[i].classList.remove('faq__answer--show');
          }
            this.classList.add('faq__answer--show');
        }

        else {
               this.classList.remove('faq__answer--show');
             }
      })
}
