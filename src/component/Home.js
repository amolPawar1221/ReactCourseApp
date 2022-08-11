import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = "Home || Learn With US"
    }, []);

    return ( 
        <div className='container-fluid text-sm-center p-5 bg-light'>
         <h1>Bootstrap Tutorial1</h1>      
         <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
        </div>
     );
}

export default Home;