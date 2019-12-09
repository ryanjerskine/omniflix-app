import { Component } from '@angular/core';
import { sideNavAnimation, sideNavContainerAnimation } from './sidenav.animations';

@Component({
  selector: 'omni-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [sideNavAnimation, sideNavContainerAnimation]
})
export class AppComponent {
  isOpen = true;
  title = 'omniflix';

  toggle() {
    this.isOpen = !this.isOpen;
    setTimeout(() => window.dispatchEvent(new Event('resize')), 300);
  }
}
