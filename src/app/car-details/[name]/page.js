import Cardetails from "@/components/Cardetails/Cardetails";
import RentalInfo from "@/components/Cardetails/RentalInfo/RentalInfo";
import Reviews from "@/components/Cardetails/Reviews/Reviews";
import Checkout from "@/components/UI/Chekout/Checkout";
import classes from '../../../styles/carDetails.module.css';
import Policies from "@/components/Cardetails/policies/Policies";

const CartDetailsPage = async ({params}) => {

  const {name} = params;

  const data = await getItem(Number(name));

  return (
    <main className={classes.main}>

      <section className={classes.details}>

        <Cardetails car={data}/>

        <RentalInfo car={data}/>

        <div className={classes.mobile}>
          <Checkout car={data}/>
        </div>

        <Policies />

        <Reviews reviews={data.reviews}/>

      </section>

      <section className={classes.desktop}>
        <Checkout car={data}/>
      </section>


    </main>
  )
}

export default CartDetailsPage;

export async function getItem(id) {
  const res = await fetch(`https://car-rental-7e85a-default-rtdb.firebaseio.com/reservedcars.json`, { next: { revalidate: 60 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const items = Object.values(data);
  const item = items.find(item => item.id === id);

  return item;
}