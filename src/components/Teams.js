import React from 'react'
import img2 from '../assets/Teams/img2.jpg'
import img1 from '../assets/Teams/wave.png'


const Teams = () => {
  const [no_of_people, setNo_of_people] = React.useState(3);
  return (
    // set wave image as background image using tailwind css
    <div className="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center w-3/4">
          <h1 className="text-4xl font-bold text-center text-white p-10">Team Name</h1>
          <div className="flex flex-col items-center justify-center w-full mt-10 lg:flex-row">
            {
              [...Array(no_of_people)].map((e, i) => {
                return (
                  <>
                    <div className="flex flex-col items-center justify-center w-full max-w-lg h-min min-h-[500px] bg-white rounded-lg shadow-lg p-3 m-3 min-w-4xl">
                      <img src={img2} alt="
              " className="w-64 h-64 mt-10 rounded-[.75rem]" />
                      <h1 className="m-5 text-2xl font-bold text-center text-gray-800">Person name</h1>
                      <h1 className="m-2 text-xl font-bold text-center text-gray-800">Email</h1>
                      <h1 className="m-2 text-xl font-bold text-center text-gray-800">Phone</h1>
                    </div></>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>



  )
}

export default Teams