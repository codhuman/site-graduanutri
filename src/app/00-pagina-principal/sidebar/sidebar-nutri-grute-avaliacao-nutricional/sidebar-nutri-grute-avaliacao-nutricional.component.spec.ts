import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLinguagensComponent } from './sidebar-nutri-grute-avaliacao-nutricional.component';

describe('SidebarLinguagensComponent', () => {
  let component: SidebarLinguagensComponent;
  let fixture: ComponentFixture<SidebarLinguagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarLinguagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarLinguagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
