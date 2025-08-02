import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNutriGruteAlimentosTecnologiaComponent } from './sidebar-nutri-grute-alimentos-tecnologia.component';

describe('SidebarNutriGruteAlimentosTecnologiaComponent', () => {
  let component: SidebarNutriGruteAlimentosTecnologiaComponent;
  let fixture: ComponentFixture<SidebarNutriGruteAlimentosTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNutriGruteAlimentosTecnologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNutriGruteAlimentosTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
