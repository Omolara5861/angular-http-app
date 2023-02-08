import { Coordinates } from './coordinates';
export interface User {
    uuid: string;
    gender: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    dob: string;
    age: number;
    phone: string;
    profileSrc: string;
    coordinates: Coordinates;
}
