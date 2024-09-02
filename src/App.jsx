
import Sidebar from "./Sidebar.jsx"
import Aside from "./components/Aside.jsx"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"




function App() {
 

  return (
    <>
 <div
  className="grid grid-cols-1 gap-0 transition-[grid-template-columns] sm:grid-cols-[300px_1fr] md:grid-cols-[250px_1fr] lg:gap-0 "
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
  <div className="lg:h-full">
    <div className="hidden sm:block ">
      <Header />
     
    </div>
    <div className="px-4 " >
    <Main />
    </div>
    
  </div> 
</div>





    </>
  )
}

export default App
