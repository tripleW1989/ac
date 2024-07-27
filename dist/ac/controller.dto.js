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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesResponse = exports.ContollerResponse = exports.ControllerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ControllerDto {
}
exports.ControllerDto = ControllerDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ControllerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['开', '关', '设置温度'] }),
    __metadata("design:type", String)
], ControllerDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ControllerDto.prototype, "addr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '用于设置温度,调高,调低温度' }),
    __metadata("design:type", Number)
], ControllerDto.prototype, "value", void 0);
class ContollerResponse {
}
exports.ContollerResponse = ContollerResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ContollerResponse.prototype, "result", void 0);
class DevicesResponse {
}
exports.DevicesResponse = DevicesResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], DevicesResponse.prototype, "devices", void 0);
//# sourceMappingURL=controller.dto.js.map