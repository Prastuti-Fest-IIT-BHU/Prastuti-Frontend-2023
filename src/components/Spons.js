import React from 'react'
import "./Spons/Spons.css"
export default function Spons() {
    return (
        <div className='SponsContainer'>
            <div className="title">
                <h1>Our Sponsors</h1>
            </div>
            <div className="line">
                <div className="sponscard">
                    <h1 className='cardtitle'> Co-Title Sponsor</h1>
                    <a href="https://www.skillreactor.io/" target="_blank" rel="noreferrer noopener">
                        <img src="https://www.skillreactor.io/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Fskillreactor-logo.91718bff253ba0c12b577cd882b48c17.svg&w=256&q=75" className='skill' alt="" />
                    </a>
                </div>
            </div>
            <div className="line">
                <div className="sponscard">
                    <h1 className='cardtitle'> Research Partner</h1>
                    <a href="https://www.ieee.org/" target="_blank" rel="noreferrer noopener">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png" alt="" className='ieee' />
                    </a>
                </div>
                <div className="sponscard">
                    <h1 className='cardtitle'> Education Partner</h1>
                    <a href="https://techanalogy.org/" target="_blank" rel="noreferrer noopener">
                        <img src="https://techanalogy.org/_next/image?url=%2Ficon.svg&w=256&q=75" alt="" className='tech' />
                    </a>

                </div>
            </div>



        </div>
    )
}
