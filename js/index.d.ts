/// <reference types="es6-promise" />
/// <reference types="express" />
import { IAutoScalerImplementation } from 'autoscalable-grid';
import * as express from 'express';
export declare type AutoScalerImplementationFactory = (options?: any) => Promise<IAutoScalerImplementation>;
export declare type GetAutoScalerImplementationProc = (req: express.Request) => Promise<IAutoScalerImplementation>;
export declare type AutoScalerImplementationRouterFactory = (getImplProc: GetAutoScalerImplementationProc) => Promise<express.Router>;
export interface AutoScalerImplementationPackageExport {
    factory: AutoScalerImplementationFactory;
    routerFactory?: AutoScalerImplementationRouterFactory;
}
