import { useState, useEffect } from 'react';

export default function App() {
  console.log('App Rendered');
  // const [resourceType, setResourceType] = useState('posts'); // Wrong Way
  const [resourceType, setResourceType] = useState(() => 'posts'); // Right Way

  const [data, setData] = useState(() => []);

  const requestURI = `https://jsonplaceholder.typicode.com/${resourceType}`;

  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
    return () => {
      console.log('useEffect CleanUp');
    };
  }, [resourceType, requestURI]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <ul>
        {data.map((item, idx) => {
          return <li key={idx}>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </>
  );
}
