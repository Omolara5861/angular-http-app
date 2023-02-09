import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CustomResponse } from '../../interfaces/response';
import { User } from '../../interfaces/user';
import  * as Leaflet  from 'leaflet';
import { Coordinates } from '../../interfaces/coordinates';

/** */
enum Mode {
  Edit = 'edit',
  Locked = 'locked'
}

type BtnText = 'edit' | 'save changes';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;
  btnText: BtnText = 'edit';
  mode: Mode = Mode.Locked;

  marker = new Leaflet.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconSize: [32, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.userService.getUser(params.get('uuid')!).subscribe((user: User) => this.user = user);
    // })
    this.user = (<User>(this.activatedRoute.snapshot.data['resolvedUser'].results[0]));
    this.loadMap(this.user.coordinates)
  }

  onChangeMode(): void {
    this.mode=  this.mode === 'edit' ? Mode.Locked : Mode.Edit;
    this.btnText = this.mode === 'edit' ? 'save changes': 'edit';
  }

/** Method that creates the map from @leaflet library.*/
  private loadMap(coordinate: Coordinates): void {
    /** */
    const map = Leaflet.map('map', {
      center: [coordinate.latitude, coordinate.longitude],
      zoom: 8
    });
    const mainLayer = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      maxZoom:30,
      crossOrigin: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(map);
    const marker = Leaflet.marker([coordinate.latitude, coordinate.longitude], { icon: this.marker });
    marker.addTo(map).bindPopup(`${this.user.firstName}'s Location`).openPopup();
  }
}
