jQuery(document).ready(function () {

    jQuery("#calculate").click(function () {

        var pastReading = jQuery("#pastReading").val(),
            presentReading = jQuery("#presentReading").val();
        var unitConsumed = presentReading - pastReading;
            jQuery("#unitConsumed").text(unitConsumed);
            energyCharges = jQuery("#energyCharges");

        var first50Unit = 3.20 * 50,
            next150Unit = 3.90 * 150;
        var govDuty = 15,
            metRent = 10,
            fixedCharges = 15,
            fppaFactor = 1.7 ;
        jQuery("#fixedCharges").text(fixedCharges);
        jQuery("#meterRent").text(metRent);

        jQuery("#fpppaCharges").text(unitConsumed*fppaFactor);

        
        if (unitConsumed <= 50) {
            energyCharges.text(unitConsumed * 3.00 + "Rs");
        }
        else if (unitConsumed <= 200) {
            energyCharges.text(first50Unit + (unitConsumed - 50) * 3.50);
        }

        else if (unitConsumed > 200) {
            energyCharges.text(first50Unit + next150Unit + (unitConsumed - 200) * 4.80);
        }

        var govtDutyCharge = (15 / 100) * energyCharges.text();
                jQuery("#govDuty").text(govtDutyCharge);

                jQuery("#finalCharges").text(parseInt(energyCharges.text()) + parseInt(govtDutyCharge) + metRent + fixedCharges + (unitConsumed*fppaFactor));

        

    });
});