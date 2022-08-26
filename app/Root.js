import Axios from 'axios'
import React from "react";
import AllCandies from './components/allCandies'

const Root = () => {

  const [candies, setCandies] = React.useState([])

  React.useEffect(() => {
    async function getCandies() {
      try{
        const {data} = await Axios.get('/api/candies');
        setCandies(data);
      }
      catch(err) {
        console.error(err)
      }
    }
    getCandies();},
    [])

  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <AllCandies props={candies}/>
      </main>
    </div>
  );
};

export default Root;
