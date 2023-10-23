import type { IHeader } from "./IResponse";

export interface  IProduct extends IHeader {
    name:         string;
    price:        number;
    description:  string;
    rating?:      number;
    stock?:       number;
    brand:        string;
    thumbnail:    string;
    image:        Blob;
}