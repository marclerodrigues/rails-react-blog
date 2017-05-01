import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from '../configureStore';
import PostList from './PostList';
import FullPost from './FullPost';
import Navbar from '../components/Navbar';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div>
            <Route path="/" component={ Navbar } />
            <Route exact={true} path="/" component={ PostList } />
            <Route path="/:id" component= { FullPost } />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};
