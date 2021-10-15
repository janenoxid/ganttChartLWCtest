public with sharing class ProjectController {
    @AuraEnabled
    public static List<Opportunity> getOpportunities(){
        try {
            return [
                SELECT Name, Start_Date__c, End_Date__c, StageName, Account, Exhibition__c
                FROM Opportunity
                WITH SECURITY ENFORCED
                ORDER BY Name
            ]
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    // public ProjectController() {

    // }
}
