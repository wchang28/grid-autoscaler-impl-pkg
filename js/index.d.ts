/// <reference types="express" />
import { IAutoScalerImplementation } from 'autoscalable-grid';
import * as express from 'express';
export declare type AutoScalerImplementationOnChangeHandler = () => void;
export declare type GetAutoScalerImplementationProc = (req: express.Request) => Promise<IAutoScalerImplementation>;
export declare type AutoScalerImplementationFactory = (getImpl: GetAutoScalerImplementationProc, options?: any, onChange?: AutoScalerImplementationOnChangeHandler) => Promise<[IAutoScalerImplementation, express.Router]>;
export interface AutoScalerImplementationPackageExport {
    factory: AutoScalerImplementationFactory;
}
export interface ImplementationHandler<I> {
    (req: express.Request, implementation: I): Promise<any>;
}
export declare function getRequestHandlerForImplementation<I>(getImpl: GetAutoScalerImplementationProc, handler: ImplementationHandler<I>): express.RequestHandler;
