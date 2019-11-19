app.controller('Detail-ResultController', ['$scope', function ($scope) {

    $(document).ready(function () {
        (function () {
            $("#grid-result").data('kendoGrid').dataSource.read();
            //debugger
            setTimeout(function () {
                var height_conten = $(window).height() - $("#grid-result").offset().top - 20 - 50;
                (height_conten <= 360) && (height_conten = 360);
                $('#grid-result').css({ height: height_conten + 'px' });
                $("#grid-result").getKendoGrid().resize();
            }, 800)
        })
        $("#grid-result").kendoGrid({
            dataSource: {
                type: "odata",
                transport: {
                    read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
                },
                pageSize: 20
            },
            height: 400,

            sortable: true,
            pageable: {
                refresh: true,
                pageSizes: true,
                buttonCount: 5
            },
            columns: [{
                field: "ContactName",
                title: " ",
                width: 200,


            }, {
                field: "PostalCode",
                title: "Vắng",
                width: 150
            }, {
                field: "PostalCode",
                title: "Tỉ lệ",
                width: 150

            }, {
                field: "PostalCode",
                title: "Khoảng",
                width: 150

            }, {
                field: "PostalCode",
                title: "Điểm",
                width: 150

            }]
        });
    });
}]);