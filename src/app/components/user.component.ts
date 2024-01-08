import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { GamesComponent } from './games.component'
import { type Game } from '../interfaces/game.interface'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html'
})
export class UserComponent {
  username = 'John Doe'
  isLoggedIn = true
  favoriteGame?: Game
}
