function timeConverter(str) {
  const [hour, minute] = str.split(":");
  const totalTime =  Number(hour) + Number(minute) / 60;
  return totalTime;
}

function getAmountofDays(date1, date2) {
  const pickupDate = new Date(date1);
  const dropoffDate = new Date(date2);

  const timeDiff = dropoffDate.getTime() - pickupDate.getTime()
  
  const daysDiff = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
  return daysDiff; 
}

export function calculateCost(pickTime, dropTime, pickDate, dropDate, price) {

  const pickupTime = timeConverter(pickTime);
  const dropoffTime = timeConverter(dropTime);
  const timeDiff = Math.abs((dropoffTime - pickupTime) / 24);

  const daysDiff = getAmountofDays(pickDate, dropDate);
  const totalCost = (timeDiff + daysDiff) * price;

  return {
    timeDiff,
    totalCost
  }

}