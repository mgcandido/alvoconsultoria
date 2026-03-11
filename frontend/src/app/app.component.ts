import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  template: `
    <div class="app-layout">
      <app-header (menuToggle)="toggleSidebar()" />
      
      <div class="app-body">
        <app-sidebar [isOpen]="sidebarOpen" (close)="sidebarOpen = false" />
        
        <main class="main-content">
          <router-outlet />
        </main>
      </div>
      
      <app-footer />
    </div>
  `,
  styles: [`
    .app-layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .app-body {
      display: flex;
      flex: 1;
      padding-top: var(--header-height);
    }
    
    .main-content {
      flex: 1;
      padding: var(--space-2xl);
      max-width: 100%;
      overflow-x: hidden;
      
      @media (min-width: 1024px) {
        margin-left: var(--sidebar-width);
      }
    }
  `]
})
export class AppComponent {
  sidebarOpen = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
