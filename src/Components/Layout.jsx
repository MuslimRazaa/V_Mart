import React, { useEffect, useState } from 'react'
import Loader from './Loader';

export default function Layout(props) {

    const [loading, setIsLoading] = useState(true);

    useEffect(()=>{
 
        const timer = setTimeout(() => {
          
            setIsLoading(false);
          }, 4000);
      
          // Clear the timer on component unmount to avoid memory leaks
          return () => clearTimeout(timer);
    }, [])

  return (
    <div>
      {loading ? <Loader /> : props.children}
    </div>
  )
}
