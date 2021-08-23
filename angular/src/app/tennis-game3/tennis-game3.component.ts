import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TennisGame} from '../TennisGame';
import {FormControl, FormGroup} from '@angular/forms';
import {Zeus} from './zeus';

@Component({
  selector: 'app-tennis-game3',
  templateUrl: './tennis-game3.component.html',
  styleUrls: ['./tennis-game3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TennisGame3Component implements OnInit, TennisGame {
  private p2 = 0;
  private p1 = 0;
  private p1N = 'player1';
  private p2N = 'player2';
  public tennisGameForm = new FormGroup({
    player1Score: new FormControl(0),
    player2Score: new FormControl(0)
  });
  public overallScore = '';

  constructor(private zeus: Zeus) { }

  ngOnInit() {
  }

  wonPoint(playerName: string) {
    if (playerName === 'player1') {
      this.p1 += 1;
    } else {
      this.p2 += 1;
    }
  }

  getScore() {
    let s: string;
    try {
      if (!Number.isInteger(this.p1) || !Number.isInteger(this.p2) || this.p1 < 0 || this.p1 === null || this.p2 < 0 || this.p2 === null) {
        return 'Invalid Score';
      }
      return this.zeus.getLightning2(s, this.p1, this.p2, this.p1N, this.p2N);
    } catch (lightning) { console.log(lightning); return 'Something has gone wrong, please try again';}
  }

  onSubmit() {
    this.p1 = this.tennisGameForm.controls.player1Score.value;
    this.p2 = this.tennisGameForm.controls.player2Score.value;
    this.overallScore = this.getScore();
  }
}
