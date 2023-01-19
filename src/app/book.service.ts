import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { PopupService } from "./popup/popup.service";

@Injectable({providedIn:'root'})
export class BookService{
    books:any = []
    constructor(private http: HttpClient, private popupSr:PopupService){
    }

    base = environment.apiUrl

    checkBooks(){
        if(!this.books.length){
            return this.getAllBooks()
        }
        return of(this.books)
    }

    getAllBooks(){
        return this.http.get(this.base + "/books")
        .pipe(catchError(this.handleError))
        .pipe(map((data)=>{
            this.books = data
            return this.books
        }))
    }
    getBookById(id:number){
        for(let i of this.books){
            if(i.id===id) return i
        }
        return null
        
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