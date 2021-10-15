import { LightningElement, track } from 'lwc';

export default class ExhibitionsData extends LightningElement {
    @track
    venues = [
        {Id: 1,"startDate":new Date("2/10/2020"),"endDate":new Date("5/31/2020"),"exhibitionName":"American Perspectives","stage":"Completed", "venueName":"American Folk Art Museum"},
        {Id: 2,"startDate":new Date("5/22/2021"),"endDate":new Date("8/28/2021"),"exhibitionName":"American Perspectives","stage":"Completed", "venueName":"Grand Rapids Art Museum"},
        {Id: 3,"startDate":new Date("10/2/2021"),"endDate":new Date("1/2/2022"),"exhibitionName":"American Perspectives","stage":"Approved", "venueName":"Vero Beach Museum of Art"},
        {Id: 4,"startDate":new Date("2/2/2022"),"endDate":new Date("5/22/2022"),"exhibitionName":"American Perspectives","stage":"Application", "venueName":"Cummer Museum of Art and Gardens"},
        {Id: 5,"startDate":new Date("6/16/2022"),"endDate":new Date("9/5/2022"),"exhibitionName":"American Perspectives","stage":"Approved", "venueName":"Asheville Art Museum"},
        {Id: 6,"startDate":new Date("1/15/2019"),"endDate":new Date("4/14/2019"),"exhibitionName":"Black Refractions","stage":"Completed", "venueName":"Museum of the African Diaspora"},
        {Id: 7,"startDate":new Date("5/24/2019"),"endDate":new Date("8/18/2019"),"exhibitionName":"Black Refractions","stage":"Completed", "venueName":"Gibbes Museum of Art"},
        {Id: 8,"startDate":new Date("9/13/2019"),"endDate":new Date("12/8/2019"),"exhibitionName":"Black Refractions","stage":"Completed", "venueName":"Kalamazoo Institute of Arts"},
        {Id: 9,"startDate":new Date("1/17/2020"),"endDate":new Date("4/12/2020"),"exhibitionName":"Black Refractions","stage":"Completed", "venueName":"Smith College Museum of Art"},
        {Id: 10,"startDate":new Date("1/13/2021"),"endDate":new Date("4/10/2021"),"exhibitionName":"Black Refractions","stage":"Completed", "venueName":"Utah Museum of Fine Arts"},
        {Id: 11,"startDate":new Date("5/22/2021"),"endDate":new Date("8/15/2021"),"exhibitionName":"Black Refractions","stage":"Approved", "venueName":"Frye Art Museum"},
        {Id: 12,"startDate":new Date("8/10/2018"),"endDate":new Date("12/9/2018"),"exhibitionName":"Border Cantos","stage":"Completed", "venueName":"Amarillo Art Museum"},
        {Id: 13,"startDate":new Date("2/18/2017"),"endDate":new Date("4/24/2017"),"exhibitionName":"Border Cantos","stage":"Completed", "venueName":"Crystal Bridges Museum of American Art"},
        {Id: 14,"startDate":new Date("1/18/2019"),"endDate":new Date("3/24/2019"),"exhibitionName":"Border Cantos","stage":"Completed", "venueName":"Samek Art Museum"},
        {Id: 15,"startDate":new Date("5/28/2019"),"endDate":new Date("9/21/2019"),"exhibitionName":"Border Cantos","stage":"Completed", "venueName":"Missoula Art Museum"},
        {Id: 16,"startDate":new Date("2/12/2021"),"endDate":new Date("5/9/2021"),"exhibitionName":"Border Cantos","stage":"Completed", "venueName":"Hudson River Museum"},
        {Id: 17,"startDate":new Date("5/30/2021"),"endDate":new Date("9/5/2021"),"exhibitionName":"Border Cantos","stage":"Approved", "venueName":"Westmoreland Museum of American Art"},
        {Id: 18,"startDate":new Date("2/19/2022"),"endDate":new Date("6/5/2022"),"exhibitionName":"Border Cantos","stage":"Application", "venueName":"Figge Art Museum"},
        {Id: 19,"startDate":new Date("7/21/2022"),"endDate":new Date("10/24/2022"),"exhibitionName":"Border Cantos","stage":"Approved", "venueName":"Asheville Art Museum"},
        {Id: 20,"startDate":new Date("8/1/2022"),"endDate":new Date("10/31/2022"),"exhibitionName":"Border Cantos","stage":"In Conversation", "venueName":"Van Every / Smith Galleries"},
        {Id: 21,"startDate":new Date("12/19/2022"),"endDate":new Date("4/30/2023"),"exhibitionName":"Border Cantos","stage":"In Conversation", "venueName":"Center for Arts and Letters (Rockhurst)"},
        {Id: 22,"startDate":new Date("3/19/2022"),"endDate":new Date("7/10/2022"),"exhibitionName":"Nellie Mae Rowe","stage":"Application", "venueName":"Springfield Museum of Art"},
        {Id: 23,"startDate":new Date("9/1/2022"),"endDate":new Date("12/31/2022"),"exhibitionName":"Nellie Mae Rowe","stage":"In Conversation", "venueName":"Brooklyn Museum"},
        {Id: 24,"startDate":new Date("1/27/2023"),"endDate":new Date("5/1/2023"),"exhibitionName":"Nellie Mae Rowe","stage":"Application", "venueName":"Hunter Museum of American Art"},
        {Id: 25,"startDate":new Date("8/23/2021"),"endDate":new Date("11/19/2021"),"exhibitionName":"Will Wilson","stage":"Approved", "venueName":"Denison Museum"},
        {Id: 26,"startDate":new Date("7/9/2022"),"endDate":new Date("9/11/2022"),"exhibitionName":"Will Wilson","stage":"Application", "venueName":"Delaware Museum"},
        {Id: 27,"startDate":new Date("10/28/2022"),"endDate":new Date("2/12/2023"),"exhibitionName":"Will Wilson","stage":"Application", "venueName":"Mennello Museum of American Art"},
        {Id: 28,"startDate":new Date("2/1/2023"),"endDate":new Date("5/31/2023"),"exhibitionName":"Will Wilson","stage":"In Conversation", "venueName":"James Museum of Western & Wildlife"},
        {Id: 29,"startDate":new Date("3/6/2023"),"endDate":new Date("5/28/2023"),"exhibitionName":"Will Wilson","stage":"In Conversation", "venueName":"Dubuque Museum of Art"},
        {Id: 30,"startDate":new Date("8/18/2023"),"endDate":new Date("12/2/2023"),"exhibitionName":"Will Wilson","stage":"Application", "venueName":"Yellowstone Art Museum"},
        {Id: 31,"startDate":new Date("1/3/2024"),"endDate":new Date("4/4/2024"),"exhibitionName":"Will Wilson","stage":"Application", "venueName":"McClung Museum of Natural History and Culture"},
        {Id: 32,"startDate":new Date("10/24/2020"),"endDate":new Date("1/17/2021"),"exhibitionName":"Cross Pollination","stage":"Completed", "venueName":"Cummer Museum of Art and Gardens"},
        {Id: 33,"startDate":new Date("2/19/2021"),"endDate":new Date("5/23/2021"),"exhibitionName":"Cross Pollination","stage":"Completed", "venueName":"Reynolda House Museum of American Art"},
        {Id: 34,"startDate":new Date("6/12/2021"),"endDate":new Date("10/31/2021"),"exhibitionName":"Cross Pollination","stage":"Approved", "venueName":"Thomas Cole National Historic Site"},
        {Id: 35,"startDate":new Date("6/12/2021"),"endDate":new Date("10/31/2021"),"exhibitionName":"Cross Pollination","stage":"Approved", "venueName":"Olana Partnership at Olana State Historic Site"},
        {Id: 36,"startDate":new Date("11/20/2021"),"endDate":new Date("3/21/2022"),"exhibitionName":"Cross Pollination","stage":"Approved", "venueName":"Crystal Bridges Museum of American Art"},
        {Id: 37,"startDate":new Date("11/21/2020"),"endDate":new Date("5/24/2021"),"exhibitionName":"Companion Species","stage":"Completed", "venueName":"Crystal Bridges Museum of American Art"},
        {Id: 38,"startDate":new Date("10/18/2021"),"endDate":new Date("12/30/2021"),"exhibitionName":"Companion Species","stage":"Approved", "venueName":"Chazen Museum of Art"},
        {Id: 39,"startDate":new Date("3/17/2022"),"endDate":new Date("6/19/2022"),"exhibitionName":"Companion Species","stage":"Application", "venueName":"Yellowstone Art Musuem"},
        {Id: 40,"startDate":new Date("5/19/2022"),"endDate":new Date("7/30/2022"),"exhibitionName":"Companion Species","stage":"In Conversation", "venueName":"Ulrich Museum of Art"},
        {Id: 41,"startDate":new Date("7/1/2022"),"endDate":new Date("10/31/2022"),"exhibitionName":"Companion Species","stage":"In Conversation", "venueName":"Katonah Museum of Art"},
        {Id: 42,"startDate":new Date("2/4/2023"),"endDate":new Date("4/30/2023"),"exhibitionName":"Will Wilson","stage":"In Conversation", "venueName":"Albany Museum of Art"}];
        
        // venueStatus = { // can I change this to venue stage? where all does 'taskStatus' exist? ---- I would also want to add a column for project manager and make it possible to format by that.
        //     "In Conversation" : "bar-conversation", 
        //     "Confirmed" : "bar-confirmed",
        //     "Application" : "bar-application",
        //     "Approved" : "bar-approved",
        //     "Completed" : "bar-completed",
        //     "Canceled" : "bar-canceled",
        //     "Ineligible" : "bar-ineligible" 
        // };
        
        // exhibitionNames = [ "Border Cantos", "American Perspectives", "Black Refractions", "Nellie Mae Rowe", "Will Wilson", "Cross Pollination", "Companion Species" ]; // can I change this to exhibition name? where all does 'taskNames' exist?
        
        // // venues.sort(function(a, b) {
        // //     return a.endDate - b.endDate;
        // // });
        // // maxDate = venues[venues.length - 1].endDate;
        // // venues.sort(function(a, b) {
        // //     return a.startDate - b.startDate;
        // // });
        // minDate = venues[0].startDate;
        
        // format = "%b '%y"; // this is where I change the format -- not in the other file, apparently. 
        
        // gantt = d3.gantt().exhibitions(exhibitionNames).venueStatus(venueStatus).tickFormat(format);
        // gantt(venues)

}