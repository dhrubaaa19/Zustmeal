function toggleFAQ(index) {
      var answers = document.querySelectorAll('.faq-answer');
      answers[index].style.display = answers[index].style.display === 'block' ? 'none' : 'block';
    }
    setTimeout(function() {
      document.getElementById('popup').style.display = 'block';
    }, 5000);
    function closePopup() {
      document.getElementById('popup').style.display = 'none';
    }