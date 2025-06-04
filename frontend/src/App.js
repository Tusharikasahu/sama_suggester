import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth?.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe && unsubscribe();
  }, []);

  return (
    <div>
      {user ? <Dashboard user={user} /> : <Login />}
    </div>
  );
}

export default App;

