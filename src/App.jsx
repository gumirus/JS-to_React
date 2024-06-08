import React from "react";
import "./index.css";

// Features Component
const features = [
  "✅ Push to deploy",
  "✅ SSL certificates",
  "✅ Simple queues",
];

const Features = () => (
  <div className="features">
    <h1>App Features</h1>
    <ul>
      {features.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// About Component
const members = [
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "https://twitter.com/lindsay",
    linkedinUrl: "https://linkedin.com/lindsay",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "https://twitter.com/tom",
    linkedinUrl: "https://linkedin.com/tom",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "https://twitter.com/courtney",
    linkedinUrl: "https://linkedin.com/courtney",
  },
];

const Member = ({ member }) => (
  <div className="member">
    <img src={member.imageUrl} alt={member.name} />
    <h3>{member.name}</h3>
    <p>{member.role}</p>
  </div>
);

const About = () => (
  <div className="about">
    <header>
      <h1>Who we are</h1>
      <h2>Meet the team that makes this all possible</h2>
    </header>
    <div className="members">
      {members.map((member, index) => (
        <Member key={index} member={member} />
      ))}
    </div>
  </div>
);

// Footer Component
const links = [
  {
    text: "About",
    href: "/company/about",
  },
  {
    text: "Pricing",
    href: "/support/pricing",
  },
  {
    text: "Jobs",
    href: "/company/jobs",
  },
  {
    text: "Press",
    href: "/company/press",
  },
  {
    text: "Documentation",
    href: "/support/docs",
  },
];

const Link = ({ link }) => (
  <div>
    <a href={link.href}>{link.text}</a>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <section>
      <h4>Support</h4>
      <div>
        {links
          .filter((link) => link.href.includes("support"))
          .map((link, index) => (
            <Link key={index} link={link} />
          ))}
      </div>
    </section>
    <section>
      <h4>Company</h4>
      <div>
        {links
          .filter((link) => link.href.includes("company"))
          .map((link, index) => (
            <Link key={index} link={link} />
          ))}
      </div>
    </section>
  </footer>
);

// TodoList Component
const todos = [
  {
    done: false,
    text: "Wash dishes",
  },
  {
    done: true,
    text: "Pick up laundry",
  },
  {
    done: true,
    text: "Feed dog",
  },
];

const TodoItem = ({ todo }) => (
  <li>
    {todo.done ? "✅" : "❌"} {todo.text}
  </li>
);

const TodoList = () => (
  <div className="todo-list">
    <h1>What I did today</h1>
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  </div>
);

// Recipes Component
const recipes = [
  {
    isVegetarian: true,
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    isVegetarian: false,
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    isVegetarian: true,
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

const Recipe = ({ recipe }) => (
  <div className="recipe">
    <h3>{recipe.name}</h3>
    <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  </div>
);

const Recipes = () => (
  <div className="recipes">
    <h1>Vegetarian Recipes</h1>
    {recipes
      .filter((recipe) => recipe.isVegetarian)
      .map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
  </div>
);

// Video Component
const VideoComponent = () => {
  const videoSrc =
    "https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4";

  return (
    <div className="video-component">
      <h1>Видео с кроликом</h1>
      <video src={videoSrc} controls></video>
      <br />
      <button className="like-button">Like 👍</button>
      <button className="dislike-button">Dislike 👎</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Features />
      <About />
      <Footer />
      <div className="main-content">
        <TodoList />
        <Recipes />
      </div>
      <VideoComponent />
    </div>
  );
}

export default App;
