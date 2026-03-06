import React from 'react'
import card1 from "../assets/images/card1 (1).png"
import card2 from "../assets/images/card1 (3).png"
import card3 from "../assets/images/card1 (2).png"

const Cards = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-8 flex flex-wrap gap-6 justify-center bg-[#EDFEFF]  ">
                <div className="w-full text-center mb-8">
                    <button className="text-xs  text-[#0CBBC7] px-1 py-1 font-bold tracking-wide  rounded-full bg-[#EFEFEF]">
                        Resources
                    </button>
                    <h1 className='text-3xl font-bold'>
                        Stay <a href="" className='font-normal'> in the </a> know
                    </h1>
                </div>


              
        
                <div className="  p-10 bg-[#FFFFFF] rounded-base  " style={{ width: '359px', height: '533px', borderRadius: '4px', opacity: 1 }}>
                    <a href="#">
                        <img className="rounded-base" src={card1} alt="" width="290" height="150" />
                    </a>
                    <a href="#">
                        <h5 className="mt-4  text-base font-bold  text-heading">
                            Excepteur sint occaecat cupidatat
                        </h5>
                        <h5 className="mb-2 text-base font-bold  text-heading">
                            non proident
                        </h5>
                    </a>
                    <p className="font-normal text-sm leading-5 text-[#676767] mb-4">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    </p>
                    <p className=' font-normal text-sm  text-[#676767]  mb-4'>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                    </p>
                    <button className=' text-sm font-bold bg-[#0CBBC7] px-5 py-3 text-[#FFFFFF]'>
                        Read more
                    </button>
                </div>

                <div className="  p-10 bg-[#FFFFFF] rounded-base  " style={{ width: '359px', height: '533px', borderRadius: '4px', opacity: 1 }}>
                    <a href="#">
                        <img className="rounded-base" src={card2} alt="" width="290" height="150" />
                    </a>
                    <a href="#">
                        <h5 className="mt-4  text-base font-bold  text-heading">
                            Quis nostrum exercitationem ullam
                        </h5>
                        <h5 className="mb-2 text-base font-bold  text-heading">
                            corporis suscipit laboriosamQuis
                        </h5>
                    </a>
                    <p className="font-normal text-sm laading-5 text-[#676767] mb-4">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                    </p>
                    <p className=' font-normal text-sm  text-[#676767]  mb-4'>
                        nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit
                    </p>
                    <button className=' text-sm font-bold bg-[#0CBBC7] px-5 py-3 mt-5 text-[#FFFFFF]'>
                        Read more
                    </button>
                </div>


                <div className="p-10 bg-[#FFFFFF] rounded-base  " style={{ width: '359px', height: '533px', borderRadius: '4px', opacity: 1 }}>
                    <a href="#">
                        <img className="rounded-base" src={card3} alt="" width="290" height="150" />
                    </a>
                    <a href="#">
                        <h5 className="mt-4  text-base font-bold  text-heading">
                            Lorem ipsum dolor sit amet,
                        </h5>
                        <h5 className="mb-2 text-base font-bold  text-heading">
                            consectetur adipiscing elit.</h5>
                    </a>
                    <p className="font-normal text-sm laading-5 text-[#676767] mb-4">
                        Coluptatem accusantium doloremque laudantium, totam rem aperiam
                       </p>
                  <p className="font-normal text-sm  text-[#676767]  mb-4"> Auque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                            <button className="text-sm font-bold bg-[#0CBBC7] px-5 py-3 mt-5 text-[#FFFFFF]">
                         Read more
                       </button>

                    </div>
                    </div>
            
                
            
 </>

  )

}
export default Cards

