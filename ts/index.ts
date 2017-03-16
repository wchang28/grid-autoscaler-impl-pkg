import {IAutoScalerImplementation} from 'autoscalable-grid';
import * as express from 'express';
import * as core from 'express-serve-static-core';

export type AutoScalerImplementationOnChangeHandler = () => void;
export type GetAutoScalerImplementationProc = (req: express.Request) => Promise<IAutoScalerImplementation>;

export type AutoScalerImplementationFactory = (getImpl: GetAutoScalerImplementationProc, options?: any, onChange?: AutoScalerImplementationOnChangeHandler) => Promise<[IAutoScalerImplementation, express.Router]>;

export interface AutoScalerImplementationPackageExport {
    factory: AutoScalerImplementationFactory;
}
