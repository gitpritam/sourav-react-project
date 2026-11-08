import Navbar from "../../components/shared/navbar/Navbar";
import UserCard from "../../components/shared/userCard/UserCard";
import USER_CONSTANTS from "../../constants/user.constants";

const HomePage = () => {
  //useState hook to manage the state of the users

  return (
    <div>
      <Navbar />
      <h1>Welcome to the Home Page</h1>
      <div>
        {USER_CONSTANTS.map((user, index) => {
          return <UserCard key={index} name={user.name} email={user.email} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
