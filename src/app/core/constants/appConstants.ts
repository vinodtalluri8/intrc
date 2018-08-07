/**
 * This file should contains all constants
 * which are required for application
 */

import { HttpHeaders } from '@angular/common/http';

export const appConstants = {

    getHeaderOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': '*'
        }),
        withCredentials: false
    },
    postHeaderOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': '*'
        }),
        withCredentials: false
    }
};
