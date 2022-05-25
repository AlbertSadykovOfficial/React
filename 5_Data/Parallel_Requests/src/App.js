import React, { useState } from "react";
import { Fetch } from "./Fetch";
import { UserRepositories } from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";
import SearchForm from "./SearchForm";

function UserDetails({ data }) {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}
function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}

export default function App() {
  const [login, setLogin] = useState("AlbertSadykovOfficial");
  const [repo, setRepo] = useState("AlbertSadykovOfficial");
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      {login && <GitHubUser login={login} />}
      <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      {login && repo && <RepositoryReadme login={login} repo={repo} />}
    </>
  );
}
