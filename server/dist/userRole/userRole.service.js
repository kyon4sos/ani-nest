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
exports.UserRoleService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const constants_1 = require("../constants");
const role_entity_1 = require("../role/role.entity");
let UserRoleService = class UserRoleService {
    constructor(userRoleRepository) {
        this.userRoleRepository = userRoleRepository;
    }
};
UserRoleService = __decorate([
    common_2.Injectable(),
    __param(0, common_1.Inject(constants_1.USER_ROLE_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UserRoleService);
exports.UserRoleService = UserRoleService;
//# sourceMappingURL=userRole.service.js.map