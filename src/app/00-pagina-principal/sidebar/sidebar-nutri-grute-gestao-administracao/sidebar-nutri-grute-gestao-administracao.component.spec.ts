import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNutriGruteGestaoAdministracaoComponent } from './sidebar-nutri-grute-gestao-administracao.component';

describe('SidebarNutriGruteGestaoAdministracaoComponent', () => {
  let component: SidebarNutriGruteGestaoAdministracaoComponent;
  let fixture: ComponentFixture<SidebarNutriGruteGestaoAdministracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNutriGruteGestaoAdministracaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNutriGruteGestaoAdministracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
