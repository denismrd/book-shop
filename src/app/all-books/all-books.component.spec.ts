import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from '../book.service';
import { PopupService } from '../popup/popup.service';
import { UserService } from '../user.service';
import { AllBooksComponent } from './all-books.component';
import {of} from 'rxjs';


// let userSer : Partial<UserService>

describe('AllBooksComponent', () => {
  let component: AllBooksComponent;
  let fixture: ComponentFixture<AllBooksComponent>;

  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientTestingModule],
      declarations:[AllBooksComponent],
    })
    
    fixture = TestBed.createComponent(AllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });


  it('The all books components should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should display all the books', async ()=>{
    //let bookCard = fixture.nativeElement.querySelector('app-book-card')
    spyOn(fixture.debugElement.injector.get(BookService), 'getAllBooks').and.returnValue(of([{
      "id": 1,
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    }]))
    fixture.whenStable().then(()=>{
      expect(fixture.nativeElement.querySelector('app-book-card')).toBeDefined(); 
    })
  })

});
