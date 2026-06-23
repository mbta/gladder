import { Consist } from "src/data";
import { DirectionId, RouteId } from "src/models/route";
import { StationId } from "src/models/stop";

export interface PredictionsSelection {
  stationId: StationId;
  directionId: DirectionId;
}

export interface SideBarSelection {
  routeId: RouteId;
  consist: Consist;
}
