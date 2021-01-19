// String Enum
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
// Access String enum
console.log(PrintMedia.Newspaper);
console.log('Magazine');
// NEWSPAPER
// Magazine
// Heterogeneous Enum
// Heterogeneous là có thể chứa chữ và số.
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
console.log(Status.Deactivate);
