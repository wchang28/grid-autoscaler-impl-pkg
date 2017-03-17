import {IAutoScalerImplementation} from 'autoscalable-grid';
import * as express from 'express';
import * as core from 'express-serve-static-core';

export type AutoScalerImplementationOnChangeHandler = () => void;
export type GetAutoScalerImplementationProc = (req: express.Request) => Promise<IAutoScalerImplementation>;

export type AutoScalerImplementationFactory = (getImpl: GetAutoScalerImplementationProc, options?: any, onChange?: AutoScalerImplementationOnChangeHandler) => Promise<[IAutoScalerImplementation, express.Router]>;

export interface AutoScalerImplementationPackageExport {
    factory: AutoScalerImplementationFactory;
}

function getImplementationFromRequest<I>(req: express.Request, getImpl: GetAutoScalerImplementationProc) : Promise<I> {
    return new Promise<I>((resolve: (value: I) => void, reject: (err: any) => void) => {
        getImpl(req)
        .then((impl: IAutoScalerImplementation) => {
            let o: any = impl;
            resolve(o);
        }).catch((err: any) => {
            reject(err);
        });
    });
}

export interface ImplementationHandler<I> {
    (implementation: I) : Promise<any>;
}

export function getRequestHandlerForImplementation<I>(getImpl: GetAutoScalerImplementationProc, handler: ImplementationHandler<I>) : express.RequestHandler {
    return (req: express.Request, res: express.Response) => {
        getImplementationFromRequest<I>(req, getImpl)
        .then((implementation: I) => {
            return handler(implementation);
        }).then((ret: any) => {
            res.jsonp(ret);
        }).catch((err: any) => {
            res.status(400).json(err);
        })
    };
}