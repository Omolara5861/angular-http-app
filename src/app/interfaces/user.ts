import { Coordinates } from './coordinates';
export interface User {
    uuid: string;
    firstName: string;
    lastName: string;
    username: string;
    gender: string;
    address: string;
    email: string;
    dob: string;
    age: number;
    phone: string;
    profileSrc: string;
    coordinates: Coordinates;
}
