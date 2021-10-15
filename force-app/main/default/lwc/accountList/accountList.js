import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import LOCATION_FIELD from '@salesforce/schema/Account.Location__c';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'LOCATION', fieldName: LOCATION_FIELD.fieldApiName, type: 'text' }
];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getAccounts)
    accounts;
    get errors() {
        return (this.accounts.error) ?
            reduceErrors(this.accounts.error) : [];
    }
}