import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacoesRecentesComponent } from './publicacoes-recentes.component';

describe('PublicacoesRecentesComponent', () => {
  let component: PublicacoesRecentesComponent;
  let fixture: ComponentFixture<PublicacoesRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacoesRecentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacoesRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
