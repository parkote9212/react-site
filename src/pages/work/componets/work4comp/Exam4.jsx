import React, { useEffect, useState } from 'react';

const Exam4 = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => res.json())
    .then((data) => setPosts(data));
    },[])



    
    return (
        <div>
            <h2>예제 4: API 호출</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Exam4;