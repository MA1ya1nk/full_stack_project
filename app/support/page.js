"use client"
import { useEffect,useState } from 'react'
import React from 'react'
import { getUser } from '@/actions/useractions'


const page = () => {
    const [Name, setName] = useState([])
    const func=async ()=>{
      const val=await getUser()
      //const data = await val.json();

      // Extract only usernames
      const names = val.map(user => user.username);
      setName(names);
      console.log(names)
    }
    useEffect(() => {
          func()
    }, [])
    
  return (
    <>

    <div className="max-w-8xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-white">Supporters</h2>
      
      <div className="grid grid-cols-1 gap-6">
         {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div> */}
        {Name.map((name, index) => (
          <a
            key={index}
            href={`/${name}`}
            className="bg-slate-800 border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-lg transition duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <div className="w-6 h-6 text-gray-500 group-hover:text-blue-600" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700 group-hover:text-blue-600">
                  @{name}
                </p>
                <p className="text-sm text-gray-400">View profile</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
      </>
  )
}

export default page