import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ContollerResponse, ControllerDto, DevicesResponse } from './controller.dto';
import { ApiResponse } from '@nestjs/swagger';
import { AcService } from './ac.service';

@Controller('ac')
export class AcController {
    constructor(private readonly service: AcService) {

    }
    @Get()
    @ApiResponse({
        status: 200,
        description: '获取所有设备',
        type: [DevicesResponse],
    })
    devices() {
        console.log('我在这')
        return { devices: this.service.getDevices().map((data) => ({ ip: data.ip, addr: data.addr, isActive: data.isActive, name: data.name })) }


    }
    @Post()
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully created.',
        type: ContollerResponse,
    })
    deviceController(@Body() data: ControllerDto, @Res() res: Response) {
        console.log('控制', data)

        switch (data.type) {
            case '开': {

                this.service.open(data.addr)
                break;
            }
            case '关': {

                this.service.close(data.addr);
                break
            }
            case '调高':
                {
                    this.service.high(data.addr, data.value);
                    break;
                }
            case '调低':
                {
                    this.service.down(data.addr, data.value);
                    break;
                }
            case '温度':
            case '温度调节':
            case '设置温度':
                {
                    this.service.set(data.addr, data.value);
                    break;
                }
            case '查询开关状态':
                {

                }
            default:

        }

        // @ts-ignore
        res.status(HttpStatus.OK).send({ message: '操作成功' });
    }
}
