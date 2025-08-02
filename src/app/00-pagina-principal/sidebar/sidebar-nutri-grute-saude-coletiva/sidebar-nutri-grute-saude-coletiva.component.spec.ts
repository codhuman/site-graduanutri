import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNutriGruteSaudeColetivaComponent } from './sidebar-nutri-grute-saude-coletiva.component';

describe('SidebarNutriGruteSaudeColetivaComponent', () => {
  let component: SidebarNutriGruteSaudeColetivaComponent;
  let fixture: ComponentFixture<SidebarNutriGruteSaudeColetivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNutriGruteSaudeColetivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNutriGruteSaudeColetivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
