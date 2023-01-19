import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {of, Subject, throwError} from "rxjs";
import {map, catchError, tap} from "rxjs/operators"
import { environment } from "src/environments/environment";
import { PopupService } from "./popup/popup.service";

export interface User{
    "id": number,
    "userName":string,
    "Password":string,
    "Phone":string,
    "Email":string,
    "UserType":string,
    "WishList": number[],
    "Completed":number[]
}
@Injectable({
    providedIn:'root'
})
export class UserService{
    user:{data:any} = {data:null};
    userChange = new Subject();

    base = environment.apiUrl

    constructor(private http:HttpClient, private popupSr:PopupService){
        this.checkUser().subscribe()
    }

    checkUser(){
        if(!this.user.data && localStorage.getItem("user")){
            return this.login(JSON.parse(localStorage.getItem('user') as any))
        }
        return of(this.user)
    }

    setInLocal = ()=>{
        localStorage.setItem('user', JSON.stringify({
            email : this.user.data.Email,
            password : this.user.data.Password
        }))
    }

    updateUser(obj:any){
        return this.http.put(this.base + '/users/' + obj.id, obj)
        .pipe(catchError(this.handleError))
        .pipe(tap(data => this.user.data = data))
    }

    register(obj:any){
        obj = {
            ...obj,
            UserType: 'Customer',
            WishList: [],
            Completed: []
        }
        return this.http.post(this.base+'/users', obj)
        .pipe(catchError(this.handleError), tap((data)=>{
            this.user.data = data
            this.setInLocal()
        }))
    }

    login(obj:any){
        return this.http.get(this.base + '/users')
        .pipe(catchError(this.handleError))
        .pipe(map( (data:any) =>{
            for(let i of data){
                if(i.Email===obj.email && i.Password===obj.password){
                    this.user.data = i;
                    this.setInLocal()
                    return this.user;
                }
            }
            return null
        }))
    }

    logout(){
        this.user.data = null;
        localStorage.clear()
        this.popupSr.trigger.next({data:'Successfully logged out!'})
    }

    handleError = (err:any, obs:any) => {
        let customError = `Some error occurred..<br>Make sure json server is running at <b>${environment.apiUrl}</b><br>and watching <b>data.json</b> file`
        this.popupSr.trigger.next({
            type : 'bad',
            data : customError,
            time : 0
        })
        return throwError(customError)

    }
}