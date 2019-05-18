"use strict";

import React, { PureComponent } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import "./css/style.css";
import { Li } from "glamorous";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/sobre">
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: "red" }} to="contato">
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/(sobre|contato)" component={Page} />
            <Route path="/blog" component={Blog} />
            <Route component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const Error404 = () => <h1>Página não econtrada</h1>;

const Home = () => <h1>Home</h1>;

const Page = ({ match }) => <h1>{match.url}</h1>;

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
      <Route exact path="/blog" component={NoPosts} />
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

const NoPosts = () => <p>Selecione um post</p>;

export default App;
