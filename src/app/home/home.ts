import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingServices } from "../housing";
import { HousingLocationInfo } from "../housinglocation";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  templateUrl: "./home.html",
  styleUrls: ["./home.css"],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingServices = inject(HousingServices);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
