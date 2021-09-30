const portfolios = [...document.getElementsByClassName('portfolio')];
const portfolioCards = [...document.getElementById('select-cards').children];

portfolioCards.forEach(function(card, index){
  card.addEventListener('click', function() {
    var activePortfolio = document.querySelector('.portfolio.show');
    portfolioHidden(activePortfolio);
    setTimeout(portfolioShow, 500, portfolios[index]);
  })
})

var portfolioShow = (portfolio) => {
  portfolio.classList.remove('hidden');
  portfolio.classList.add('show');
}

var portfolioHidden = (portfolio) => {
  portfolio.classList.remove('show');
  portfolio.classList.add('hidden');
}