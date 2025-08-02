import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPrototiposComponent } from './sidebar-nutri-grute-psicologia-relacoes.component';

describe('SidebarPrototiposComponent', () => {
  let component: SidebarPrototiposComponent;
  let fixture: ComponentFixture<SidebarPrototiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarPrototiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPrototiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
