import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from '../book.service';
import { UserService } from '../user.service';
import {of} from 'rxjs'

import { CompletedBooksComponent } from './completed-books.component';

describe('CompletedBooksComponent', () => {
  let component: CompletedBooksComponent;
  let fixture: ComponentFixture<CompletedBooksComponent>;
  let bs:any, us:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientTestingModule],
      declarations: [ CompletedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    us = fixture.debugElement.injector.get(UserService)
    bs = fixture.debugElement.injector.get(BookService)
  });

  it('componenet should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should display all completed books', async ()=>{
    spyOn(us, 'checkUser').and.returnValue(of({data:{completed:[1]}}))
    spyOn(bs, 'getBookById').and.returnValue(of({}))
    fixture.whenStable().then(()=>{
      expect(fixture.debugElement.nativeElement.querySelector('app-book-card')).toBeDefined()
    })
  })
});
