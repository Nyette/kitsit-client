import { useAuth0 } from "@auth0/auth0-react";
import LogOut from "./LogOut";

const Dashboard = () => {
  const { user } = useAuth0();

  return (
    <main className="container text-center">
      <h1>Dashboard</h1>
      <p>Hi, {user.name}.</p>
      <LogOut />
    </main>
  );
};

export default Dashboard;
