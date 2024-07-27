import { ControllerDto } from './controller.dto';
import { AcService } from './ac.service';
export declare class AcController {
    private readonly service;
    constructor(service: AcService);
    devices(): {
        devices: {
            ip: string;
            addr: number;
            isActive: boolean;
            name: string;
        }[];
    };
    deviceController(data: ControllerDto, res: Response): void;
}
