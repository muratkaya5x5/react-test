import { useEffect } from "react";
import { useState } from "react";

export default function TestYasamDongusu() {
  const [postId, setPostId] = useState(1);
	const [post, setPost] = useState(false);
  useEffect(() => {
    console.log("Component mounted-İlk yüklendiğinde çalışır");
		let interval = setInterval(() => {console.log("interval çalıştı")},1000);
    return () => {
      console.log("Component destroyed");
			clearInterval(interval);
    };
  }, []);

  //bir değeri dinleme
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then(res => res.json())
		.then(data => setPost(data));
  }, [postId]);

  /*
  useEffect(() => {
    console.log("Component rendered");
  })
  */

  return (
    <div>
      <h3>{postId}</h3>
			{post&&JSON.stringify(post)}
      <button onClick={() => setPostId((postId) => postId + 1)}>Arttır</button>
      <hr />
      Test Componenet
    </div>
  );
}
