"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcController = void 0;
const common_1 = require("@nestjs/common");
const controller_dto_1 = require("./controller.dto");
const swagger_1 = require("@nestjs/swagger");
const ac_service_1 = require("./ac.service");
let AcController = class AcController {
    constructor(service) {
        this.service = service;
    }
    devices() {
        console.log('我在这');
        return { devices: this.service.getDevices().map((data) => ({ ip: data.ip, addr: data.addr, isActive: data.isActive, name: data.name })) };
    }
    deviceController(data, res) {
        console.log('控制', data);
        switch (data.type) {
            case '开': {
                this.service.open(data.addr);
                break;
            }
            case '关': {
                this.service.close(data.addr);
                break;
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
            default:
        }
        res.status(common_1.HttpStatus.OK).send({ message: '操作成功' });
    }
};
exports.AcController = AcController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '获取所有设备',
        type: [controller_dto_1.DevicesResponse],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AcController.prototype, "devices", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The record has been successfully created.',
        type: controller_dto_1.ContollerResponse,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [controller_dto_1.ControllerDto, Response]),
    __metadata("design:returntype", void 0)
], AcController.prototype, "deviceController", null);
exports.AcController = AcController = __decorate([
    (0, common_1.Controller)('ac'),
    __metadata("design:paramtypes", [ac_service_1.AcService])
], AcController);
//# sourceMappingURL=ac.controller.js.map