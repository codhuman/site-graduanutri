import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNutriGruteEstagiosTccComponent } from './sidebar-nutri-grute-estagios-tcc.component';

describe('SidebarNutriGruteEstagiosTccComponent', () => {
  let component: SidebarNutriGruteEstagiosTccComponent;
  let fixture: ComponentFixture<SidebarNutriGruteEstagiosTccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNutriGruteEstagiosTccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNutriGruteEstagiosTccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
