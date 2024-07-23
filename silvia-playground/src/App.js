import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(response => setPosts(response.data)) // response로 가지고 온 데이터를 setPosts에 넣어줌
        .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
      <div>
        {posts.length}
        <ul>
          {posts.map(post => (
              <li key={post.id}> {post.title}</li>
          ))}
        </ul>
      </div>
  );
}

export default App;
