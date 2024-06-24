import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Github = () => {
    //useLoaderData is used to fetch data from API and return it in json format for use in components
    //when data is fetched, it is stored in data variable
    const data = useLoaderData();

    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Dervin29')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)})

    // },[])
  return (
    <div className='flex flex-col items-center p-5 text-center bg-gray-800'>
        <h3 className='text-3xl mb-4 text-white'>Github Followers: {data.followers}</h3>
        <img className='rounded-2xl' src={data.avatar_url} alt="git profile"/>
    </div>
  )
}

export default Github