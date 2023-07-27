import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable , tap} from "rxjs";
import { OnInit } from "@angular/core";

export interface user{

    name : string;
    id : number;
    email :string ;
    password : string;
    country : string;

}

const usersdata : user[] = [
    {
        name : "m",
    id : 1,
    email : "m",
    password : "m",
    country : "m"
    }

]

@Injectable({
    providedIn : "root"
})

export class userService{
    getAllUsers(): user[] {
        return usersdata;
    }

    createuser(name : string , email :string , paswword : string , country : string):void{
        usersdata.push({
            id  : usersdata.length+1,
            name : name,
    email :email ,
    password : paswword,
    country : country,
        });
        console.log(usersdata);

    }
}