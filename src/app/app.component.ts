import { Component } from '@angular/core'

import { UserComponent } from './components/user.component'
import { LargeTextComponent } from './components/large-text.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, LargeTextComponent],
  template: `
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="/favicon.ico"
            alt="Logo"
            width="24"
            height="24"
            class="d-inline-block align-text-top me-1"
          />
          Hello, Angular v17!
        </a>
      </div>
    </nav>

    <main class="container py-3">
      <app-user />

      <hr />

      <app-large-text />
    </main>
  `
})
export class AppComponent {}
