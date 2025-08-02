import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNutriGruteMetodologiaPesquisaComponent } from './sidebar-nutri-grute-metodologia-pesquisa.component';

describe('SidebarNutriGruteMetodologiaPesquisaComponent', () => {
  let component: SidebarNutriGruteMetodologiaPesquisaComponent;
  let fixture: ComponentFixture<SidebarNutriGruteMetodologiaPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNutriGruteMetodologiaPesquisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNutriGruteMetodologiaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
