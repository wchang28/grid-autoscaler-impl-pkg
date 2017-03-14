import {IAutoScalerImplementation} from 'autoscalable-grid';
import * as express from 'express';
import * as core from 'express-serve-static-core';

export type AutoScalerImplementationFactory = (options?: any) => Promise<IAutoScalerImplementation>;
export type GetAutoScalerImplementationProc = (req: express.Request) => Promise<IAutoScalerImplementation>;
export type AutoScalerImplementationRouterFactory = (getImplProc: GetAutoScalerImplementationProc) => Promise<express.Router>;

export interface AutoScalerImplementationPackageExport {
    factory: AutoScalerImplementationFactory;
    routerFactory?: AutoScalerImplementationRouterFactory;
}
