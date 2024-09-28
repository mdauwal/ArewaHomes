import { createContext, useState } from "react";
import partone from "../svgs/partOne.svg";
import parttwo from "../svgs/partTwo.svg";
import partthree from "../svgs/partThree.svg";
import { FaEthereum } from "react-icons/fa"
import partfour from "../svgs/partFour.svg";
import partfive from "../svgs/partFive.svg";
import partsix from "../svgs/partSix.svg";
import partseven from "../svgs/partSeve.svg";
import parteight from "../svgs/partEigh.svg";

// firebase service
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore'
import { db } from '../firebaseConfig'

export const AppContext = createContext();

export const AppStore = ({ children }) => {
  const [listings, setListings] = useState([
    {
      img: partone,
      price:"700,000",
      address: "White Square Estate - Kaduna, Nigeria",
      watchNum: "20",
      amenities: "5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool",
      location: "Barnawa, Kaduna",
      available: true,
    },
    {
      img: parttwo,
      price: "₦850,000",
      address: "Luxury Apartments - Lagos, Nigeria",
      watchNum: "15",
      amenities: "3 Bedrooms • 2 Bathrooms • 2,500sqft • Gym",
      location: "Victoria Island, Lagos",
      available: true,
    },
    {
      img: partthree,
      price: "₦1,200,000",
      address: "Ocean View Villas - Port Harcourt, Nigeria",
      watchNum: "25",
      amenities: "6 Bedrooms • 4 Bathrooms • 4,500sqft • Beach Access",
      location: "GRA, Port Harcourt",
      available: false,
    },
    {
      img: partfour,
      price: "₦500,000",
      address: "Affordable Homes - Abuja, Nigeria",
      watchNum: "10",
      amenities: "2 Bedrooms • 1 Bathroom • 1,200sqft • Parking Space",
      location: "Jabi, Abuja",
      available: true,
    },
    {
      img: partfive,
      price: "₦650,000",
      address: "Green Valley Estate - Enugu, Nigeria",
      watchNum: "12",
      amenities: "4 Bedrooms • 3 Bathrooms • 3,000sqft • Garden",
      location: "Independence Layout, Enugu",
      available: false,
    },
    {
      img: partsix,
      price: "₦900,000",
      address: "Sunshine Residences - Ibadan, Nigeria",
      watchNum: "30",
      amenities: "5 Bedrooms • 3 Bathrooms • 3,500sqft • Private Parking",
      location: "Oluyole Estate, Ibadan",
      available: true,
    },
    {
      img: partseven,
      price: "₦1,200,000",
      address: "Ocean View Villas - Port Harcourt, Nigeria",
      watchNum: "25",
      amenities: "6 Bedrooms • 4 Bathrooms • 4,500sqft • Beach Access",
      location: "GRA, Port Harcourt",
      available: false,
    },
    {
      img: parteight,
      price: "₦500,000",
      address: "Affordable Homes - Abuja, Nigeria",
      watchNum: "10",
      amenities: "2 Bedrooms • 1 Bathroom • 1,200sqft • Parking Space",
      location: "Jabi, Abuja",
      available: true,
    },
  ]);
  //   const data = {
  //     name: "test",
  //   };
  const fetchListings = async () => {
    try {
      // Get reference
      const listingsRef = collection(db, 'listings')

      // Create a query
      const q = query(
        listingsRef,
        // where('offers', '==', true),
        orderBy('timestamp', 'asc'),
        limit(10)
      )

      // Execute query
      const querySnap = await getDocs(q)

      // const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      // setLastFetchedListing(lastVisible)

      const listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      // setFilteredListings(listings)
      // setLoading(false)
      // console.log(filteredListings)
    } catch (error) {
      console.log(error)
      // toast.error('Could not fetch listings')
    }
  }
  return (
    <AppContext.Provider value={{ listings, fetchListings }}>{children}</AppContext.Provider>
  );
};
