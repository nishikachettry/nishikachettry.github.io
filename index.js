var card = document.querySelector('.flip-card-inner');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

function logoHover(){
	document.getElementById("logo").style.width="17%";
	document.getElementById("logo").style.height="6%";
}

function logoNormal(){
	document.getElementById("logo").style.width="15%";
	document.getElementById("logo").style.height="5%";
}