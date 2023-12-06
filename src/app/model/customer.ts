export interface Customer {
  id: string;
  firstname: string;
  lastname: string;
  email: {
    localPart: string;
    domain: string;
    complete: string;
  };
  address: {
    streetName: string;
    houseNumber: string;
    postalCode: string;
    country: string;
  };
  phoneNumber: {
    number: number;
    countryCallingCode: string;
  }
}


// "phoneNumber": {
//   "number": "488522210",
//       "countryCallingCode": "+32"
// }
