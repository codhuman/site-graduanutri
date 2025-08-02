import {
  Component,
  ViewChild,
  ViewContainerRef,
  EnvironmentInjector,
  inject,
  AfterViewInit,
} from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { T08So01Linux03Cmd01PwdComponent } from '../../artigos/08-so/01-linux/03-cmd/01-pwd/t08-so-01-linux-03-cmd-01-pwd.component';
import { PublicacoesRecentesComponent } from '../../sections/02-pub-rec/publicacoes-recentes.component';
import { PrototipoBotoesRotasComponent } from 'src/app/zz-prototipos/prototipo-botoes-rotas/prototipo-botoes-rotas.component';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss'],
  standalone: true,
})
export class ArtigoComponent implements AfterViewInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  componentMap = {
    T08So01Linux03Cmd01PwdComponent,
    PublicacoesRecentesComponent,
    PrototipoBotoesRotasComponent
  };

  private environmentInjector = inject(EnvironmentInjector);

  constructor(public componentService: ComponentService) {
    this.componentService.currentComponent$.subscribe((componentName) => {
      console.log('Component requested:', componentName);
      if (this.container) {
        this.switchComponent(componentName);
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('Initializing default component');
    this.switchComponent('PublicacoesRecentesComponent');
  }

  switchComponent(componentName: string): void {
    if (!this.container) {
      console.error('Container is not ready.');
      return;
    }

    const component = this.componentMap[componentName];
    if (component) {
      this.container.clear();
      this.container.createComponent(component, {
        environmentInjector: this.environmentInjector,
      });
      console.log('Component switched to:', componentName);
    } else {
      console.error('Component not found:', componentName);
    }
  }
}
