import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BookCardComponent } from './book-card.component';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;
  let native:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientTestingModule],
      declarations: [ BookCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    component.book = {
      "id": 1,
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    }
    fixture.detectChanges();
    native = fixture.debugElement.nativeElement
  });

  it('(Book-card) component should be created', () => {
    expect(component).toBeTruthy();
  });

  it("Should display book name correctly", ()=>{
    expect(native.querySelector('.b-title').textContent).toBe(component.book.title)
  })

  it("Should display book author name correctly", ()=>{
    expect(native.querySelectorAll('.c-back .card-body .text')[1].textContent).toBe(component.book.author)
  })
});
