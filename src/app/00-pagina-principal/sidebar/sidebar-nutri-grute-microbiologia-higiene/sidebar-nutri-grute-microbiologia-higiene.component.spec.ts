import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNutriGruteMicrobiologiaHigieneComponent } from './sidebar-nutri-grute-microbiologia-higiene.component';

describe('SidebarNutriGruteMicrobiologiaHigieneComponent', () => {
  let component: SidebarNutriGruteMicrobiologiaHigieneComponent;
  let fixture: ComponentFixture<SidebarNutriGruteMicrobiologiaHigieneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNutriGruteMicrobiologiaHigieneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNutriGruteMicrobiologiaHigieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
