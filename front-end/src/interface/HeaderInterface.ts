import { JsxElement } from "typescript";

export interface MenuInterface {
    name : string,
    route: string,
    isAuth? : boolean 
}

export interface TableDataType { 
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}