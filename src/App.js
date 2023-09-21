import { useEffect, useState } from "react";
import Card from "./card/Card";
import Header from "./card/Header";

function App() {
  const [user, setUser] = useState("");
  const handleSubmit = () => {
    const url = "https://randomuser.me/api/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="container">
      <Header user={user} />
      <Card {...user} />
    </div>
  );
}

export default App;
