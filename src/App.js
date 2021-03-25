import { Center } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Card from "./components/card";
import EditCard from "./components/EditCard";
import "./index.css";
import { fetchPosts } from "./store/userReducer";
import CreateCard from "./components/createCard";

function App() {
  const dispatch = useDispatch();

  let allUsers = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Center>
        <h1>User Loading </h1>
      </Center>

      <Switch>
        <Route exact path="/">
          <Card allUsers={allUsers} />
        </Route>
        <Route path="/users/:id">
          <EditCard allUsers={allUsers} />
        </Route>
        <Route path="/add">
          <CreateCard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
