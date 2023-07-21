import Image from 'next/image';
import Link from 'next/link';
import classes from '../styles/Home.module.css';
import Button from '@/components/UI/Button/Button';
import HomeCarList from '@/components/HomeCarList/HomeCarList';
import NewsletterForm from '@/components/UI/Newsletter/Newsletter';
import Comments from '@/components/comments/comments';
import HomeListR from '@/components/HomeListR/HomeListR';

export default async function Home() {

  const data = await getData();

  return (
    <main>

      <section className={classes.intro}>
        <div>
          <Image 
          src='/images/home-car3.png' 
          alt='intro car image' 
          className={classes.img}
          width={600}
          height={300}
          />
        </div>

        <div className={classes.text}>

          <h1>
            <strong>Easy</strong> and fast way to rent a car
          </h1>

          <p>
            Experience convenience, competitive prices, and exceptional service for your road trips, business visits, or temporary transportation needs. Rent with DriveWell Car Rentals and enjoy a seamless car rental experience.
          </p>

          <div className={classes.actions}>

            <Link href={'/rentals'}>
              <Button>Get started</Button>
            </Link>
            <Button className={classes.secondary}>Learn more</Button>

          </div>

        </div>
      </section>

      <section>

        <div className={classes.title}>
          <h1><strong>Latest</strong> Inventory</h1>
        </div>

        <HomeCarList cars={data}/>

      </section>


      <section className={classes.section}>

        <div className={classes.title}>
          <h1>Why <strong>Choose us</strong></h1>
          <p>Choose DriveWell Car Rentals for a seamless experience from start to finish. With our extensive vehicle selection and exceptional customer service, we ensure a reliable and convenient car rental solution tailored to your needs.</p>
        </div>

        <div className={classes.container}>
            <Image 
            width={1000}
            height={400}
            src='/images/whychooseus-img5.png'
            alt='why choose us image'
            className={classes.secimg}
            />

            <HomeListR />
        </div>

      </section>


      <section>
        <div className={classes.newsletter}>
          <NewsletterForm />
          <Image 
          width={800}
          height={500}
          src='/images/formsection.png'
          alt='join to the newsletter img'
          className={classes.newsletImg}
          />
        </div>
      </section>


      <section className={classes.reviews}>
        <h1>What <strong>Our clients</strong> say</h1>
        <p className={classes.parag}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius mattis massa, id luctus magna vehicula et. Fusce arcu diam.</p>
        <Comments />
      </section>


    </main>
  )
}


async function getData() {

  const res = await fetch('https://car-rental-7e85a-default-rtdb.firebaseio.com/cars.json', { next: { revalidate:  3600 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
  }


 
  return res.json();
}

