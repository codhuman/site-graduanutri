import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNutriGruteComplementaresHumanisticasComponent } from './sidebar-nutri-grute-complementares-humanisticas.component';

describe('SidebarNutriGruteComplementaresHumanisticasComponent', () => {
  let component: SidebarNutriGruteComplementaresHumanisticasComponent;
  let fixture: ComponentFixture<SidebarNutriGruteComplementaresHumanisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNutriGruteComplementaresHumanisticasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNutriGruteComplementaresHumanisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
