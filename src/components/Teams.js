import React from 'react'
import img2 from '../assets/Teams/img2.jpg'
import img1 from '../assets/Teams/wave.png'
import style from '../assets/Teams/style.css'


const Teams = () => {
  const [no_of_people, setNo_of_people] = React.useState(3);
  const [no_of_teams, setNo_of_teams] = React.useState(2);
  return (
    <div className='w-screen h-screen'>
      {/* make the image background */}
      <div className="z-10 bg-no-repeat bg-cover bg-center w-screen h-screen" style={{ backgroundImage: `url(${img1})` }}>
        <div className="flex flex-col items-center justify-center min-h-screen ">
          {
            [...Array(no_of_teams)].map((e, i) => {
              return (
                <>
                  <div className="flex flex-col items-center justify-center w-full h-full lg:h-screen">
                    <h1 className="text-3xl font-bold text-center text-[#003247] p-10 sm:text-4xlfont-Manrope">Team Name:Competition Name</h1>
                    <div className="flex flex-col items-center justify-center w-full mt-10 lg:flex-row">
                      {
                        [...Array(no_of_people)].map((e, i) => {
                          return (
                            <>
                              <div className="flex flex-col items-center justify-center w-screen max-w-lg h-min bg-[#DBF2FF] rounded-lg shadow-lg p-3 m-3 min-w-sm">
                                <img src={img2} alt="
            " className="w-64 h-64 rounded-[.75rem]" />
                                <h1 className="my-2  text-2xl font-bold text-center text-[#003247] font-Catamaran">Person name</h1>
                                <h1 className="my-2 text-xl font-bold text-center text-[#003247] font-Catamaran">Email</h1>
                                <h1 className="my-2 text-xl font-bold text-center text-[#003247] font-Catamaran">Phone</h1>
                              </div></>
                          )
                        })
                      }
                    </div>
                  </div>
                </>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Teams;