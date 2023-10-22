// import "./App.css";
import "./index.css";
import React from "react";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header footer">
      <h1>Fast React Pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            magnam, reprehenderit blanditiis inventore earum error nihil
            consequuntur maxime suscipit quos!
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're Still working on manu</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // {photoName, ingredients, price = pizzaData;
  console.log(pizzaObj);
  return (
    <fragment>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt="spinach" />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span> {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} </span>
          {/* <p>Tomato, mozarella, spinach, and ricotta cheese</p> */}
        </div>
      </li>
    </fragment>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 13;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {" "}
      {isOpen ? (
        <Orders closeHours={closeHour} openHours={openHour} />
      ) : (
        <p>Sorry We're Closed at {closeHour}</p>
      )}
    </footer>
  );
}

function Orders({ closeHours, openHours }) {
  // console.log(closeHours);
  return (
    <div className="order">
      <p>
        We currently open until {closeHours}, to {openHours}
      </p>
      <button className="btn">Order now</button>{" "}
    </div>
  );
}
export default App;
