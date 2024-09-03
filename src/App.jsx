
import Sidebar from "./components/Sidebar.jsx"
import Aside from "./components/Aside.jsx"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"




function App() {
 

  return (
    <>
 <div
  className="grid grid-cols-1 gap-0 transition-[grid-template-columns] sm:grid-cols-[300px_auto] md:grid-cols-[250px_1fr] lg:gap-0 font-['Mulish']"
>
  <div className="h-32 lg:h-full rounded-lg ">
    <div className="sm:hidden">
      
    <Header />
    </div>
    <div className="">
   
   
     <Sidebar />
     <div className="">
     <Aside />
     </div>
    </div>
  </div>
  <div className="lg:h-full md:">
    <div className="hidden sm:block sm:border-b border-b-[#ddd] pb-5 md:border-b-0 ">
      <Header />
     
    </div>
    <div className="px-6 pl-6  mt-2 lg:border-t border-t-[#ddd]" >
    <Main />
    </div>
    
  </div> 
</div>





    </>
  )
}

export default App
