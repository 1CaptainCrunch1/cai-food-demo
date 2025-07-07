
const dishes = [
  {
    name: 'Xôi Chiên',
    eng: 'Crispy Sticky Rice Cake',
    price: '.99',
    img: 'assets/dish-1.jpg'
  },
  {
    name: 'Bánh Gối',
    eng: 'Savory Hand Pie',
    price: '.49',
    img: 'assets/dish-2.jpg'
  },
  {
    name: 'Xôi Mặn',
    eng: 'Sticky Rice Bowl',
    price: '.99',
    img: 'assets/dish-3.jpg'
  },
  {
    name: 'Chả Giò',
    eng: 'Spring Rolls (2pc)',
    price: '.49',
    img: 'assets/dish-4.jpg'
  },
  {
    name: 'Bò Lá Lốt',
    eng: 'Beef in Betel Leaf',
    price: '.99',
    img: 'assets/dish-5.jpg'
  },
  {
    name: 'Giò Heo Chiên',
    eng: 'Crispy Pork Hock',
    price: '.99',
    img: 'assets/dish-6.jpg'
  }
];

const grid = document.getElementById('menuGrid');
dishes.forEach(dish => {
  const card = document.createElement('div');
  card.className = 'menu-card';
  card.innerHTML = 
    <img src='' alt=''>
    <h3></h3>
    <p></p>
    <span></span>
  ;
  grid.appendChild(card);
});

function saveEmail(e) {
  e.preventDefault();
  const email = document.getElementById('emailSignup').value;
  localStorage.setItem(
ewsletter_, email);
  alert('Thanks for signing up!');
  document.getElementById('emailSignup').value = '';
}

