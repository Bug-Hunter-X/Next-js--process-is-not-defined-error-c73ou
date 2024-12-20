```javascript
// pages/aboutSolution.js

export async function getServerSideProps() {
  const myVariable = process.env.MY_VARIABLE || 'Default Value';
  return {
    props: {
      myVariable: myVariable,
    },
  };
}

export default function About({ myVariable }) {
  console.log(myVariable); // Access the value safely
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. My Variable is: {myVariable}</p>
    </div>
  );
}
```