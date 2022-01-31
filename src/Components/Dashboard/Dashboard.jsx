import { useAuth } from '../../Context/AuthContext';
export default function Dashboard() {
  const {logout} = useAuth()

  return (
    <div className="dashboard">
        <h2>Dashboard</h2>
        <button onClick={e=>logout()}>Log out</button>
    </div>
  );

}
