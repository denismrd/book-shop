import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientTestingModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should be created', () => {
    expect(component).toBeTruthy();
  });

  it("When user is not logged in, login button should be displayed", ()=>{
    expect(fixture.debugElement.nativeElement.querySelector('.login')).toBeTruthy()
  })

  it("When user is logged in, login button should not be visible", ()=>{
    component.user = {data:{name:'denis'}}
    fixture.detectChanges()
    expect(fixture.debugElement.nativeElement.querySelector('.login')).toBeFalsy()
  })

});
