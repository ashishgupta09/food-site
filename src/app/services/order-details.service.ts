import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

foodDetails =[
  {
    id:1,
    foodName:"Margherita Pizza",
    foodDetails:"Pizza margherita, as the Italians call it, is a simple pizza hailing from Naples. When done right, margherita pizza features a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt.",
    foodPrice:150,
    foodImg:"./assets/img/margherita-pizza.jpg"
  },
  {
    id:2,
    foodName:"Black Current Ice Cream",
    foodDetails:"Refreshing Black Currant Ice Cream is an amazing delight not only in summers, but for anytime whenever you feel low.",
    foodPrice:125,
    foodImg:"./assets/img/Black-Currant-IC-1.jpg",
  },
  {
    id:3,
    foodName:"Pav Bhaji",
    foodDetails:"Pav bhaji is a popular Mumbai street food made of a spicy mashed vegetable curry served topped with a dollop of butter along with soft butter-toasted dinner rolls, crunchy onions, and lemon.",
    foodPrice:100,
    foodImg:"./assets/img/pav bhaji.jpg",
  },
  {
    id:4,
    foodName:"Speghetti Pasta",
    foodDetails:"Spaghetti Recipe In Creamy Tomato Sauce is a delicious recipe for the kids where the pasta is made saucy with Del Monte Spaghetti Pasta. The pasta is packed with flavors from the tomato basil sauce, garlic and basil, making it refreshing.",
    foodPrice:140,
    foodImg:"./assets/img/delish-creamy-spaghetti.jpg",
  },
  {
    id:5,
    foodName:"Cheese Burger",
    foodDetails:"A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.",
    foodPrice:110,
    foodImg:"./assets/img/cheeseburgers.webp",
  },
  {
    id:6,
    foodName:"Mysore Dosa",
    foodDetails:"Mysore masala dosa is crisp and soft dosa spiced with red chutney and served with a potato dish, along with coconut chutney.",
    foodPrice:120,
    foodImg:"./assets/img/Mysoor-Dosa.jpg",
  },
]

}
