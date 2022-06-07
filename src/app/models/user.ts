export interface User {
    name: string;
    surname: string;
    email: string;
    birthdate: Date;
    address?: string; // ? means 'not mandatory'
}
