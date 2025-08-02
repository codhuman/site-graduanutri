// src/app/services/component.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Garante que o serviço seja singleton
})
export class ComponentService {
  // Variável de estado global usando BehaviorSubject para reatividade
  private currentComponentSubject = new BehaviorSubject<string>('PublicacoesRecentesComponent');
  // private currentComponentSubject = new BehaviorSubject<string>('T08So01Linux03Cmd01PwdComponent');

  // Observable para acompanhar mudanças do componente atual
  currentComponent$ = this.currentComponentSubject.asObservable();

  // Método para atualizar o componente atual
  setCurrentComponent(componentName: string) {
    console.log('Setting current component to:', componentName);
    this.currentComponentSubject.next(componentName);
  }
}
