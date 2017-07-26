
$(document).ready(function ($) {

    $('#LocationOwn').on('click', function () {
        var num = $('.clonedInputlocOwn').length,
            newNum = new Number(num + 1),
            newRow = new Number(num),
            newElem = $('#entrylocOwn' + num).clone().attr('id', 'entrylocOwn' + newNum).fadeIn('slow');
        var newIda = $('#entrylocOwn' + num).find('.Sl').html(),
            newId = parseInt(newIda) + 1;

        newElem.find('.unitType').parent().attr('for', 'ID' + newId + 'UnitType');
        newElem.find('.unitType').attr('id', 'ID' + newId + 'ProductType').val('').attr('name', 'TripLocationinfo[' + newIda + '].UnitType').val('');

        newElem.find('.prdtype').parent().attr('for', 'ID' + newId + 'ProductType');
        newElem.find('.prdtype').attr('id', 'ID' + newId + 'ProductType').val('').attr('name', 'TripLocationinfo[' + newIda + '].ProductType').val('');

        // docNo - text
        newElem.find('.location').parent().attr('for', 'ID' + newId + 'LocationId');
        newElem.find('.location').attr('id', 'ID' + newId + 'LocationId').attr('name', 'TripLocationinfo[' + newIda + '].LocationId').val('');
        newElem.find('.location').attr('onChange', 'FillRate("entrylocOwn' + newNum + '")');
        // dtStart - text
        newElem.find('.doNo').parent().attr('for', 'ID' + newId + 'DONO');
        newElem.find('.doNo').attr('id', 'ID' + newId + 'DONO').val('').attr('name', 'TripLocationinfo[' + newIda + '].DONO').val('');

        // vehicleNo - text
        newElem.find('.qty').parent().attr('for', 'ID' + newId + 'Qty');
        newElem.find('.qty').attr('id', 'ID' + newId + 'Qty').val('').attr('name', 'TripLocationinfo[' + newIda + '].Qty').val('');

        newElem.find('.partyName').parent().attr('for', 'ID' + newId + 'partyName');
        newElem.find('.partyName').attr('id', 'ID' + newId + 'partyName').val('').attr('name', 'TripLocationinfo[' + newIda + '].partyName').val('');

        newElem.find('.partyTypeMain').parent().attr('for', 'ID' + newId + 'PartyTypeMain');
        newElem.find('.partyTypeMain').attr('id', 'ID' + newId + 'PartyTypeMain').val('').attr('name', 'TripLocationinfo[' + newIda + '].PartyTypeMain').val('');

        newElem.find('.partyTypeSub').parent().attr('for', 'ID' + newId + 'PartyTypeSub');
        newElem.find('.partyTypeSub').attr('id', 'ID' + newId + 'PartyTypeSub').val('').attr('name', 'TripLocationinfo[' + newIda + '].PartyTypeSub').val('');


        newElem.find('.retailerName').parent().attr('for', 'ID' + newId + 'RetailerName');
        newElem.find('.retailerName').attr('id', 'ID' + newId + 'RetailerName').val('').attr('name', 'TripLocationinfo[' + newIda + '].RetailerName').val('');

        newElem.find('.amount').parent().attr('for', 'ID' + newId + 'amount');
        newElem.find('.amount').attr('id', 'ID' + newId + 'amount').val('').attr('name', 'TripLocationinfo[' + newIda + '].amount').val('');

        // DocImage - text
        newElem.find('.address').parent().attr('for', 'ID' + newId + 'Address');
        newElem.find('.address').attr('id', 'ID' + newId + 'address').attr('name', 'TripLocationinfo[' + newIda + '].Address').val('');

        $('#entrylocOwn' + num).after(newElem);
        $('#entrylocOwn' + newNum).focus();

        $('#btnDelLocOwn').attr('disabled', false);
        newElem.find('.Sl').html(newNum);
    });

    // Location Party

    $('#LocationHire').on('click', function () {
   
        var num = $('.clonedInputlocHire').length,
            newNum = new Number(num + 1),
            newRow = new Number(num),
            newElem = $('#entrylocHire' + num).clone().attr('id', 'entrylocHire' + newNum).fadeIn('slow');
       
        var newIda = $('#entrylocHire' + num).find('.Sl').html(),
            newId = parseInt(newIda) + 1;
        
        newElem.find('.unitType').parent().attr('for', 'ID' + newId + 'UnitType');
        newElem.find('.unitType').attr('id', 'ID' + newId + 'ProductType').val('').attr('name', 'TripLocationinfo[' + newIda + '].UnitType').val('');

        newElem.find('.prdtype').parent().attr('for', 'ID' + newId + 'ProductType');
        newElem.find('.prdtype').attr('id', 'ID' + newId + 'ProductType').val('').attr('name', 'TripLocationinfo[' + newIda + '].ProductType').val('');

        // docNo - text
        newElem.find('.location').parent().attr('for', 'ID' + newId + 'LocationId');
        newElem.find('.location').attr('id', 'ID' + newId + 'LocationId').attr('name', 'TripLocationinfo[' + newIda + '].LocationId').val('');
        newElem.find('.location').attr('onChange', 'FillRate("entrylocHire' + newNum + '")');
        // dtStart - text
        newElem.find('.doNo').parent().attr('for', 'ID' + newId + 'DONO');
        newElem.find('.doNo').attr('id', 'ID' + newId + 'DONO').val('').attr('name', 'TripLocationinfo[' + newIda + '].DONO').val('');

        // vehicleNo - text
        newElem.find('.qty').parent().attr('for', 'ID' + newId + 'Qty');
        newElem.find('.qty').attr('id', 'ID' + newId + 'Qty').val('').attr('name', 'TripLocationinfo[' + newIda + '].Qty').val('');

        newElem.find('.partyName').parent().attr('for', 'ID' + newId + 'partyName');
        newElem.find('.partyName').attr('id', 'ID' + newId + 'partyName').val('').attr('name', 'TripLocationinfo[' + newIda + '].partyName').val('');

        newElem.find('.partyTypeMain').parent().attr('for', 'ID' + newId + 'PartyTypeMain');
        newElem.find('.partyTypeMain').attr('id', 'ID' + newId + 'PartyTypeMain').val('').attr('name', 'TripLocationinfo[' + newIda + '].PartyTypeMain').val('');

        newElem.find('.partyTypeSub').parent().attr('for', 'ID' + newId + 'PartyTypeSub');
        newElem.find('.partyTypeSub').attr('id', 'ID' + newId + 'PartyTypeSub').val('').attr('name', 'TripLocationinfo[' + newIda + '].PartyTypeSub').val('');

        newElem.find('.retailerName').parent().attr('for', 'ID' + newId + 'RetailerName');
        newElem.find('.retailerName').attr('id', 'ID' + newId + 'RetailerName').val('').attr('name', 'TripLocationinfo[' + newIda + '].RetailerName').val('');

        newElem.find('.amount').parent().attr('for', 'ID' + newId + 'amount');
        newElem.find('.amount').attr('id', 'ID' + newId + 'amount').val('').attr('name', 'TripLocationinfo[' + newIda + '].amount').val('');

        // DocImage - text
        newElem.find('.address').parent().attr('for', 'ID' + newId + 'Address');
        newElem.find('.address').attr('id', 'ID' + newId + 'address').attr('name', 'TripLocationinfo[' + newIda + '].Address').val('');

        $('#entrylocHire' + num).after(newElem);
        $('#entrylocHire' + newNum).focus();

        $('#btnDelLocHire').attr('disabled', false);
        newElem.find('.Sl').html(newNum);
    });

    $('#LocationParty').on('click', function () {
        var num = $('.clonedInputlocParty').length,
            newNum = new Number(num + 1),
            newRow = new Number(num), 
            newElem = $('#entrylocParty' + num).clone().attr('id', 'entrylocParty' + newNum).fadeIn('slow');
        var newIda = $('#entrylocParty' + num).find('.Sl').html(),
            newId = parseInt(newIda) + 1;

        newElem.find('.unitType').parent().attr('for', 'ID' + newId + 'UnitType');
        newElem.find('.unitType').attr('id', 'ID' + newId + 'ProductType').val('').attr('name', 'TripLocationinfo[' + newIda + '].UnitType').val('');

        newElem.find('.prdtype').parent().attr('for', 'ID' + newId + 'ProductType');
        newElem.find('.prdtype').attr('id', 'ID' + newId + 'ProductType').val('').attr('name', 'TripLocationinfo[' + newIda + '].ProductType').val('');

        // docNo - text
        newElem.find('.location').parent().attr('for', 'ID' + newId + 'LocationId');
        newElem.find('.location').attr('id', 'ID' + newId + 'LocationId').attr('name', 'TripLocationinfo[' + newIda + '].LocationId').val('');
        newElem.find('.location').attr('onChange', 'FillRate("entrylocParty' + newNum + '")');
        // dtStart - text
        newElem.find('.doNo').parent().attr('for', 'ID' + newId + 'DONO');
        newElem.find('.doNo').attr('id', 'ID' + newId + 'DONO').val('').attr('name', 'TripLocationinfo[' + newIda + '].DONO').val('');

        // vehicleNo - text
        newElem.find('.qty').parent().attr('for', 'ID' + newId + 'Qty');
        newElem.find('.qty').attr('id', 'ID' + newId + 'Qty').val('').attr('name', 'TripLocationinfo[' + newIda + '].Qty').val('');

        newElem.find('.partyName').parent().attr('for', 'ID' + newId + 'partyName');
        newElem.find('.partyName').attr('id', 'ID' + newId + 'partyName').val('').attr('name', 'TripLocationinfo[' + newIda + '].partyName').val('');

        newElem.find('.partyTypeMain').parent().attr('for', 'ID' + newId + 'PartyTypeMain');
        newElem.find('.partyTypeMain').attr('id', 'ID' + newId + 'PartyTypeMain').val('').attr('name', 'TripLocationinfo[' + newIda + '].PartyTypeMain').val('');

        newElem.find('.partyTypeSub').parent().attr('for', 'ID' + newId + 'PartyTypeSub');
        newElem.find('.partyTypeSub').attr('id', 'ID' + newId + 'PartyTypeSub').val('').attr('name', 'TripLocationinfo[' + newIda + '].PartyTypeSub').val('');

        newElem.find('.retailerName').parent().attr('for', 'ID' + newId + 'RetailerName');
        newElem.find('.retailerName').attr('id', 'ID' + newId + 'RetailerName').val('').attr('name', 'TripLocationinfo[' + newIda + '].RetailerName').val('');

        newElem.find('.amount').parent().attr('for', 'ID' + newId + 'amount');
        newElem.find('.amount').attr('id', 'ID' + newId + 'amount').val('').attr('name', 'TripLocationinfo[' + newIda + '].amount').val('');

        // DocImage - text
        newElem.find('.address').parent().attr('for', 'ID' + newId + 'Address');
        newElem.find('.address').attr('id', 'ID' + newId + 'address').attr('name', 'TripLocationinfo[' + newIda + '].Address').val('');

        $('#entrylocParty' + num).after(newElem);
        $('#entrylocParty' + newNum).focus();

        $('#btnDelLocParty').attr('disabled', false);
        newElem.find('.Sl').html(newNum);
    });




    //start: Trip Product Shortage 

    $('#btnAddShortDmage').on('click', function () {
        var num = $('.clonedInputShortDamage').length,

            newNum = new Number(num + 1),
            newRow = new Number(num),
            newElem = $('#entryShortDamage' + num).clone().attr('id', 'entryShortDamage' + newNum).fadeIn('slow');
        var newIda = $('#entryShortDamage' + num).find('.Sl').html(),
            newId = parseInt(newIda) + 1;


        newElem.find('.ProdType').parent().attr('for', 'ID' + newId + 'ProdType');
        newElem.find('.ProdType').attr('id', 'ID' + newId + 'ProductType').val('').attr('name', 'ShortageDamageList[' + newIda + '].ProdType').val('');

        // docNo - text
        newElem.find('.Quantity').parent().attr('for', 'ID' + newId + 'Quantity');
        newElem.find('.Quantity').attr('id', 'ID' + newId + 'Quantity').attr('name', 'ShortageDamageList[' + newIda + '].Quantity').val('');

        //newElem.find('.ProdType').attr('onChange', 'FillRates("entryShortDamage' + newNum + '")');
        // dtStart - text
        newElem.find('.Type').parent().attr('for', 'ID' + newId + 'Type');
        newElem.find('.Type').attr('id', 'ID' + newId + 'Type').val('').attr('name', 'ShortageDamageList[' + newIda + '].Type').val('');

 
        newElem.find('.Amount').parent().attr('for', 'ID' + newId + 'Amount');
        newElem.find('.Amount').attr('id', 'ID' + newId + 'Amount').val('').attr('name', 'ShortageDamageList[' + newIda + '].Amount').val('');


        $('#entryShortDamage' + num).after(newElem);
        $('#entryShortDamage' + newNum).focus();

        $('#btnDelShortDamage').attr('disabled', false);
        newElem.find('.Sl').html(newNum);
    });



    //start :  Trip Expenses


    $('#btnAddTripExp').on('click', function () {


        $(".ExpType").select2("destroy");
        var num = $('.clonedInputTripExp').length,

            newNum = new Number(num + 1),
            newRow = new Number(num),
            newElem = $('#entryTripExp' + num).clone().attr('id', 'entryTripExp' + newNum).fadeIn('slow');

        var newIda = $('#entryTripExp' + num).find('.Sl').html(),
            newId = parseInt(newIda) + 1;

        newElem.find('.ExpType').parent().attr('for', 'ID' + newId + 'ExpType');
        newElem.find('.ExpType').attr('id', 'ID' + newId + 'ExpType').val('').attr('name', 'ExpInfo[' + newIda + '].ExpType').val('');
        //$('.select2').select2();
        //data-plugin-selecttwo
        $("#ID" + newId + "ExpType").select2("destroy");

        newElem.find('.Amount').parent().attr('for', 'ID' + newId + 'Amount');
        newElem.find('.Amount').attr('id', 'ID' + newId + 'Amount').val('').attr('name', 'ExpInfo[' + newIda + '].Amount').val('');


        $('#entryTripExp' + num).after(newElem);
        $('#entryTripExp' + newNum).focus();

        $('#ExpInfo_0__ExpType').each(function () {
            var $this = $(this),
                opts = {};

            var pluginOptions = $this.data('plugin-options');

            $this.themePluginSelect2(opts);

            if (pluginOptions)
                opts = pluginOptions;

            $this.themePluginSelect2(opts);
        });


        //initSelect2();


        $('#btnDelTripExp').attr('disabled', false);

        newElem.find('.Sl').html(newNum);
    });


    // Fleet Product Shortage Delet
    $(document).on('click', '.btnDelShortDamage', function () {

        event.preventDefault();
        var num = $('.clonedInputShortDamage').length,

            newNum = new Number(num);

        if (newNum == 1) {

            $('.btnDelShortDamage').attr('disabled', true);
            new PNotify({
                title: 'Notification',
                text: 'Minimum fill one row!!',
                type: 'custom',
                addclass: 'notification-warning',
                icon: 'fa fa-warning'
            });

        }
        else {
            var tr = $(this).closest('tr');
            tr.addClass("bg-danger");

            tr.fadeOut(500, function () {
                var table = tr.closest('table');
                tr.remove();
                UpdateIndexFleetShortage(table);
            });
        }


    });




    $(document).on('click', '.btnDelLocOwn', function () {

        event.preventDefault();
        var num = $('.clonedInputlocOwn').length,

            newNum = new Number(num);

        if (newNum == 1) {

            $('.btnDelLocOwn').attr('disabled', true);
            new PNotify({
                title: 'Notification',
                text: 'Minimum fill one row!!',
                type: 'custom',
                addclass: 'notification-warning',
                icon: 'fa fa-warning'
            });

        }
        else {
            var tr = $(this).closest('tr');
            tr.addClass("bg-danger");

            tr.fadeOut(500, function () {
                var table = tr.closest('table');
                tr.remove();
                updateIndexes(table);
            });
        }
    });

    $(document).on('click', '.btnDelLocHire', function () {

        event.preventDefault();
        var num = $('.clonedInputlocHire').length,

            newNum = new Number(num);

        if (newNum == 1) {

            $('.btnDelLocHire').attr('disabled', true);
            new PNotify({
                title: 'Notification',
                text: 'Minimum fill one row!!',
                type: 'custom',
                addclass: 'notification-warning',
                icon: 'fa fa-warning'
            });

        }
        else {
            var tr = $(this).closest('tr');
            tr.addClass("bg-danger");

            tr.fadeOut(500, function () {
                var table = tr.closest('table');
                tr.remove();
                updateIndexesHire(table);
            });
        }


    });


    $(document).on('click', '.btnDelLocParty', function () {

        event.preventDefault();
        var num = $('.clonedInputlocParty').length,

            newNum = new Number(num);

        if (newNum == 1) {

            $('.btnDelLocParty').attr('disabled', true);
            new PNotify({
                title: 'Notification',
                text: 'Minimum fill one row!!',
                type: 'custom',
                addclass: 'notification-warning',
                icon: 'fa fa-warning'
            });

        }
        else {
            var tr = $(this).closest('tr');
            tr.addClass("bg-danger");

            tr.fadeOut(500, function () {
                var table = tr.closest('table');
                tr.remove();
                updateIndexesParty(table);
            });
        }


    });


    $('.TruckIdSelect').on('select', function () {
        var id = $(this).text();
        var truckNo = id.replace($('.TruckIdlbl').text(), '');
        $('#TruckNo').val(truckNo);
        
    });
    $('.driverId').on('select', function () {
        var id = $(this).text();
        var truckNo = id.replace($('.driverlbl').text(), '');
        $('#DriverName').val(truckNo);
        
    });
    $('.helperId').on('select', function () {
        var id = $(this).text();
        var truckNo = id.replace($('.hlperlbl').text(), '');
        $('#HelperName').val(truckNo);
        
    });


    // Fleet Prod type Shortage 

    // Update Clond Input fields Indexes
    function UpdateIndexFleetShortage(table) {
        // get every tr element except the header

        table.find("tr:gt(0)").each(function (i, row) {
            $(row).find("td:first").html(i + 1);
            var id = i + 1;
            $(row).find('.ProdType').parent().attr('for', 'ID' + id + 'ProdType');
            $(row).find('.Quantity').parent().attr('for', 'ID' + id + 'Quantity');
            $(row).find('.Type').parent().attr('for', 'ID' + id + 'Type');
            $(row).find('.Amount').parent().attr('for', 'ID' + id + 'Amount');
 
            $(row).find('.ProdType').attr('id', 'ID' + id + 'ProdType');
            $(row).find('.Quantity').attr('id', 'ID' + id + 'Quantity');
            $(row).find('.Type').attr('id', 'ID' + id + 'Type');
            $(row).find('.Amount').attr('id', 'ID' + id + 'Amount');
     
            $(row).find('.ProdType').attr('name', 'ShortageDamageList[' + id + '].ProdType');
            $(row).find('.Quantity').attr('name', 'ShortageDamageList[' + id + '].Quantity');
            $(row).find('.Type').attr('name', 'ShortageDamageList[' + id + '].Type');
            $(row).find('.Amount').attr('name', 'ShortageDamageList[' + id + '].Amount');
   ;

            $(row).attr('id', 'entryShortDamage' + id);

            // get every input and select elements
            $(row).find('input, select').each(function (j, input) {
                // check whether the id-attribute is of type _[index]__
                var id = input.name.match(/\d+/);

                // if it is an element necessary for the ModelBinder => update the name attribute
                if (id != null && id.length && id.length == 1) {
                    var attr = $(input).attr("name");
                    // replace the old index of the name attribute with the calculated index
                    var newName = attr.replace(attr.match(/\d+/), i);
                    $(input).attr("name", newName);

                }
            });
        });
    }




    // Update Clond Input fields Indexes
    function updateIndexes(table) {
        // get every tr element except the header

        table.find("tr:gt(0)").each(function (i, row) {
            $(row).find("td:first").html(i + 1);
            var id = i + 1;
            $(row).find('.unitType').parent().attr('for', 'ID' + id + 'UnitType');
            $(row).find('.prdType').parent().attr('for', 'ID' + id + 'ProductType');
            $(row).find('.location').parent().attr('for', 'ID' + id + 'LocationId');
            $(row).find('.doNo').parent().attr('for', 'ID' + id + 'DONO');
            $(row).find('.qty').parent().attr('for', 'ID' + id + 'Qty');
            $(row).find('.partyName').parent().attr('for', 'ID' + id + 'partyName');
            $(row).find('.amount').parent().attr('for', 'ID' + id + 'amount');
            $(row).find('.address').parent().attr('for', 'ID' + id + 'Address');
            $(row).find('.partyTypeMain').parent().attr('for', 'ID' + id + 'PartyTypeMain');
            $(row).find('.partyTypeSub').parent().attr('for', 'ID' + id + 'PartyTypeSub');
            $(row).find('.retailerName').parent().attr('for', 'ID' + id + 'RetailerName');

            $(row).find('.unitType').attr('id', 'ID' + id + 'UnitType');
            $(row).find('.prdType').attr('id', 'ID' + id + 'ProductType');
            $(row).find('.location').attr('id', 'ID' + id + 'LocationId');
            $(row).find('.doNo').attr('id', 'ID' + id + 'DONO');
            $(row).find('.qty').attr('id', 'ID' + id + 'Qty');
            $(row).find('.partyName').attr('id', 'ID' + id + 'partyName');
            $(row).find('.amount').attr('id', 'ID' + id + 'amount');
            $(row).find('.address').attr('id', 'ID' + id + 'Address');
            $(row).find('.partyTypeMain').attr('id', 'ID' + id + 'PartyTypeMain');
            $(row).find('.partyTypeSub').attr('id', 'ID' + id + 'PartyTypeSub');
            $(row).find('.retailerName').attr('id', 'ID' + id + 'RetailerName');
            

            $(row).find('.unitType').attr('name', 'TripLocationinfo[' + id + '].UnitType');
            $(row).find('.prdType').attr('name', 'TripLocationinfo[' + id + '].ProductType');
            $(row).find('.location').attr('name', 'TripLocationinfo[' + id + '].LocationId');
            $(row).find('.doNo').attr('name', 'TripLocationinfo[' + id + '].DONO');
            $(row).find('.qty').attr('name', 'TripLocationinfo[' + id + '].Qty');
            $(row).find('.partyName').attr('name', 'TripLocationinfo[' + id + '].partyName');
            $(row).find('.amount').attr('name', 'TripLocationinfo[' + id + '].amount');
            $(row).find('.address').attr('name', 'TripLocationinfo[' + id + '].Address');
            $(row).find('.amount').attr('class', 'form-control input-sm amount');
            $(row).find('.partyTypeMain').attr('name', 'TripLocationinfo[' + id + '].PartyTypeMain');
            $(row).find('.partyTypeSub').attr('name', 'TripLocationinfo[' + id + '].PartyTypeSub');
            $(row).find('.retailerName').attr('name', 'TripLocationinfo[' + id + '].RetailerName');
            $(row).attr('id', 'entrylocOwn' + id);

            // get every input and select elements
            $(row).find('input, select').each(function (j, input) {
                // check whether the id-attribute is of type _[index]__
                var id = input.name.match(/\d+/);

                // if it is an element necessary for the ModelBinder => update the name attribute
                if (id != null && id.length && id.length == 1) {
                    var attr = $(input).attr("name");
                    // replace the old index of the name attribute with the calculated index
                    var newName = attr.replace(attr.match(/\d+/), i);
                    $(input).attr("name", newName);

                }
            });
        });
    }



    function updateIndexesParty(table) {
        // get every tr element except the header

        table.find("tr:gt(0)").each(function (i, row) {
            $(row).find("td:first").html(i + 1);
            var id = i + 1;
            $(row).find('.unitType').parent().attr('for', 'ID' + id + 'UnitType');
            $(row).find('.prdType').parent().attr('for', 'ID' + id + 'ProductType');
            $(row).find('.location').parent().attr('for', 'ID' + id + 'LocationId');
            $(row).find('.doNo').parent().attr('for', 'ID' + id + 'DONO');
            $(row).find('.qty').parent().attr('for', 'ID' + id + 'Qty');
            $(row).find('.partyName').parent().attr('for', 'ID' + id + 'partyName');
            $(row).find('.amount').parent().attr('for', 'ID' + id + 'amount');
            $(row).find('.address').parent().attr('for', 'ID' + id + 'Address');
            $(row).find('.partyTypeMain').parent().attr('for', 'ID' + id + 'PartyTypeMain');
            $(row).find('.partyTypeSub').parent().attr('for', 'ID' + id + 'PartyTypeSub');
            $(row).find('.retailerName').parent().attr('for', 'ID' + id + 'RetailerName');

            $(row).find('.unitType').attr('id', 'ID' + id + 'UnitType');
            $(row).find('.prdType').attr('id', 'ID' + id + 'ProductType');
            $(row).find('.location').attr('id', 'ID' + id + 'LocationId');
            $(row).find('.doNo').attr('id', 'ID' + id + 'DONO');
            $(row).find('.qty').attr('id', 'ID' + id + 'Qty');
            $(row).find('.partyName').attr('id', 'ID' + id + 'partyName');
            $(row).find('.amount').attr('id', 'ID' + id + 'amount');
            $(row).find('.address').attr('id', 'ID' + id + 'Address');
            $(row).find('.partyTypeMain').attr('id', 'ID' + id + 'PartyTypeMain');
            $(row).find('.partyTypeSub').attr('id', 'ID' + id + 'PartyTypeSub');
            $(row).find('.retailerName').attr('id', 'ID' + id + 'RetailerName');


            $(row).find('.unitType').attr('name', 'TripLocationinfo[' + id + '].UnitType');
            $(row).find('.prdType').attr('name', 'TripLocationinfo[' + id + '].ProductType');
            $(row).find('.location').attr('name', 'TripLocationinfo[' + id + '].LocationId');
            $(row).find('.doNo').attr('name', 'TripLocationinfo[' + id + '].DONO');
            $(row).find('.qty').attr('name', 'TripLocationinfo[' + id + '].Qty');
            $(row).find('.partyName').attr('name', 'TripLocationinfo[' + id + '].partyName');
            $(row).find('.amount').attr('name', 'TripLocationinfo[' + id + '].amount');
            $(row).find('.address').attr('name', 'TripLocationinfo[' + id + '].Address');
            $(row).find('.amount').attr('class', 'form-control input-sm amount');
            $(row).find('.partyTypeMain').attr('name', 'TripLocationinfo[' + id + '].PartyTypeMain');
            $(row).find('.partyTypeSub').attr('name', 'TripLocationinfo[' + id + '].PartyTypeSub');
            $(row).find('.retailerName').attr('name', 'TripLocationinfo[' + id + '].RetailerName');
            $(row).attr('id', 'entrylocParty' + id);
            
            // get every input and select elements
            $(row).find('input, select').each(function (j, input) {
                // check whether the id-attribute is of type _[index]__
                var id = input.name.match(/\d+/);

                // if it is an element necessary for the ModelBinder => update the name attribute
                if (id != null && id.length && id.length == 1) {
                    var attr = $(input).attr("name");
                    // replace the old index of the name attribute with the calculated index
                    var newName = attr.replace(attr.match(/\d+/), i);
                    $(input).attr("name", newName);

                }
            });
        });
    }

    // Update Clond Input fields Indexes
    function updateIndexesHire(table) {
        // get every tr element except the header

        table.find("tr:gt(0)").each(function (i, row) {
            $(row).find("td:first").html(i + 1);
            var id = i + 1;
            $(row).find('.unitType').parent().attr('for', 'ID' + id + 'UnitType');
            $(row).find('.prdType').parent().attr('for', 'ID' + id + 'ProductType');
            $(row).find('.location').parent().attr('for', 'ID' + id + 'LocationId');
            $(row).find('.doNo').parent().attr('for', 'ID' + id + 'DONO');
            $(row).find('.qty').parent().attr('for', 'ID' + id + 'Qty');
            $(row).find('.partyName').parent().attr('for', 'ID' + id + 'partyName');
            $(row).find('.amount').parent().attr('for', 'ID' + id + 'amount');
            $(row).find('.address').parent().attr('for', 'ID' + id + 'Address');
            $(row).find('.partyTypeMain').parent().attr('for', 'ID' + id + 'PartyTypeMain');
            $(row).find('.partyTypeSub').parent().attr('for', 'ID' + id + 'PartyTypeSub');
            $(row).find('.retailerName').parent().attr('for', 'ID' + id + 'retailerName');

            $(row).find('.unitType').attr('id', 'ID' + id + 'UnitType');
            $(row).find('.prdType').attr('id', 'ID' + id + 'ProductType');
            $(row).find('.location').attr('id', 'ID' + id + 'LocationId');
            $(row).find('.doNo').attr('id', 'ID' + id + 'DONO');
            $(row).find('.qty').attr('id', 'ID' + id + 'Qty');
            $(row).find('.partyName').attr('id', 'ID' + id + 'partyName');
            $(row).find('.amount').attr('id', 'ID' + id + 'amount');
            $(row).find('.address').attr('id', 'ID' + id + 'Address');
            $(row).find('.partyTypeMain').attr('id', 'ID' + id + 'PartyTypeMain');
            $(row).find('.partyTypeSub').attr('id', 'ID' + id + 'PartyTypeSub');
            $(row).find('.retailerName').attr('id', 'ID' + id + 'RetailerName');


            $(row).find('.unitType').attr('name', 'TripLocationinfo[' + id + '].UnitType');
            $(row).find('.prdType').attr('name', 'TripLocationinfo[' + id + '].ProductType');
            $(row).find('.location').attr('name', 'TripLocationinfo[' + id + '].LocationId');
            $(row).find('.doNo').attr('name', 'TripLocationinfo[' + id + '].DONO');
            $(row).find('.qty').attr('name', 'TripLocationinfo[' + id + '].Qty');
            $(row).find('.partyName').attr('name', 'TripLocationinfo[' + id + '].partyName');
            $(row).find('.amount').attr('name', 'TripLocationinfo[' + id + '].amount');
            $(row).find('.address').attr('name', 'TripLocationinfo[' + id + '].Address');
            $(row).find('.amount').attr('class', 'form-control input-sm amount');
            $(row).find('.partyTypeMain').attr('name', 'TripLocationinfo[' + id + '].PartyTypeMain');
            $(row).find('.partyTypeSub').attr('name', 'TripLocationinfo[' + id + '].PartyTypeSub');
            $(row).find('.retailerName').attr('name', 'TripLocationinfo[' + id + '].RetailerName');
            $(row).attr('id', 'entrylocHire' + id);

            // get every input and select elements
            $(row).find('input, select').each(function (j, input) {
                // check whether the id-attribute is of type _[index]__
                var id = input.name.match(/\d+/);

                // if it is an element necessary for the ModelBinder => update the name attribute
                if (id != null && id.length && id.length == 1) {
                    var attr = $(input).attr("name");
                    // replace the old index of the name attribute with the calculated index
                    var newName = attr.replace(attr.match(/\d+/), i);
                    $(input).attr("name", newName);

                }
            });
        });
    }





    $(document).on('change', '.location', function () {
        
        var locationId = $(this).val();
        var id = $(this).closest('tr').attr('id');
      
        $.ajax
        ({
            url: "../FleetTrip/GetRateByLocation",
            //url: "@Url.Action("GetTruck", "FleetJobCard")",
         
                    //url: 'Url.Action("GetRateByLocation","FleetTrip")',
                    type: 'POST',
                    datatype: 'application/json',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        locationId: +locationId
                    }),
                    success: function (result) {
                        if (result == '[]' || result == null || result == 'undefined') {
                          
                            $('#' + id).find('.rate').val(0);
                            $('#' + id).find('.qty').val('');
                            $('#' + id).find('.amount').val('');
                        }
                        else {
                            $.each($.parseJSON(result), function (i, sub) {
                              
                                $('#' + id).find('.rate').val(sub.Rate);
                                $('#' + id).find('.qty').val('');
                                $('#' + id).find('.amount').val('');
                            });
                        }
                        
                       
                    }

                });

    });
    $(document).on('change', '.qty', function () {

        var qty = $(this).closest('.qty').val();
        var rate = $(this).closest('tr').find('.rate').val();
        var total = qty * rate;
        $(this).closest('tr').find('.amount').val(total);

    });





    function initSelect2() {        
        $('.ExpType').each(function () {
            var $this = $(this),
                opts = {};

            var pluginOptions = $this.data('plugin-options');
            //alert(pluginOptions);
            $this.themePluginSelect2(opts);

            if (pluginOptions)
                opts = pluginOptions;
           
            $this.themePluginSelect2(opts);
        });
    }

    // start: Fleet Shortage Damage

    $(document).on('change', '.ProdType', function () {

        var prod = $(this).val();
        var id = $(this).closest('tr').attr('id');
       
        $.ajax
                ({
                    url: "../FleetShortageDamage/GetPriceByProduct",
                    type: 'GET',
                    dataType: "json",
                    contentType: 'application/json',
                    data:{
                        'prod': prod
                    },
                    success: function (result) {
                        if (result == '[]' || result == null || result == 'undefined') {
                           
                            //$('.prdRate').html(0);
                            $('#' + id).find('.prdRate').val(0);
                            $('#' + id).find('.ProdRate').val(0);
                            $('#' + id).find('.Quantity').val('');
                            $('#' + id).find('.Amount').val('');
                        }
                        else {
                            $.each($.parseJSON(result), function (i, sub) {
                               
                                //$('.prdRate').html(sub.UnitPrice);
                                $('#' + id).find('.prdRate').html(sub.UnitPrice);
                                $('#' + id).find('.ProdRate').val(sub.UnitPrice);
                                $('#' + id).find('.Quantity').val('');
                                $('#' + id).find('.Amount').val('');
                            });
                        }
                        //console.log(result + data);
                        //console.log("test");

                    }

                });

    });
    // shortage damage 
    $(document).on('change', '.Quantity', function () {

        var qty = $(this).closest('.Quantity').val();
        var rate = $(this).closest('tr').find('.ProdRate').val();
        var total = qty * rate;
        $(this).closest('tr').find('.Amount').val(total);

    });




    $(document).on('click', '.btnDelTripExp', function () {

        event.preventDefault();
        
        var num = $('.clonedInputTripExp').length,

            newNum = new Number(num);

        if (newNum == 1) {            
            $('.btnDelTripExp').attr('disabled', true);

            new PNotify({
                title: 'Notification',
                text: 'Minimum fill one row!!',
                type: 'custom',
                addclass: 'notification-warning',
                icon: 'fa fa-warning'
            });

        }
        else {
            var tr = $(this).closest('tr');
            tr.addClass("bg-danger");

            tr.fadeOut(500, function () {
                var table = tr.closest('table');
                tr.remove();               
                updateIndexesExp(table);
            });
        }

    });

    $(document).on('change', '.ExpType', function () {
 
        var locationId = $(this).val();
        var id = $(this).closest('tr').attr('id');
       
        $.ajax
                ({
                    url: "../FleetTripExpense/GetExpRate",
                    type: 'POST',
                    datatype: 'application/json',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        locationId: +locationId
                    }),
                    success: function (result) {
                        if (result == '[]' || result == null || result == 'undefined') {                            
                            $('#' + id).find('.Amount').val(0);
                        }
                        else {
                            $.each($.parseJSON(result), function (i, sub) {                               
                                $('#' + id).find('.Amount').val(sub.Amount);
                            });
                        }

                        //sumOfColumns($('.clonedInputTripExp tbody'), 3);


                    }

                });

    });

    //$(document).on('change', '.Amount', function () {

        //var Amount = $(this).closest('.Amount').val();
        //alert("amount = " + Amount);

        //sumOfColumns($('.clonedInputTripExp tbody'), 3);

    //});

    // Update Clond Input fields Indexes
    function updateIndexesExp(table) {
        
        table.find("tr:gt(0)").each(function (i, row) {
            $(row).find("td:first").html(i + 1);
            var id = i + 1;
            
            $(row).find('.ExpType').attr('name', 'ExpInfo[' + id + '].ExpType');
            $(row).find('.Amount').attr('name', 'ExpInfo[' + id + '].Amount');
            
            $(row).attr('id', 'entryTripExp' + id);

            $(row).find('input, select').each(function (j, input) {
                
                var id = input.name.match(/\d+/);

                //$this = $(this);
                //var Amount = input.name.match('Amount');
                //total += parseInt($this.text());

                if (id != null && id.length && id.length == 1) {
                    var attr = $(input).attr("name");                    
                    var newName = attr.replace(attr.match(/\d+/), i);
                    $(input).attr("name", newName);
                }
            });

            
        });
    }


    //function sumOfColumns(table, columnIndex) {
    //    var totAmount = 0;
    //    table.find("tr").children("td:nth-child(" + columnIndex + ")")
    //    .each(function() {
    //        $this = $(this);
    //        if ($this.text() != "") {
                
    //            totAmount = (totAmount + parseInt($this.text()));
                    
    //            alert(totAmount);
    //        }
    //    });
    //    //return tot;
    //    alert(totAmount);
    //}

    function sumShort() {
        var inputs = document.frmTripExp["ShortageDamageList[].Amount"],
            result = 0;

        for (var i in inputs) {

            var input = inputs[i],
                val = input.value;
            if (val !== undefined && val !== '')
                result += parseInt(val);
        }
        document.frmTripExp.SubTotal.text = result;
        alert(result);
    }


    function sum() {
        var inputs = document.frmTripExp["ExpInfo[].Amount"],
            result = 0;

        for (var i in inputs) {

            var input = inputs[i],
                val = input.value;
            if (val !== undefined && val !== '')
                result += parseInt(val);
        }
        document.frmTripExp.SubTotal.text = result;
        alert(result);
    }

    //end : Trip Expenses


});

    
    
    
