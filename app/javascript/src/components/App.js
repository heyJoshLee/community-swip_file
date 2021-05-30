import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Posts from './Posts/Posts'
import Post from './Posts/Post'
import NewPost from './Posts/New'
 
const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/new" component={NewPost} />
        <Route exact path="/posts/:slug" component={Post} />
      </Switch>
    </div>

  )
}
 
export default App