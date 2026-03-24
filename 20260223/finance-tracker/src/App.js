import { useEffect, useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://backend:5000/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      {transactions.map(t => (
        <p key={t.id}>{t.description} - ₹{t.amount}</p>
      ))}
    </div>
  );
}

export default App;