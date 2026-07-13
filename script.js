
document.querySelectorAll('.faq').forEach(x=>x.addEventListener('click',()=>x.classList.toggle('open')));
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.links')?.classList.toggle('mobile-open'));
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Thank you! Your enquiry has been submitted.');}));
