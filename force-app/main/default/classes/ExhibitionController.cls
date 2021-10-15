public with sharing class ExhibitionController {
    @AuraEnabled
    public static List<Opportunity> getOpportunities(){
        try {
            return [
                SELECT Name, StartDate, EndDate, Account, Exhibition
                FROM Opportunity
                WITH SECURITY ENFORCED
                ORDER BY Name
            ]
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    // public ExhibitionController() {

    // }
}
