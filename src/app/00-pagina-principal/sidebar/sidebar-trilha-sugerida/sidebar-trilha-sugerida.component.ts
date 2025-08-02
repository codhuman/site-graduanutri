import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-trilha-sugerida',
  standalone: true,
  template: `
    <li class="flex-container">
      <div class="suggested-track">
        <a class="track-header nav-link" href="#" id="trackDropdown1" role="button" data-bs-toggle="collapse" data-bs-target="#trackList1">
          <div class="track-title-container">
            <div class="track-title dropdown-toggle">Trilha Sugerida</div>
          </div>
        </a>
        <div id="trackList1" class="collapse">
          <ul class="nav flex-column track-list">
            <li class="nav-item"><a class="track-item nav-link" href="#">Comando ping</a></li>
            <li class="nav-item"><a class="track-item nav-link" href="#">Interactive and design</a></li>
            <li class="nav-item"><a class="track-item nav-link" href="#">App foundations</a></li>
            <li class="nav-item"><a class="track-item nav-link" href="#">Communications</a></li>
          </ul>
        </div>
      </div>
    </li>
  `,
    styleUrls: ['./sidebar-trilha-sugerida.component.scss']
})
export class SidebarTrilhaSugeridaComponent {}
