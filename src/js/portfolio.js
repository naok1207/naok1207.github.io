const portfolios = [...document.getElementsByClassName('portfolio')];
const portfolioCards = [...document.getElementById('select-cards').children];

portfolioCards.forEach(function(card, index){
  card.addEventListener('click', function() {
    var activePortfolio = document.querySelector('.portfolio.show');
    portfolioHidden(activePortfolio);
    portfolioShow(portfolios[index]);
  })
})

function portfolioShow(portfolio) {
  console.log(portfolio);
  portfolio.classList.remove('hidden');
  portfolio.classList.add('show');
}

function portfolioHidden(portfolio) {
  portfolio.classList.remove('show');
  portfolio.classList.add('hidden');
}