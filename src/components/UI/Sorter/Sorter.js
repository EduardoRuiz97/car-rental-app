"use client"
import Select from '../Select/Select';

const criteria = [
  {
    option: 'Total Price',
    value: 'price'
  },
  {
    option: 'Mileage',
    value: 'mileage'
  },
  {
    option: 'Customer Rating',
    value: 'rating'
  }
]



const Sorter = (props) => {

  const sorterHandler = (selectedCriteria) => {

    let sortedArray = [];

    if (selectedCriteria === 'price') {
      sortedArray = props.cars.sort((a,b) => {
        let aPrice = a.price;
        let bPrice = b.price;

        if (aPrice < bPrice) {
          return -1;
        }

        if(aPrice > bPrice) {
          return 1;
        }

        return 0;
      }).map(item => item);

      props.onSorter(sortedArray)
    }

    if (selectedCriteria === 'mileage') {
      sortedArray = props.cars.sort((a,b) => {
        let aMileage = a.mileage.highway;
        let bMileage = b.mileage.highway;

        if (aMileage < bMileage) {
          return 1;
        }

        if(aMileage > bMileage) {
          return -1;
        }

        return 0;
      }).map(item => item);

      props.onSorter(sortedArray)
    }

    if (selectedCriteria === 'rating') {

      sortedArray = props.cars.sort((a,b) => {

        let aTotalRatings = a.reviews.reduce((acc, review) => acc + review.rating, 0);

        let aAverageRating = aTotalRatings / a.reviews.length;

        let bTotalRatings = b.reviews.reduce((acc, review) => acc + review.rating, 0);
        let bAverageRating = bTotalRatings / b.reviews.length;

        if (aAverageRating < bAverageRating) {
          return 1;
        }

        if(aAverageRating > bAverageRating) {
          return -1;
        }

        return 0;
      }).map(item => item);

      props.onSorter(sortedArray)
    }
  }



  return (
    <Select 
    options={criteria} 
    default='Sort By' 
    onOption={sorterHandler}
    />
  )
}

export default Sorter;