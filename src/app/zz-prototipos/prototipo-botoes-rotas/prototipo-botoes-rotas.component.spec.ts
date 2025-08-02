import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipoBotoesRotasComponent } from './prototipo-botoes-rotas.component';

describe('PrototipoBotoesRotasComponent', () => {
  let component: PrototipoBotoesRotasComponent;
  let fixture: ComponentFixture<PrototipoBotoesRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototipoBotoesRotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototipoBotoesRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
