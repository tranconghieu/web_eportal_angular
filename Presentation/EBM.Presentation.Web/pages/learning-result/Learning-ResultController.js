app.controller('Learning-ResultController', ['$scope', function ($scope) {

    $(document).ready(function () {

        $("#grid-courses").kendoGrid({
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
                title: "Tên khóa học",
                template: function (data) {
                    return '<a href="/#/app/detail-result" >' + data.ContactName + '</a>'
                },
            }, {
                field: "PostalCode",
                title: "Điểm",
                width: 100

            }]
        });
    });
}]);