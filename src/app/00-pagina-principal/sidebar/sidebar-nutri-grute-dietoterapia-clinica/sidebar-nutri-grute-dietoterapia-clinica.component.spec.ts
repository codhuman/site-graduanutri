import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSistemasOperacionaisComponent } from './sidebar-nutri-grute-dietoterapia-clinica.component';

describe('SidebarSistemasOperacionaisComponent', () => {
  let component: SidebarSistemasOperacionaisComponent;
  let fixture: ComponentFixture<SidebarSistemasOperacionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarSistemasOperacionaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSistemasOperacionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
