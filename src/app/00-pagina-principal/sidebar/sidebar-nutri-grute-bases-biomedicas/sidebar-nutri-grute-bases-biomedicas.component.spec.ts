import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNutriGruteBasesBiomedicasComponent } from './sidebar-nutri-grute-bases-biomedicas.component';

describe('SidebarNutriGruteBasesBiomedicasComponent', () => {
  let component: SidebarNutriGruteBasesBiomedicasComponent;
  let fixture: ComponentFixture<SidebarNutriGruteBasesBiomedicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNutriGruteBasesBiomedicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNutriGruteBasesBiomedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
