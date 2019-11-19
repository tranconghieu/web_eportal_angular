app.controller('Vacation-RegisterController', ['$scope', function ($scope) {

    $(document).ready(function () {
        $("#combobox-class").kendoComboBox({
            autoWidth: true,

            placeholder: "Vui lòng chọn ",
            dataSource: {
                data: ["Toeic 240", "Căn bản", "Giao tiếp", "Sơ cấp"]
            }
        });

        $("#combobox-shift").kendoComboBox({
            autoWidth: true,

            placeholder: "Vui lòng chọn ",
            dataSource: {
                data: ["Sáng", "Trưa", "Chiều", "Tối"]
            }
        });
        $("#datepicker-from").kendoDatePicker();
        $("#datepicker-to").kendoDatePicker();

        //$("#monthpicker").kendoDatePicker({
        //    // defines the start view
        //    start: "year",

        //    // defines when the calendar should return date
        //    depth: "year",

        //    // display month and year in the input
        //    format: "dd/MM/yyyy",

        //    // specifies that DateInput is used for masking the input element
        //    dateInput: true

        //});
    })

}]);
