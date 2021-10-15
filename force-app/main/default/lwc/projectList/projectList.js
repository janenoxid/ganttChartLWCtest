import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';

import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import START_DATE_FIELD from '@salesforce/schema/Opportunity.Start_Date__c';
import END_DATE_FIELD from '@salesforce/schema/Opportunity.End_Date__c';
import EXHIBITION_FIELD from '@salesforce/schema/Opportunity.Exhibition__c';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.Account';
import getOpportunities from '@salesforce/apex/ProjectController.getOpportunities';

const COLUMNS = [
    { label: 'Project Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Start Date', fieldName: START_DATE_FIELD.fieldApiName, type: 'date' },
    { label: 'End Date', fieldName: END_DATE_FIELD.fieldApiName, type: 'date' },
    { label: 'Exhibition', fieldName: EXHIBITION_FIELD.fieldApiName, type: 'text' },
    { label: 'Stage', fieldName: STAGE_FIELD.fieldApiName, type: 'text' },
    { label: 'Account', fieldName: ACCOUNT_FIELD.fieldApiName, type: 'text' },
];


export default class ProjectList extends LightningElement {
    columns = COLUMNS;
    @wire(getOpportunities)
    opportunities;
    get errors() {
        return (this.opportunities.error) ?
            reduceErrors(this.opportunities.error) : [];
    }
}