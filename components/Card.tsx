const Card = () => {
  return (
    <div className="shadow-xl aspect-auto mx-auto rounded-[25px] border bg-blue1 p-4">
      <div className="flex justify-center items-center">
        <div className="h-[181px] bg-white rounded-[25px] relative flex justify-center items-center flex-col gap-2">
             <div className="absolute top-2 h-[31px] w-[31px] p-2 shadow bg-white rounded-full right-2">
               <img className="w-full h-full object-cover" src="/assets/Vector.png" alt="Star" />
             </div>
             <div className="p-1">
               <img className="w-full" src="/assets/Illustration.png" alt="Card Image" />
             </div>
             <div className="h-1 w-4/5 rounded-full bg-grey overflow-hidden">
               <div className="h-full w-1/2 bg-blue3"></div>
             </div>
        </div>
        <div className=" relative">
          <div className="absolute right-3 top-0">
            <img className="w-full h-full object-cover" src="/assets/Menu.jpg" alt="Menu" />
          </div>
          <div className="px-6 pt-6">
              <div>
              <p className="font-semibold text-xs mb-2 bg-white text-cyan w-fit px-4 py-1 ">After Effects</p>
              <p className="text-[#2B62CF] tracking-tight font-bold text-2xl font-montserrat">Animation in UI <br/>Design (Part 2)</p>
            </div>
            <div className="pt-6">
              <div className="flex justify-between items-center gap-6">
                <div className="flex text-sm gap-0.5">
                 <div className="h-5 w-5">
                  <img src="/assets/username.png" className="h-full w-full object-cover" alt="User"/>
                  </div>
                  <p className="text-blue2 font-bold">Vishal Pulikottil</p>
                </div>
                <div className="flex text-sm gap-0.5">
                 <div className="h-4 w-4">
                  <img src="/assets/time.png" className="h-full w-full object-cover" alt="Time"/>
                  </div>
                  <p className="text-blue2 font-bold">15 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;