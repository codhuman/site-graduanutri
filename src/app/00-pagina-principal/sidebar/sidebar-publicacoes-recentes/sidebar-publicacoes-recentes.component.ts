import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-publicacoes-recentes',
  standalone: true,
  template: `
    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        id="publicacoesRecentesDropdown"
        role="button"
        data-bs-target="#publicacoesRecentesMenu"
      >
        Publicações Recentes
      </a>
      <!-- <div id="publicacoesRecentesMenu" class="collapse">
        <ul class="nav flex-column ms-3">
          <li class="nav-item"><a class="nav-link" href="#">Linux</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Teoria</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Windows</a></li>
        </ul>
      </div> -->
    </li>
  `,
})
export class SidebarPublicacoesRecentesComponent {}
