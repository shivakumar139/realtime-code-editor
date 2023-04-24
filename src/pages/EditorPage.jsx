import React, { useState } from 'react'
import logo from "../assets/images/logo.svg";
import Client from '../components/Client';
import Editor from '../components/Editor';

export const EditorPage = () => {

  const[clients, setClients] = useState([
    {socketId: 1, username: "Shiva Kumar"},
    {socketId: 2, username: "Shyam Kumar"},
    {socketId: 3, username: "Shiva Kumar"},
    {socketId: 4, username: "Shyam Kumar"},
    
  ])


  return (
    <div className="grid grid-cols-5 w-screen h-screen">

      <div className='col-span-1 p-4 flex flex-col bg-[#282C34] text-white'>

        <div className="grow">
              <div className="flex flex-row content-center border-b-2 pb-2">
                  <img src={logo} alt="logo" className='object-cover h-14'/>
                  <h1 className='h1 self-center ml-4 text-lg font-bold font-xl'>Code Editor</h1>
              </div>

              <h3 className='h3 font-bold my-3'>Connected</h3>


            <div className="flex flex-wrap grow">
              {
                clients.map(client =>(
                  <Client key={client.socketId} username={client.username}/>
                ))
              } 
            </div>

        </div>

        <div className='flex flex-col gap-2 place-content-end mt-4 '>
              <button className="bg-gray-200 hover:bg-gray-400 font-bold py-2 px-4 rounded text-black">Copy Room Id</button>
              <button className="bg-purple-900 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">Leave</button>
          </div>
        


        

      </div>




      {/* Text Editor */}
      <div className='col-span-4'>
        <Editor/>
      </div>

    </div>
  )
}
