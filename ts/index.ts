import {IAutoScalerImplementation} from 'autoscalable-grid';
import * as express from 'express';
import * as core from 'express-serve-static-core';

export type AutoScalerImplementationOnChangeHandler = () => void;
export type AutoScalerImplementationFactory = (options?: any, onChange?: AutoScalerImplementationOnChangeHandler) => Promise<IAutoScalerImplementation>;
export type GetAutoScalerImplementationProc = (req: express.Request) => Promise<IAutoScalerImplementation>;
export type AutoScalerImplementationRouterFactory = (getImplProc: GetAutoScalerImplementationProc) => Promise<express.Router>;

export interface AutoScalerImplementationPackageExport {
    factory: AutoScalerImplementationFactory;
    routerFactory?: AutoScalerImplementationRouterFactory;
}
