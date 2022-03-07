import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <React.Fragment>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <React.Fragment>
              <Profile />
              <Repositories />
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
