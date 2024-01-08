import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommentsComponent } from './comments.component'

@Component({
  selector: 'app-large-text',
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  templateUrl: './large-text.component.html'
})
export class LargeTextComponent {}
