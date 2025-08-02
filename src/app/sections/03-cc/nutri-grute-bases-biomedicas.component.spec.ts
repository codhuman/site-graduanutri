import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriGruteBasesBiomedicasComponent } from './nutri-grute-bases-biomedicas.component';

describe('NutriGruteBasesBiomedicasComponent', () => {
  let component: NutriGruteBasesBiomedicasComponent;
  let fixture: ComponentFixture<NutriGruteBasesBiomedicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [NutriGruteBasesBiomedicasComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(NutriGruteBasesBiomedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
