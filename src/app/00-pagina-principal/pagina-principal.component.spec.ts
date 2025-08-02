import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginainicialComponent } from './pagina-principal.component';

describe('PaginainicialComponent', () => {
  let component: PaginainicialComponent;
  let fixture: ComponentFixture<PaginainicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PaginainicialComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PaginainicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
