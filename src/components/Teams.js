
import React from 'react'
import img2 from '../assets/Teams/img2.jpg'
import img1 from '../assets/Teams/wave.png'
import style from '../assets/Teams/style.css'

const Teams = () => {
  const [no_of_people, setNo_of_people] = React.useState(3);
  const [no_of_teams, setNo_of_teams] = React.useState(2);
  return (
    // set wave image as background image using tailwind css
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        {[...Array(no_of_teams)].map((e, i) => {
          return (
            <>
              <div className="flex flex-col items-center justify-center w-full h-full lg:h-screen">
                <h1 className="text-3xl font-bold text-center text-white p-10 sm:text-4xl">
                  Team Name:Competition Name
                </h1>
                <div className="flex flex-col items-center justify-center w-full mt-10 lg:flex-row">
                  {[...Array(no_of_people)].map((e, i) => {
                    return (
                      <>
                        <div className="flex flex-col items-center justify-center w-full max-w-lg h-min min-h-[500px] bg-white rounded-lg shadow-lg p-3 m-3 min-w-4xl">
                          <img
                            src={img2}
                            alt="
            "
                            className="w-64 h-64 mt-10 rounded-[.75rem]"
                          />
                          <h1 className="m-5 text-2xl font-bold text-center text-gray-800">
                            Person name
                          </h1>
                          <h1 className="m-2 text-xl font-bold text-center text-gray-800">
                            Email
                          </h1>
                          <h1 className="m-2 text-xl font-bold text-center text-gray-800">
                            Phone
                          </h1>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;

