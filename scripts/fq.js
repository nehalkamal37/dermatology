
function toggleFAQ(id) {
    var faqBody = document.getElementById(id);
    var allFAQs = document.querySelectorAll('.faq-body');
    var allArrows = document.querySelectorAll('.faq-arrow');
    
    allFAQs.forEach(function(faq) {
        if (faq.id !== id) {
            faq.style.display = 'none';
        }
    });
    
    allArrows.forEach(function(arrow) {
        arrow.innerHTML = '&#9662;';
    });
    
    if (faqBody.style.display === 'none' || faqBody.style.display === '') {
        faqBody.style.display = 'block';
        document.querySelector("#" + id).previousElementSibling.querySelector(".faq-arrow").innerHTML = '&#9652;';
    } else {
        faqBody.style.display = 'none';
    }
}




function toggleFAQ(id) {
    var faqBody = document.getElementById(id);
    var allFAQs = document.querySelectorAll('.faq-body');
    var allHeaders = document.querySelectorAll('.faq-item');
    
    allFAQs.forEach(function(faq) {
        if (faq.id !== id) {
            faq.style.display = 'none';
        }
    });
    
    allHeaders.forEach(function(header) {
        header.classList.remove('open');
    });
    
    if (faqBody.style.display === 'none' || faqBody.style.display === '') {
        faqBody.style.display = 'block';
        faqBody.parentElement.classList.add('open');
    } else {
        faqBody.style.display = 'none';
    }
}



function toggleFAQ(id) {
    var faqBody = document.getElementById(id);
    var allFAQs = document.querySelectorAll('.faq-body');
    var allHeaders = document.querySelectorAll('.faq-item');
    
    allFAQs.forEach(function(faq) {
        if (faq.id !== id) {
            faq.style.display = 'none';
        }
    });
    
    allHeaders.forEach(function(header) {
        header.classList.remove('open');
    });
    
    if (faqBody.style.display === 'none' || faqBody.style.display === '') {
        faqBody.style.display = 'block';
        faqBody.parentElement.classList.add('open');
    } else {
        faqBody.style.display = 'none';
    }
}