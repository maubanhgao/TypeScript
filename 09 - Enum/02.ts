// String Enum
enum PrintMedia {
    Newspaper   = "NEWSPAPER",
    Newsletter  = "NEWSLETTER",
    Magazine    = "MAGAZINE",
    Book        = "BOOK"
}

// Access String enum
console.log(PrintMedia.Newspaper);
console.log('Magazine');
// NEWSPAPER
// Magazine


// Heterogeneous Enum
// Heterogeneous là có thể chứa chữ và số.
enum Status {
    Active = 'ACTIVE',
    Deactivate = 1,
    Pending
}
console.log(Status.Deactivate); // 1