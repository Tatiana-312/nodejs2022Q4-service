import { Injectable } from "@nestjs/common";
import { DBService } from "src/DB/db.service";

@Injectable()
export class TrackService {
  constructor(private db: DBService) {}
}