'use client';
export default function Home() {

  const getProducts = async () => {
  	const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC");
    const data = await response.json();
    console.log(data);
	}
	
	onload = () => {
		getProducts();
	}

  return (
    <main className=" bg-gray-400">
      <div className="m-16 grid grid-cols-4 gap-4">
        <div className="self-center text-center m-2 rounded-md bg-white">
          01
        </div>
        <div className="self-center text-center m-2 rounded-md bg-white">
          02
        </div>
        <div className="self-center text-center m-2 rounded-md bg-white">
          03
        </div>
        <div className="self-center text-center m-2 rounded-md bg-white">
          04
        </div>
        <div className="self-center text-center m-2 rounded-md bg-white">
          05
        </div>
        <div className="self-center text-center m-2 rounded-md bg-white">
          06
        </div>
        <div className="self-center text-center m-2 rounded-md bg-white">
          07
        </div>
        <div className="self-center text-center m-2 rounded-md bg-white">
          08
        </div>
      </div>
    </main>
  );
}
