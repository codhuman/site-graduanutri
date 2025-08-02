import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T08So01Linux03Cmd01PwdComponent } from './t08-so-01-linux-03-cmd-01-pwd.component';

describe('T08So01Linux03Cmd01PwdComponent', () => {
  let component: T08So01Linux03Cmd01PwdComponent;
  let fixture: ComponentFixture<T08So01Linux03Cmd01PwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T08So01Linux03Cmd01PwdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T08So01Linux03Cmd01PwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
