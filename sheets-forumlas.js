// Current formula
=IF( (B2>Settings!C$1) , ((B2-Settings!C$1)/Settings!C$2+(C2/Settings!C$3)) , (((B2-Settings!B$1)/Settings!C$2)+(C2/Settings!C$3)))

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
