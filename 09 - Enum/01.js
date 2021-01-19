// Enum cho phép chúng ta tạo một nhóm các giá trị hằng số trong một nơi chung.
// Có 3 loại Enum là Nummeric, String, Heterogeneous.
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
// Enum luôn được gán giá trị là số khi chúng được lưu.
var PrintMedia1;
(function (PrintMedia1) {
    PrintMedia1[PrintMedia1["Newspaper"] = 0] = "Newspaper";
    PrintMedia1[PrintMedia1["Newsletter"] = 1] = "Newsletter";
    PrintMedia1[PrintMedia1["Magazine"] = 2] = "Magazine";
    PrintMedia1[PrintMedia1["Book"] = 3] = "Book";
})(PrintMedia1 || (PrintMedia1 = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === "Outlook") {
        return PrintMedia.Magazine;
    }
}
var mediaType = getMedia('Forbes');
console.log(mediaType); // 3
