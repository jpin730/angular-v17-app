import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

import { type Game } from '../interfaces/game.interface'

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html'
})
export class GamesComponent {
  @Input()
  favoriteGame?: Game

  @Output() favoriteGameSelected = new EventEmitter<Game>()

  games: Game[] = [
    { id: 1, name: 'Game 1' },
    { id: 2, name: 'Game 2' },
    { id: 3, name: 'Game 3' }
  ]
}
