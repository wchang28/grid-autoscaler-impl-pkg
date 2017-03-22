"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getImplementationFromRequest(req, getImpl) {
    return new Promise(function (resolve, reject) {
        getImpl(req)
            .then(function (impl) {
            var o = impl;
            resolve(o);
        }).catch(function (err) {
            reject(err);
        });
    });
}
function getRequestHandlerForImplementation(getImpl, handler) {
    return function (req, res) {
        getImplementationFromRequest(req, getImpl)
            .then(function (implementation) {
            return handler(req, implementation);
        }).then(function (ret) {
            res.jsonp(ret);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    };
}
exports.getRequestHandlerForImplementation = getRequestHandlerForImplementation;
