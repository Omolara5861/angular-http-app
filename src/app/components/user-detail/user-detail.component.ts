import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CustomResponse } from '../../interfaces/response';
import { User } from '../../interfaces/user';
import  * as Leaflet  from 'leaflet';
import { Coordinates } from '../../interfaces/coordinates';

/** @Mode enum that stores the constant mode/state for the user details form*/
enum Mode {
  Edit = 'edit',
  Locked = 'locked'
}

/**@BtnText is a literal type of the button. The btn text/label must either be Edit or Save Changes*/
type BtnText = 'edit' | 'save changes';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userDetails: User;
  btnText: BtnText = 'edit';
  mode: Mode = Mode.Locked;

  /**@markerIcon property create the maker icon on the map */
  markerIcon = new Leaflet.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconSize: [32, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    /** This is the first method of getting a specific user details. Getting the user this way throws a TypeError of 'undefined' because the component view is trying to display the data in property @userDetails before it is actually fetched. In other words the user details page is loaded before the data is fetched*/

    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   this.userService.getUser(params.get('uuid')!).subscribe((user: User) => this.user = user);
    // })

    /** This method is a cleaner and better method. With the help of @resolvedUser resolver, the user details page only loads when the data has been fetched. The returned data is casted to type @User */
    this.userDetails = (<User>(this.activatedRoute.snapshot.data['resolvedUser'].results[0]));

    //Displays on the page
    this.loadMap(this.userDetails.coordinates)
  }

  /**Method that handles the mode/state of app and the button text */
  onChangeMode(): void {
    this.mode=  this.mode === 'edit' ? Mode.Locked : Mode.Edit;
    this.btnText = this.mode === 'edit' ? 'save changes': 'edit';
  }

/** Method that creates the map from @leaflet library.*/
  private loadMap(coordinate: Coordinates): void {
    /** @map creates the map and set it's zoom level and coordinates*/
    const map = Leaflet.map('map', {
      center: [coordinate.latitude, coordinate.longitude],
      zoom: 8
    });

    /** @mainLayer  sets/creates the map tile*/
    const mainLayer = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      maxZoom:30,
      crossOrigin: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(map);

    /** @marker creates the marker displayed on the map and set the coordinates it should be on */
    const marker = Leaflet.marker([coordinate.latitude, coordinate.longitude], { icon: this.markerIcon });

    /** Adds marker to map and displays the user's first name as a popup on the marker */
    marker.addTo(map).bindPopup(`${this.userDetails.firstName}'s Location`).openPopup();
  }
}
