export interface Hotel {
  name: string;
  city: string;
  uid: string;
  img: string;
  owner: string;
  active: boolean;
}

export interface Room {
  uid: string;
  hotelUid: string;

  name: string;
  price: number;
  tax: number;
  type: string;
  beds: number;
  active: boolean;
}
