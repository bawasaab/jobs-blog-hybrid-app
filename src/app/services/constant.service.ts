import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConstantService {

    // local
    // public baseUrl: string = `http://localhost:3000/api`;

	// live
	public baseUrl: string = `https://www.jobsnplacements.com/api`;

    public apiBaseUrl: string = `${this.baseUrl}`;

    constructor() { }
}
