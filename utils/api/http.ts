import { queryStringify } from '../queryStringify'
export enum Methods {
    GET ='GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE ='DELETE'
}


type TOptions = {
    method?: Methods;
    timeout?: number;
    data?: any;
    headers?: any
};

class HTTPTransport {
    get = (url: string, options: TOptions = {}) => {
        return this.request(url, {...options, method: Methods.GET}, options.timeout);
    };

    post = (url: string, options: TOptions = {}) => {
        return this.request(url, {...options, method: Methods.POST}, options.timeout);
    };

    put = (url: string, options: TOptions = {}) => {
        return this.request(url, {...options, method: Methods.PUT}, options.timeout);
    };

    delete = (url: string, options: TOptions = {}) => {
        return this.request(url, {...options, method: Methods.DELETE}, options.timeout);
    };

    private request = (url: string, options : TOptions = {}, timeout = 5000) => {
        const {headers = {}, method, data} = options;

        return new Promise(function(resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === Methods.GET;

            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}