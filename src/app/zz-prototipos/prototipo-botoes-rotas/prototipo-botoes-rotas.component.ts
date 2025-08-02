import { Component, EnvironmentInjector, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { T08So01Linux03Cmd01PwdComponent } from 'src/app/artigos/08-so/01-linux/03-cmd/01-pwd/t08-so-01-linux-03-cmd-01-pwd.component';
import { PublicacoesRecentesComponent } from 'src/app/sections/02-pub-rec/publicacoes-recentes.component';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-prototipo-botoes-rotas',
  standalone: true,
  imports: [],
  templateUrl: './prototipo-botoes-rotas.component.html',
  styleUrl: './prototipo-botoes-rotas.component.scss'
})
export class PrototipoBotoesRotasComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  // Mapeamento de nomes para os componentes
  componentMap = {
    'T08So01Linux03Cmd01PwdComponent': T08So01Linux03Cmd01PwdComponent,
    'PublicacoesRecentesComponent': PublicacoesRecentesComponent
    // Adicione mais componentes conforme necessário
  };

  // Injetar o EnvironmentInjector
  private environmentInjector = inject(EnvironmentInjector);

  constructor(public componentService: ComponentService) {
    // Observe changes to the current component
    this.componentService.currentComponent$.subscribe((componentName) => {
      console.log('Switching component to:', componentName);
      this.switchComponent(componentName);
    });
  }

  ngAfterViewInit() {
    console.log('Initializing with default component');
    this.switchComponent('PublicacoesRecentesComponent');
  }

  switchComponent(componentName: string) {
    console.log('Attempting to switch to component:', componentName);
    const component = this.componentMap[componentName];
    if (component) {
      console.log('Component found:', componentName);
      this.container.clear();
      this.container.createComponent(component, {
        environmentInjector: this.environmentInjector,
      });
    } else {
      console.error('Component not found in map:', componentName);
    }
  }
}
