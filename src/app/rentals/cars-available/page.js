"use client"
import CarRentalMain from "@/components/CarRentalMain/CarRentalMain";
import { useSearchParams } from "next/navigation";


const CarsAvailablePage = async () => {


  const searchParams = useSearchParams()

  const params = {
    pickupLocation: searchParams.get('pickupLocation'),
    dropoffLocation : searchParams.get('dropoffLocation'),
    pickupDate: searchParams.get('pickupDate'),
    dropoffDate : searchParams.get('dropoffDate'),
    pickupTime: searchParams.get('pikcupTime'),
    dropoffTime : searchParams.get('dropoffTime')
  }

  const data = await getData(params.pickupLocation);

  return (
    <>
      <CarRentalMain 
      cars={data}
      rentalDetails={params}
      />
    </>
  )
};

export default CarsAvailablePage;

export async function getData(location) {


  const res = await fetch('https://car-rental-7e85a-default-rtdb.firebaseio.com/cars.json', { next: { revalidate:  3600 * 2 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  if(location) {
    const data = await res.json();
  
    const availableCars = data.filter(car => car.availability[location] === true);
  
    return availableCars;
   } else {
    return res.json();
   }

}
