import { NextResponse } from "next/server";

export async function PUT(request) {

  const item = await request.json();

  if (!item) {
    return NextResponse.json({"message": "The item is invalid"})
  }

  await fetch(`https://car-rental-7e85a-default-rtdb.firebaseio.com/cars/${item.id}.json`, {
    method: 'PUT',
    body: JSON.stringify({
      ...item
    }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-type' : 'application/json'
    }
  });

  return NextResponse.json({"message": `The item ${id} is updated`})
}


export async function POST(request) {

  const item = await request.json();

  if (!item) {
    return NextResponse.json({"message": "The item is invalid"})
  }

  await fetch(`https://car-rental-7e85a-default-rtdb.firebaseio.com/reservedcars.json`, {
    method: 'POST',
    body: JSON.stringify({
      ...item
    }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-type' : 'application/json'
    }
  });

  return NextResponse.json({"message": `The item has been added`})
}


// export async function GET() {
  
//   const response = await fetch('https://car-rental-7e85a-default-rtdb.firebaseio.com/cars.json');

//   if(!response.ok) {
//     return NextResponse.json({message: 'could not fetch data'})
//   }

//   const data = await response.json();
//   return NextResponse.json(data);
// }