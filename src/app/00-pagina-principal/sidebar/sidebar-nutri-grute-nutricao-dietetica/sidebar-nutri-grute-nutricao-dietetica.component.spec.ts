import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHardwareComponent } from './sidebar-nutri-grute-nutricao-dietetica.component';

describe('SidebarHardwareComponent', () => {
  let component: SidebarHardwareComponent;
  let fixture: ComponentFixture<SidebarHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarHardwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
