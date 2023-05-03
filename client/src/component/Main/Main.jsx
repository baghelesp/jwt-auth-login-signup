import React from "react";
import { UilBookReader,UilLocationPinAlt,UilDesktop} from '@iconscout/react-unicons'

// <h1>fakebook</h1>
//         <button onClick={handleLogout}>
//             Logout
//         </button>

function Main({user}) {
    const name=localStorage.getItem("userData")
    const handleLogout=()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }
  return (
    <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover " 
    style={{ 
        backgroundImage: `url("https://source.unsplash.com/1L71sPT5XKc")` 
      }}>



    <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto  lg:my-0">
      
      <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
      
  
          <div class="p-4  text-center lg:text-left">
              
              
              <h1 class="text-3xl font-bold pt-8 lg:pt-0">
                {`Hello  ${name} !`}
              </h1>

              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-700 ">
              </div>

              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                  <UilBookReader size={35} class="text-green-700"/> 
                  Student At Shri Ramdeobaba College Of Engineering And Management
              </p>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                  <UilDesktop size={30} class="text-green-700"/> 
                  Computer Science Engineering<span class="font-semibold px-1"> (2024 Batch)</span>
              </p>

              <p class="pt-2 text-gray-600 font-medium text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <UilLocationPinAlt size={30} class="text-green-700" />
                Nagpur, Maharashtra
              </p>

              <p class="pt-8 text-sm">
                Totally optional short description about yourself, what you do and so on.
              </p>
  
              <div class="pt-12 pb-8">
                <button onClick={handleLogout} class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                  Logout
                </button> 
              </div>
  
              <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                  
              </div>
              
              
  
          </div>
  
      </div>
      
      
      
      </div>
      </div>
        );
}

export default Main;
