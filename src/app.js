"use strict";

import React, { PureComponent } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import "./css/style.css";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: "/",
                  state: { id: "home" },
                  search: "?name=daciuk"
                }}
                exact
              >
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink activeClassName="active-link" to="/sobre">
                Sobre
              </NavLink>
            </li> */}
            <li>
              <Route path="/sobre">{() => <a href="/sobre">Sobre</a>}</Route>
            </li>
            <li>
              <NavLink activeStyle={{ color: "red" }} to="contato">
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <a href="#informações-do-site">Informações do site</a>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/(sobre|contato)" component={Page} />
            <Route path="/blog" component={Blog} />
            <Route component={Error404} />
          </Switch>

          <div id="informações-do-site" style={{ margin: "1000px 0" }}>
            <h2>Informações do site</h2>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const Error404 = () => <h1>Página não econtrada</h1>;

const Home = () => <h1>Home</h1>;

const Page = ({ match }) => <h1>{match.url}</h1>;

const numberOfPosts = 2;

const Blog = () => (
  <div>
    <h1>Blog</h1>

    <ul>
      <li>
        <NavLink to="/blog/post-1">Post 1</NavLink>
      </li>
      <li>
        <NavLink to="/blog/post-2">Post 2</NavLink>
      </li>
    </ul>

    <Switch>
      <Route
        exact
        path="/blog"
        render={() => <NoPosts numberOfPosts={numberOfPosts} />}
      />
      <Route path="/blog/:post(post-[12])" component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
);

const Post404 = () => <h1>Esse post não existe</h1>;

const Post = ({ match }) => (
  <div>
    <h2>Post: {match.params.post}</h2>
  </div>
);

const NoPosts = ({ numberOfPosts }) => (
  <p>Selecione um dos {numberOfPosts} post</p>
);

export default App;
