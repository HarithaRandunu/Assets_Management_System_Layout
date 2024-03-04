import { Component } from '@angular/core';
import { Asset } from './asset';

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrl: './asset-card.component.scss'
})
export class AssetCardComponent {
  asset: Asset = {};

}
