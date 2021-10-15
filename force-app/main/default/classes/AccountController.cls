public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Name, Location__c // not sure if this needs the c, but these look like API names, so I'm guessing so
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
        
    }
}