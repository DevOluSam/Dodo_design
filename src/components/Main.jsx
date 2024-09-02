import Sidebar from "../Sidebar.jsx"
import Aside from "../components/Aside.jsx"
import Header from "../components/Header.jsx"
import vector_img from '../assets/vector-img.svg';
import analysis from '../assets/analysis.svg'




function Main() {
 

  return (
    <>
    <div className="">

    {/* grid grid-cols-[68px_210px_1fr] grid-rows-[100px_1fr] */}

        {/* <div className="col-start-1 col-end-2 border-red-900">
        <Sidebar />
        </div>
      
      <div className=" lg:col-start-2 lg:col-end-3">
      <Aside />
      </div>
      <div className='col-start-1 lg:col-start-2 col-end-5  row-start-1 row-end-2 '>
      <Header />  
      </div> */}
    </div>
    <section className=' mt-[-30px] md:mt-5 md:ml-[-10px]'>

    {/* mt-0 lg:col-start-3 lg:col-end-4 lg:row-start-1 row-end-3 lg:ml-[250px] p-3 pr-7 bg-[#ffffff] */}


          <h1 className="text-2xl text-center md:text-left ">
          Welcome Susan,
          </h1>
          <p className='text-[#344054] pt-2 text-center mb-2 md:text-left'>
          Get ready to complete your research processes on Zadwax
          </p>
          <div className='bg-[#F0EBFC]  rounded-lg py-2 bg-[url(/src/assets/vector-img.svg)] bg-no-repeat text-center md:py-4'>

          {/* pr-12 pl-8 mt-4 pt-8 pb-8 */}
            <p className="text-[#101828] text-[0.9rem] md:text-left md:pl-3 md:pt-2">
            Welcome to the cool kids club
            </p>

            <div className="flex ">
            <p className="text-[24px] text-[#4A24A1] mt-2 md:pl-3 px-1 py-1 md:w-full md:text-left md:pb-2 ">
            The new way designers revolutionize their work. See how others are using Zadwax to accelerate their design process.
            </p>
         
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:gap-3 gap-6">
            <div className="border border-[#EAECF0] mt-6 px-3 py-4 lg:w-7/12  rounded-xl ">
            {/* pt-5 pb-5 pl-7 pr-5 */}
                <header className=" border-b-[1px] pb-2  flex justify-between items-center">
                    <div className="">
                    <h3  className="text-md">Getting Started</h3>
                <p className="text-[#344054] text-sm">Three simple steps to launch your first project</p>
                    </div>
                <button className="bg-[#6832E3] hidden md:block text-sm mb-3 p-3 rounded-xl text-white   ">Create Project</button>
                </header>
                <div className="pt-4">
                    <h6 className="text-[#344054] text-md">Step 1: Create your project</h6>
                    <p className="text-[#667085] text-sm">Give your project a name, add a description and your goals.</p>
                </div>
                
                <div className="pt-2">
                    <h6 className="text-[#344054] text-md">Step 2: Invite your teammates</h6>
                    <p className="text-[#667085] text-sm">Research is better together, Invite your colleagues.</p>
                </div>
                <div className="pt-2">
                    <h6 className="text-[#344054] text-md">Step 3: Create your project</h6>
                    <p className="text-[#667085] text-sm">Give your project a name, add a description and your goals.</p>
                </div>
                <div className=" ">
                <button className="bg-[#6832E3] md:hidden  text-sm mt-3 px-5 py-3 rounded-xl text-white   ">Create Project</button>
                </div>
            </div>

            <div className="border border-[#EAECF0] mt-6 lg:w-6/12 rounded-xl px-2 py-4">
            {/* pt-5 pb-5 pr-5 pl-7  */}
                <header className=" border-b-[1px] pb-2  flex justify-between items-center">
                    <div className="pt-2">
                    <h3  className="text-xl">Research Tips and Tricks</h3>
                <p className="text-[#344054] text-sm">Three simple steps to launch your first project</p>
                    </div>
        
                </header>
                <div className="pt-4">
                    <h6 className="text-[#344054] text-md">Don’t start from scratch, use a template</h6>
                    <p className="text-[#667085] text-sm">Begin with field-tested frameworks adaptable to your research.</p>
                </div>
                <div className="pt-2">
                    <h6 className="text-[#344054] text-md">Add steps and set milestones</h6>
                    <p className="text-[#667085] text-sm">Define key stages and monitor progress from hypothesis to conclusion.</p>
                </div>
                <div className="pt-2">
                    <h6 className="text-[#344054] text-md">Track changes in your documents over time.</h6>
                    <p className="text-[#667085] text-sm">Capture every revision to ensure data integrity and transparency.</p>
                </div>
            </div>
            
          </div>
          <div className="mt-8">
            <h2 className="text-lg px-4 text-center md:text-xl lg:text-left ">Resources for you</h2>
            <div className="mt-4 flex gap-5 flex-col sm:flex-row sm:flex-wrap sm:justify-center lg:gap-3 lg:justify-between">


                <div className="border border-[#EAECF0] rounded-3xl w-full md:w-3/5 lg:w-[24%]">
                    <div className="w-full">
                        <img src={analysis} alt="" className="w-full" />
                    </div>
                    <div className=" px-4  pt-6 pb-4 ">
                    <h1 className="text-[#344054] text-lg ">Academic literature review</h1>
                    <p className="text-[#667085] text-sm mt-1">Organize your sources and synthesize information effectively.</p>
                    </div>
                </div>
                <div className="border border-[#EAECF0] rounded-3xl w-full md:w-3/5 lg:w-[24%]">
                    <div className="w-full">
                        <img src={analysis} alt="" className="w-full" />
                    </div>
                    <div className=" px-4 pt-6 pb-4 ">
                    <h1 className="text-[#344054] text-lg">Data analysis templates</h1>
                    <p className="text-[#667085] text-sm mt-1">Streamline patient data collection and analysis for medical research.</p>
                    </div>
                </div>
                <div className="border border-[#EAECF0] rounded-3xl w-full md:w-3/5 lg:w-[24%]">
                    <div className="w-full">
                        <img src={analysis} alt="" className="w-full" />
                    </div>
                    <div className=" px-4 pt-6 pb-4 ">
                    <h1 className="text-[#344054] text-lg">UX Heuristic template.</h1>
                    <p className="text-[#667085] text-sm mt-1">Assess your interface against established usability principles.</p>
                    </div>
                </div>
                <div className="border border-[#EAECF0] rounded-3xl w-full md:w-3/5 lg:w-[24%]">
                    <div className="w-full">
                        <img src={analysis} alt="" className="w-full" />
                    </div>
                    <div className=" px-4 pt-6 pb-4 ">
                    <h1 className="text-[#344054] text-lg">Affinity mapping template</h1>
                    <p className="text-[#667085] text-sm mt-1">Assess your interface against established usability principles.</p>
                    </div>
                </div>
            </div>
          </div>
     </section>
    </>
  )
}

export default Main
