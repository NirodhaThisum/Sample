import React from 'react';

const Home = () => {
    return ( <>
        <h1>This is the first line</h1>
        <p>First paragaraph</p>
        <form>
            <label for="name">Enter your name</label>
            <input type="text" placeholder='Enter yor name' id="name"></input>
        </form>
    </> );
}
 
export default Home;