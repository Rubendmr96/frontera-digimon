import { Component, OnInit } from '@angular/core';
import { DigidigitsService } from 'src/app/servicios/digidigits.service';

@Component({
  selector: 'app-digi-digits',
  templateUrl: './digi-digits.component.html',
  styleUrls: ['./digi-digits.component.css']
})
export class DigiDigitsComponent implements OnInit {

  rookie = []
  champion = []
  ultimate = []
  mega = []
  boss = []
  ancient = []
  spirits = []
  others = []

  constructor(private digidigitsService: DigidigitsService) { }

  ngOnInit(): void {

    this.digidigitsService.getDigidigits().subscribe((data: any) => {

      data.forEach((digimon: any) => {

        switch (digimon.clase) {
          case "rookie": this.rookie.push(digimon); break;
          case "champion": this.champion.push(digimon); break;
          case "ultimate": this.ultimate.push(digimon); break;
          case "mega": this.mega.push(digimon); break;
          case "boss": this.boss.push(digimon); break;
          case "ancient": this.ancient.push(digimon); break;
          case "spirits": this.spirits.push(digimon); break;
          case "others": this.others.push(digimon); break;
        }

      });

    })

  }

}
