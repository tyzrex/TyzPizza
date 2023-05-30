import useAuthStore from "../../store/store";

const Home = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.name}</h1>
          <h2>Your email is {user.email}</h2>
        </div>
      ) : (
        <h1>Welcome</h1>
      )}
    </div>
  );
};

export default Home;
