import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {of} from 'rxjs'
import { BookService } from '../book.service';
import { UserService } from '../user.service';

import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientTestingModule],
      declarations: [ WishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('whislist component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should display all completed books', async ()=>{
    spyOn(fixture.debugElement.injector.get(UserService), 'checkUser').and.returnValue(of({data:{wishList:[1]}}))
    spyOn(fixture.debugElement.injector.get(BookService), 'getBookById').and.returnValue(of({}))
    fixture.whenStable().then(()=>{
      expect(fixture.debugElement.nativeElement.querySelector('app-book-card')).toBeDefined()
    })
  })
});
