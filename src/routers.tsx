import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "pages/auth";
import Home from "pages/home";
import NavBar from "pages/navbar";
import Profile from "pages/profile";
import FavoriteRepos from "pages/favoriteRepo";
import { SignUp, Login } from "pages/signUp";
import SearchBar from "pages/searchBar";
import useAuth from "hooks/use-auth";
import useGithubUser from "hooks/use-github-user";
import "./index.css";

export function Routers() {
  const { username, error, createUser, login, logOut } = useAuth();
  const { user, loading, errorMessage, repoSearch, searchRepo } = useGithubUser(username);

  return username ? (
    <Router basename="/">
      <Routes>
        <Route path="/profile" element={<Profile user={user} error={errorMessage} logOut={logOut} NavBar={<NavBar />} />}></Route>
        <Route path="/favorite-repos" element={<FavoriteRepos error={errorMessage} NavBar={<NavBar />} />}></Route>
        <Route path="/" element={
          <Home
          username={username}
          error={errorMessage}
          loading={loading}
          repositories={user.repositories.nodes}
          query={repoSearch.query}
          repos={repoSearch.repos}
          NavBar={<NavBar SearchBar={<SearchBar searchRepo={searchRepo} />} />}
          />
        }></Route>
      </Routes>
    </Router>
  ) : (
    <Router basename="/">
      <Routes>
        <Route path="/signup" element={<Auth AuthForm={<SignUp createUser={createUser} />} error={error} />}></Route>
        <Route path="/" element={<Auth AuthForm={<Login login={login} />} error={error} />}></Route>
      </Routes>
    </Router>
  );
}