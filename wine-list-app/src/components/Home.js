import React from 'react'

 const Home = () => {
  return <div className='background-home'>
        <div class="ui-widget">
            <label for="recipe">Recipe:</label><br />
            <input id="recipe"></input>
            <ul id="ingredients"></ul>
        </div>
    </div>;
  
};

export default Home;
