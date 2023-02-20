import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SinglePortfolio from './SinglePortfolio';

const Portfolio = () => {
   

    const [portfolios,setPortfolios] = useState([]);
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const url = "https://portfolio-server-hs1y.onrender.com/api/project"

    
    const fetchData = async (url) => {
        setIsLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          setPortfolios(data);
          setIsLoading(false);
          setError(null);
        } catch (error) {
          setIsLoading(false);
          setError(error);
        }
      };
    
      useEffect(() => {
        fetchData(url);
      }, []);

   
    // useEffect( ()=>{
    //     fetch('')
    //     .then(res => res.json())
    //     .then(data =>setPortfolios(data));
    // }, [])
    // console.log(portfolios)
  

  return (
    <div className='bg-[#1D1D1D] py-20'>
             <div className="service text-center mb-20">
        <h2 className=' servicing-heading text-3xl md:p-7 text-gray-300'>My  Portfolios</h2>
        </div>

        {isLoading && <h2 className='text-white my-10 text-center'>Loading...</h2>}
      {error && <h2>{error.message}</h2>}

        <div className="max-w-7xl px-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto gap-6">



                {
                    
                 portfolios.map(portfolio=> <SinglePortfolio key={portfolio._id} portfolio={portfolio}></SinglePortfolio>) 
                     
                }

    
            </div>
            
        </div>


    </div>
  )
}

export default Portfolio