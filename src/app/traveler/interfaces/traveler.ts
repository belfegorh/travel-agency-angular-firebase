export interface Booking {
  uid: string;
  userUid: string;
  hotelUid: string;
  roomUid: string;
  emergencyContactPhone: number;
  emergencyContactName: string;
  createdTimestamp?: number;
  updatedTimestamp: number;
  accommodationDates: Date[];
  active: boolean;
  guests: Guest[];
}
export interface Guest {
  name: string;
  lastName: string;
  bithDate: string;
  genere: string;
  documentType: string;
  documentNumber: string;
  email: string;
  phone: number;
}
