/* Calculator Settings
    Target: B1:90 C1:120
    ISF:    B2:1  C2:35
    CHO:    B3:1  C3:8
    Basal:  22
    Using $ locks a value in when extending/dragging a formula across multiple
    cells.
*/

// Current formula
=IF( (B2>Settings!C$1) , ((B2-Settings!C$1)/Settings!C$2+(C2/Settings!C$3)) , (((B2-Settings!B$1)/Settings!C$2)+(C2/Settings!C$3)))


// Range adjustments
=
IF( B2>Settings!C$1 , ((B2-Settings!C$1)/Settings!C$2)+(C2/Settings!C$3),
IF( B2<Settings!B$1 , ((B2-Settings!B$1)/Settings!C$2)+(C2/Settings!C$3),
IF( AND(B2>=Settings!B$1,B2<=Settings!C$1) , C2/Settings!C$3,
IF( AND(ISBLANK(B2)=true,ISBLANK(C2)=true) , "Blank"))))

// Range test
=
IF( (B2>Settings!C$1) , "it's high",
IF( (B2<Settings!B$1) , "it's low",
IF( AND(B2>=Settings!B$1,B2<=Settings!C$1) , "it's just right")))


// Trying to make a formula for leaving blank cells when there's no data
=
IF( (B2>Settings!C$1) , ((B2-Settings!C$1)/Settings!C$2+(C2/Settings!C$3)),
IF( (B2<Settings!B$1) , ((B2-Settings!B$1)/Settings!C$2)+(C2/Settings!C$3)),
IF( ISBLANK(B2) , "blank"))

=
IF( (B2>Settings!C$1) , ((B2-Settings!C$1)/Settings!C$2+(C2/Settings!C$3)),
IF( (B2<Settings!B$1) , ((B2-Settings!B$1)/Settings!C$2)+(C2/Settings!C$3)),
"blank")

// Nested blank test thingy
=
IF( AND(ISBLANK(B2)=true,ISBLANK(C2)=true) , "bothblank",
IF( OR(ISBLANK(B2)=true,ISBLANK(C2)=true) , "atleastoneblank",
IF( AND(ISBLANK(B2)=false,ISBLANK(C2)=false) , "neitherblank")))
