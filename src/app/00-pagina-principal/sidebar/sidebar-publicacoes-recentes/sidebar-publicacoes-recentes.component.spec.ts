import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPublicacoesRecentesComponent } from './sidebar-publicacoes-recentes.component';

describe('SidebarPublicacoesRecentesComponent', () => {
  let component: SidebarPublicacoesRecentesComponent;
  let fixture: ComponentFixture<SidebarPublicacoesRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarPublicacoesRecentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPublicacoesRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
