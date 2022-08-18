import UserAccountItem from "../../components/UserAccountItem/UserAccountItem";
import { UserAccountItemArray } from "../../datas/UserAccountItemArray";

const User = () => {
  return (
    <main className="main main-user bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Stark !
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {UserAccountItemArray.map((account, index) => (
        <UserAccountItem key={index} {...account} />
      ))}
    </main>
  );
};

export default User;
