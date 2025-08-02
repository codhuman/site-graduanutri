import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTrilhaSugeridaComponent } from './sidebar-trilha-sugerida.component';

describe('SidebarTrilhaSugeridaComponent', () => {
  let component: SidebarTrilhaSugeridaComponent;
  let fixture: ComponentFixture<SidebarTrilhaSugeridaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarTrilhaSugeridaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarTrilhaSugeridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
