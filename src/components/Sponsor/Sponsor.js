import React from 'react'
import "./Sponsor.css"
export default function Spons() {
    return (
        <div className='SponsContainer' id="sponsors">
            <div className="title mt-[20px]">
                <h1>Our Sponsors</h1>
            </div>
            <div className="line">
                <div className="sponscard">
                    <a href="https://www.skillreactor.io/?utm_source=IITP" target="_blank" rel="noreferrer noopener">
                        <img src="https://www.skillreactor.io/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Fskillreactor-logo.91718bff253ba0c12b577cd882b48c17.svg&w=256&q=75" className='skill' alt="" />
                    </a>
                    <h1 className='cardtitle'> Co-Title Sponsor</h1>
                </div>
            </div>
            <div className="line">
            <div className="sponscard">
                    <a href="https://www.ieee.org/" target="_blank" rel="noreferrer noopener">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png" alt="" className='ieee' />
                    </a>
                    <h1 className='cardtitle'> Research Partner</h1>
                </div>
            <div className="sponscard">
                    <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer noopener">
                        <img src="./sponsorimage/gfg.png" alt="" className='gfg' />
                    </a>
                    <h1 className='cardtitle'> Event Sponsor</h1>
                </div>
            </div>
            <div className="line">
                
                <div className="sponscard">
                    <a href="https://techanalogy.org/" target="_blank" rel="noreferrer noopener">
                        <img src="https://techanalogy.org/_next/image?url=%2Ficon.svg&w=256&q=75" alt="" className='tech' />
                    </a>
                    <h1 className='cardtitle'> Education Partner</h1>
                </div>
                <div className="sponscard">
                    <a href="https://www.iitbhu.ac.in/cf/tlc" target="_blank" rel="noreferrer noopener">
                        <img src="./sponsorimage/tlc.png" alt="" className='tlc' />
                    </a>
                    <h1 className='cardtitle'> Learning Partner</h1>
                </div>
                <div className="sponscard">
                    <a href="https://www.elearnmarkets.com/" target="_blank" rel="noreferrer noopener">
                        <img src="./sponsorimage/elm.png" alt="" className='elearn' />
                    </a>
                    <h1 className='cardtitle'>Alanytics Partner</h1>
                </div>
            </div>


        </div>
    )
}
