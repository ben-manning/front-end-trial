import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
      updatePosts(response.data);
    };

    getPosts();
  }, []);
  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}

export default App;
