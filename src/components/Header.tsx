export default function Header() { 
	return (
	<main>
	  <header>
	    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-mksBlue">
	      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-16">
	        <a>
	          <span className="font-bold text-4xl dark:text-white" >MKS </span>
	          <span className="self-center font-thin whitespace-nowrap dark:text-white">Sistemas</span>
	        </a>
	        <div className="flex items-center lg:order-2">
	          <a href="" className="bg-white flex hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
	            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M24,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836Z" /><circle cx="7" cy="22" r="2" /><circle cx="17" cy="22" r="2" /></svg>
	            <span className="hidden lg:inline">//NumeroCompras</span>
	          </a>
	        </div>
	      </div>
	    </nav>
	  </header> 

	  <div className="text-center">
	    Monariih Store is a fictional online store that sells clothes, shoes,
	    and accessories.
	  </div>
	</main>
	)
}