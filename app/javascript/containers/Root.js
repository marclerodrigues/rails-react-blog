import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from '../configureStore';
import PostList from './PostList';
import FullPost from './FullPost';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={ PostList } />
            <Route path="/:id" component= { FullPost } />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};
