// const METHODS = {
//     GET: 'GET',
//     POST: 'POST',
//     PUT: 'PUT',
//     DELETE: 'DELETE',
// };
//
// type TOptionsData = Record<string, string | number>
// type TOptions = {
//     headers?: Record<string, string>,
//     data?: TOptionsData,
//     method?: string,
//     timeout?: number
// }
// type HTTPMethod = (url: string, options?: TOptions) => Promise<unknown>
// type HTTPRequest = (url: string, options?: TOptions, timeout?: number) => Promise<unknown | void>
//
// // Самая простая версия. Реализовать штучку со всеми проверками им предстоит в конце спринта
// // Необязательный метод
// function queryStringify(data: TOptionsData): string {
//     if (typeof data !== 'object') {
//         throw new Error('Data must be object');
//     }
//
//     // Здесь достаточно и [object Object] для объекта
//     const keys = Object.keys(data);
//     return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
// }
//
// export default class HTTPTransport {
//     static get: HTTPMethod = (url = '', options = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);
//
//     static post: HTTPMethod = (url = '', options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);
//
//     static put: HTTPMethod = (url = '', options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
//
//     static delete: HTTPMethod = (url = '', options = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
//
//     static request: HTTPRequest = (url = '', options = {}, timeout = 5000): Promise<unknown | void> => {
//         const { headers = {}, method, data } = options;
//
//         return new Promise((resolve, reject) => {
//             if (!method) {
//                 // eslint-disable-next-line prefer-promise-reject-errors
//                 reject('No method');
//                 return;
//             }
//
//             // eslint-disable-next-line no-undef
//             const xhr = new XMLHttpRequest();
//             const isGet = method === METHODS.GET;
//
//             xhr.open(
//                 method,
//                 isGet && !!data
//                     ? `${url}${queryStringify(data)}`
//                     : url,
//             );
//             Object.keys(headers).forEach((key) => {
//                 xhr.setRequestHeader(key, headers[key]);
//             });
//
//             // eslint-disable-next-line func-names
//             xhr.onload = function () {
//                 resolve(xhr);
//             };
//
//             xhr.onabort = reject;
//             xhr.onerror = reject;
//
//             xhr.timeout = timeout;
//             xhr.ontimeout = reject;
//
//             if (isGet || !data) {
//                 xhr.send();
//             } else {
//                 xhr.send(JSON.stringify(data));
//             }
//         });
//     };
// }



const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data) {
    // Можно делать трансформацию GET-параметров в отдельной функции
    if (!data) {
        return '';
    }

    return '?' + Object.entries(data).map(entry => entry.join('=')).join('&');
}

class HTTPTransport {
    get = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    post = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    put = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url, options, timeout = 5000) => {
        const {method, headers, data} = options;

        if (method === METHODS.GET) {
            url += queryStringify(data);
        }

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.timeout = timeout;
            xhr.headers = headers;

            xhr.onload = function() {
                resolve(xhr);
            };


            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
